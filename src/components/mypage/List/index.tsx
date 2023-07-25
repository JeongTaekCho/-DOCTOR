import React, { useState } from 'react';
import * as S from './style';
import samplePosts from './data';
import { BiUser, BiHeart, BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import { Link } from 'react-router-dom';

const List = () => {
  const postsPerPage = 10;
  const totalPosts = samplePosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = samplePosts.slice(indexOfFirstPost, indexOfLastPost);

  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <S.Wrap>
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
    </S.Wrap>
  );
};

export default List;
