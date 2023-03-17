import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Upload image data to JSON server
    const imageData = {
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type,
    };
    const response = await axios.post('http://localhost:8000/images', imageData);

    // Write image file to public directory
    const fileName = `${response.data.id}-${selectedFile.name}`;
    const fileUrl = `${process.env.PUBLIC_URL}/images/${fileName}`;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const imageDataUrl = fileReader.result;
      const imageBuffer = Buffer.from(imageDataUrl.split(',')[1], 'base64');
      fs.writeFile(`public/images/${fileName}`, imageBuffer, (err) => {
        if (err) throw err;
        console.log(`Image ${fileName} saved to public/images`);
      });
    };
    fileReader.readAsDataURL(selectedFile);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Choose an image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploader;
