import React from 'react';
import * as S from './style';

const List = () => {
  const posts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1, //서버랑 연결할 때 유니크 값으로
    title: `게시글 ${index + 1}`
  }));

  return (
    <S.Wrap>
      <S.Container>
        {posts.map(post => (
          <S.Post key={post.id}>{post.title}</S.Post>
        ))}
      </S.Container>
    </S.Wrap>
  );
};

export default List;
