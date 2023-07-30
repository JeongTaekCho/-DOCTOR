import React, { useState } from 'react';
import * as S from './style';
import { BiUser, BiHeart } from 'react-icons/bi';
import samplePosts from './data.ts';
import { Link } from 'react-router-dom';
import InfoRegister from '../InfoRegister/index.tsx';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import Pagination from '../../commons/Pagination/index.tsx';
const Info = () => {
  const postsPerPage = 10;
  const totalPosts = samplePosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [showRegister, setShowRegister] = useState(false);
  const [order, setOrder] = useState<'oldest' | 'popularity'>('oldest');

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = samplePosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleWriteButtonClick = () => {
    setShowRegister(prev => !prev);
  };

  const handleOrderByDate = () => {
    setOrder('oldest');
  };

  const handleOrderByPopularity = () => {
    setOrder('popularity');
  };

  return (
    <S.Container>
      {showRegister ? (
        <InfoRegister onCancel={() => setShowRegister(false)} />
      ) : (
        <div>
          <S.RadioDiv>
            <p>
              <span
                style={{
                  marginRight: '1rem',
                  fontWeight: order === 'oldest' ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
                onClick={handleOrderByDate}
              >
                오래된순
              </span>
              <span
                style={{
                  fontWeight: order === 'popularity' ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
                onClick={handleOrderByPopularity}
              >
                인기순
              </span>
            </p>
          </S.RadioDiv>
          <S.List>
            {currentPosts.map(post => (
              <Link to={ROUTE.FREEDETAIL.path} key={post.id}>
                <S.Post>
                  <S.LeftDiv>
                    <S.PostHeader>{post.title}</S.PostHeader>
                    <S.PostUser>
                      <BiUser size="15" />
                      {post.author}
                      <S.PostDate>{post.date}</S.PostDate>
                    </S.PostUser>
                  </S.LeftDiv>
                  <S.HeartDiv>
                    <S.HeartContainer>
                      <BiHeart size="25" color="#9747ff" style={{ verticalAlign: 'middle' }} />
                      <S.PostHeart>24</S.PostHeart>
                    </S.HeartContainer>
                  </S.HeartDiv>
                </S.Post>
              </Link>
            ))}
          </S.List>
          <S.PageNumber>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </S.PageNumber>
          <S.ButtonContainer>
            <S.ButtonDiv>
              <S.Button onClick={handleWriteButtonClick}>글쓰기</S.Button>
            </S.ButtonDiv>
          </S.ButtonContainer>
        </div>
      )}
    </S.Container>
  );
};

export default Info;
