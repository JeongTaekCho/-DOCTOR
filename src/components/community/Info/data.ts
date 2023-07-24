const samplePosts = [
  {
    id: 1,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 2,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 3,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 4,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 5,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 6,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 7,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 8,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 9,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 10,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 11,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 12,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 13,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 14,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 15,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 16,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 17,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 18,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 19,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 20,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 21,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 22,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 23,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 24,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 25,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 26,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 27,
    title: '정보게시판',
    author: '엘리스',
    date: '2023-07-22'
  },
  {
    id: 28,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 29,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 30,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 31,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 32,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 33,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 34,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 35,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 36,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 37,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 38,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 39,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 40,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 41,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 42,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 43,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 44,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 45,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 46,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 47,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 48,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 49,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },

  {
    id: 50,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  },
  {
    id: 51,
    title: '안녕하세요',
    author: '유승제',
    date: '2023-07-23'
  }
];

export default samplePosts;
