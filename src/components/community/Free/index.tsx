import React, { useState } from 'react';
import * as S from './style';
import { BiSolidLeftArrow, BiSolidRightArrow, BiUser, BiHeart } from 'react-icons/bi';
import samplePosts from './data.ts';
import FreeRegister from '../FreeRegister/index.tsx';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import { Link } from 'react-router-dom';

const Free = () => {
  const postsPerPage = 10;
  const totalPosts = samplePosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [showRegister, setShowRegister] = useState(false);
  const [isOrderByDate, setIsOrderByDate] = useState(true);
  const [isOrderByPopularity, setIsOrderByPopularity] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = samplePosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleWriteButtonClick = () => {
    setShowRegister(prev => !prev);
  };

  const handleOrderByDate = () => {
    setIsOrderByDate(true);
    setIsOrderByPopularity(false);
  };

  const handleOrderByPopularity = () => {
    setIsOrderByDate(false);
    setIsOrderByPopularity(true);
  };
  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <S.Container>
      {showRegister ? (
        <FreeRegister onCancel={() => setShowRegister(false)} />
      ) : (
        <div>
          <S.RadioDiv>
            <p>
              <span
                style={{
                  marginRight: '1rem',
                  fontWeight: isOrderByDate ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
                onClick={handleOrderByDate}
              >
                최신순
              </span>
              <span
                style={{
                  fontWeight: isOrderByPopularity ? 'bold' : 'normal',
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
            <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>
              <BiSolidLeftArrow size="13"></BiSolidLeftArrow>
            </button>
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                style={{
                  fontWeight: currentPage === number ? 'bold' : 'normal',
                  margin: '0 5px',
                  fontSize: '2rem'
                }}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPosts.length < postsPerPage || currentPage === totalPages}
            >
              <BiSolidRightArrow size="13"></BiSolidRightArrow>
            </button>
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

export default Free;
