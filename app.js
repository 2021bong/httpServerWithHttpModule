let users = [
  {
    profileImg: './img/default_profile.png',
    userId: 'justcode',
    desc: '> 저스트코드 | 부트캠프',
  },
  {
    profileImg: './img/default_profile.png',
    userId: 'justuser',
    desc: '걍 유저입니다',
  },
  {
    profileImg: './img/default_profile.png',
    userId: 'just_do_it!',
    desc: '나이키를 좋아합니다',
  },
  {
    profileImg: './img/default_profile.png',
    userId: 'happy2022',
    desc: '홍길동(hong gil dong)',
  },
  {
    profileImg: './img/bongprofile.png',
    userId: '2021bong',
    desc: '봉원희입니다',
  },
  {
    profileImg: './img/bongprofile.png',
    userId: 'bong_bong',
    desc: '봉보로봉봉',
  },
  {
    profileImg: './img/default_profile.png',
    userId: 'yahoho',
    desc: '',
  },
  {
    profileImg: './img/default_profile.png',
    userId: 'alkjgjlsgls',
    desc: '#f4f',
  },
  {
    profileImg: './img/heart_full.png',
    userId: '__._.__',
    desc: '2000.02.02',
  },
  {
    profileImg: './img/heart_full.png',
    userId: 'yewon_J',
    desc: 'justcode 6기',
  },
];

let feeds = [
  {
    id: 1,
    userName: '2021bong',
    imageSrc: './img/board_img.png',
    imgAlt: '과일 스티커',
    likeCount: 123,
    content: '공부화이팅~~😀😀😀',
    allComment: 3,
    createdTime: 1,
  },
  {
    id: 2,
    userName: 'justcode_bong',
    imageSrc: './img/board2_img.jpg',
    imgAlt: '마루는 강쥐 - 마루',
    likeCount: 1127482,
    content: '마루는 강쥐 보시나요? 아주 재밌어요 기절합니당 ㅎㅎㅎㅎ',
    allComment: 322,
    createdTime: 13,
  },
  {
    id: 3,
    userName: 'tomato2022',
    imageSrc: './img/board3_img.png',
    imgAlt: '토마토 캐릭터',
    likeCount: 1,
    content: '울퉁불퉁 멋진 몸매에 빨간 옷을 입고',
    allComment: 11,
    createdTime: 24,
  },
  {
    id: 4,
    userName: 'catperson',
    imageSrc:
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    imgAlt: '썬글라스를 쓴 고양이',
    likeCount: 239,
    content: '고양이가 최고야 지구는 고양이꺼야',
    allComment: 53,
    createdTime: 1,
  },
  {
    id: 5,
    userName: 'devil_23',
    imageSrc:
      'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    imgAlt: '썬글라스를 쓴 고양이',
    likeCount: 0,
    content: '흙염룡이 날뛴다 . . .',
    allComment: 0,
    createdTime: 48,
  },
];

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'hi!' });
});

app.post('/signup', (req, res) => {
  const user = req.body.newuser;
  users.push(user);
  res.json({ message: 'signup success!' });
});

app.post('/posting', (req, res) => {
  const feed = req.body.newfeed;
  feeds.push(feed);
  res.json({ message: 'posting success!' });
});

app.get('/posting_get', (req, res) => {
  res.json({ data: feeds });
});

app.patch('/posting_modify', (req, res) => {
  const content = req.body.newcontent;
  feeds[content.id - 1] = content;
  res.json({ data: feeds[content.id - 1] });
});

app.delete('/posting_delete', (req, res) => {
  const deleteContent = req.body.delete;
  feeds.splice(deleteContent.id - 1, 1);
  console.log('최종피드', feeds);
  res.json({ message: 'postingDeleted' });
});

const server = http.createServer(app);

server.listen(8000, (req, res) => {
  console.log({ message: 'Listening to requests on port 8000' });
});
