// // TODO: 로그인 구현
// const { user } = require("../../models");
// const { generateAccessToken, sendAccessToken } = require("../tokenFunction/index");

// module.exports = (req, res) => {
//     // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
//     console.log(req.body)
//     const { email, password } = req.body;
//     user.findOne({ where: { email, password } }).then((data) => {
//         if (!data) {
//         return res.status(404).send("invalid user or wrong password");
//         } else {
//         const accessToken = generateAccessToken(data.dataValues);
//         return sendAccessToken(res, accessToken);
//         }
//     });
//     };
