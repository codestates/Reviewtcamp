require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');
const secret = process.env.ACCESS_SECRET;

module.exports = {
    generateAccessToken: (data) => {
        // Access token으로 sign
        return sign(data, secret, { expiresIn: '1d' })
    },
    sendAccessToken: (res, accessToken) => {
        // JWT 토큰을 쿠키로 전달
        return res.status(200).cookie('jwt', accessToken).send({
            token: `${accessToken}`,
            message: 'ok' 
        });
    },
    isAuthorized: (req) => {
        // JWT 토큰 정보를 받아서 검증
        const cookie = req.headers["cookie"];
        // console.log(cookie)
        if (!cookie) {
        return null;
        }
        const temp1 = cookie.split(" ")[0];
        const temp2 = temp1.split('=')[1];
        const token = temp2.slice(0,-1);
        return verify(token, secret);
    }
};
