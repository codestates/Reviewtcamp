require("dotenv").config();
const fs = require('fs');
const https = require('https');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const controller = require('./controller');
const app = express();

const { user } = require('./models/user'); 

// console.log(user)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS']
}));

app.get('/', (req, res, next) => {
  res.send('welcome home 😁');
});
app.post('/signup', controller.signup);
// app.post('/signin', controller.signin);

// app.get('/board', './controller/board.js')

const HTTPS_PORT = process.env.HTTPS_PORT || 8080;
// process.env.HTTPS_PORT 환경 변수 PORT에 있는 모든 것을 의미하며, 아무것도 없으면 8080을 실행

if(fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log(`✅ Listening on 'https://localhost:${HTTPS_PORT}'`));
} else{
  server = app.listen(HTTPS_PORT);
}