const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// set the storage engine
const storage = multer.diskStorage({
  destination: './public',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// initialize the upload variable
const upload = multer({
  storage: storage
}).single('image');

// handle POST request to /upload
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log(req.file);
      res.sendStatus(200);
    }
  });
});

// start the server
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server started on port ${port}`));
