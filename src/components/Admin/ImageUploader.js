import React, { useState } from 'react';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch('http://localhost:7000/upload', {
        method: 'POST',
        body: formData,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{marginTop: '500px'}}>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default ImageUploader;
