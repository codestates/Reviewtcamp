require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');
const secret = process.env.ACCESS_SECRET;

module.exports = {
    generateAccessToken: (data) => {
        // TODO: Access token으로 sign합니다.
        // HINT: 토큰을 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
        return sign(data, secret, { expiresIn: '1d' })
    },
    sendAccessToken: (res, accessToken) => {
        // TODO: JWT 토큰을 쿠키로 전달합니다.
        return res.status(200).cookie('jwt', accessToken).send({
            token: `${accessToken}`,
            message: 'ok' 
        });
    },
    isAuthorized: (req) => {
        // TODO: JWT 토큰 정보를 받아서 검증합니다.
        // HINT: jsonwebtoken 라이브러리의 verify 함수를 사용하여 decode된 payload를 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
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
