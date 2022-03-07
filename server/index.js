require("dotenv").config();
const fs = require('fs');
const https = require('https');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const controller = require('./controller');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome home 😁');
});

app.post('/signup', (req, res) => {
  res.send('✅ signup page');
});

// app.get('/signin', controller.signin)
// app.get('/board', './controller/board.js')

// process.env.HTTPS_PORT 환경 변수 PORT에 있는 모든 것을 의미하며, 아무것도 없으면 8080을 실행
const HTTPS_PORT = process.env.HTTPS_PORT || 8080;

if(fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log(`✅ Listening on 'http://localhost:${HTTPS_PORT}'`));
} else{
  server = app.listen(HTTPS_PORT)

}

// https
// .createServer(
//     {
//       key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
//       cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
//     },
//     function (req, res) {
//       res.write(`start https server! now port ${HTTPS_PORT}`);
//       res.end();
//     }
//   )
//   .listen(HTTPS_PORT);