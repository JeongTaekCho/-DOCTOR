import React, { useState } from 'react';
import * as S from './style';
import { BiSolidLeftArrow, BiSolidRightArrow, BiUser, BiHeart } from 'react-icons/bi';
import samplePosts from './data.ts';
import FreeRegister from '../FreeRegister/index.tsx';

const Free = () => {
  const postsPerPage = 10;
  const totalPosts = samplePosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [showRegister, setShowRegister] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = samplePosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleWriteButtonClick = () => {
    setShowRegister(prev => !prev);
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
              오래된순
              <input type="radio" />
              <span>
                인기순
                <input type="radio" />
              </span>
            </p>
          </S.RadioDiv>
          <S.List>
            {currentPosts.map(post => (
              <S.Post key={post.id}>
                <S.PostHeader>{post.title}</S.PostHeader>
                <S.PostUser>
                  <BiUser size="15" />
                  {post.author}
                  <S.PostDate>{post.date}</S.PostDate>
                </S.PostUser>
                <S.HeartDiv>
                  <S.PostHeart>
                    <BiHeart size="25" color="#9747ff" />
                    <S.HeartNumber>24</S.HeartNumber>
                  </S.PostHeart>
                </S.HeartDiv>
              </S.Post>
            ))}
          </S.List>
          <S.PageNumber>
            <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>
              <BiSolidLeftArrow size="12"></BiSolidLeftArrow>
            </button>
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                style={{ fontWeight: currentPage === number ? 'bold' : 'normal', margin: '0 5px' }}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPosts.length < postsPerPage || currentPage === totalPages}
            >
              <BiSolidRightArrow size="12"></BiSolidRightArrow>
            </button>
          </S.PageNumber>
          <S.ButtonDiv>
            <S.Button onClick={handleWriteButtonClick}>글쓰기</S.Button>
          </S.ButtonDiv>
        </div>
      )}
    </S.Container>
  );
};

export default Free;
