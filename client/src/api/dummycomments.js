
// 테스트용 더미 데이터로 수정하지 않습니다.
// import shortid from 'shortid';

const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };
  
  const dummycomments = [
    {
      // id: shortid(),
      username: 'kimcoding',
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content:
        '코드스테이츠 짱입니다',
      createdAt: '2022-02-24T16:17:47.000Z',
      updatedAt: '2022-02-24T16:17:47.000Z',
    },
   {
    //   id: shortid(),
      username: 'parkhacker',
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content:
        '코드스테이츠에서 많은 것을 배우고 있습니다',
      createdAt: '2022-02-25T16:17:47.000Z',
      updatedAt: '2022-02-25T16:17:47.000Z',
    },
    {
      // id: shortid(),
      username: 'leedesign',
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content:
        '동료들 덕분에 쉬지 않고 달리고 있네요. 프로젝트 화이팅',
      createdAt: '2022-02-26T16:17:47.000Z',
      updatedAt: '2022-02-26T16:17:47.000Z',
    },
    {
      // id: shortid(),
      username: 'songfront',
      picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content:
        '다들 취업 잘 됐으면 좋겠습니다.',
      createdAt: '2022-02-27T16:17:47.000Z',
      updatedAt: '2022-02-27T16:17:47.000Z',
    },
    {
      // id: shortid(),
      username: 'choiback',
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content:
        '마지막까지 화이팅입니다!',
      createdAt: '2019-02-28T16:17:47.000Z',
      updatedAt: '2019-02-28T16:17:47.000Z',
    },
  ];
  
  export default dummycomments;
  