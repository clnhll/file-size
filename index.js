var express = require('express');
var multer  = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var app = express();

app.get('/', (req, res) => {
  res.send(`
    <body><p>Submit a file to view its filesize.</p>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file">
      <input type="submit">
    </form>
    </body>
  `);
});

app.post('/upload', upload.single('file'), function (req, res, next) {
  res.send({ size: req.file.size });
});

app.listen(8080, () => {
  console.log('listening on 8080');
});
