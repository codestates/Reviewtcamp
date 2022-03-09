const { user } = require('../../models'); 
const { generateAccessToken } = require('../tokenFunction/index');

/*
console.log(user) 
원가입을하면 DB user table 에 정보가 담겨야함
*/
module.exports = (req, res) => {
  // TODO: 회원가입 구현
  // console.log(req.body)

  const { id, name, email, password } = req.body;
  
  if( id === undefined || name === undefined || email === undefined || password === undefined){
    // id, name, email, password 중 하나라도 요청에서 제공되지 않을경우 422(unprocessable entity) 응답을 돌려줘야함.
    return res.status(422).send('insufficient parameters supplied')
  }
  user.findOne({ 
    where: { email }, 
  })
  .then(async (data) => {
    if(!data){
      // data에 정보가 없을때 user의 정보를 생성
      await user.create({ 
        id: id,
        name: name,
        email: email,
        password: password
    })
    .then((crateData) => {
      const accessToken = generateAccessToken(crateData.dataValues);
      // console.log('accessToken: ', accessToken);
      return res.cookie('jwt', accessToken).status(200).send({ message: 'ok' });
      })
    }
    return res.status(409).send('email exists')
  })
};



