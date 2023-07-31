import React, { useState } from 'react';
import * as S from './style';
import samplePosts from './data';
import { BiUser, BiHeart } from 'react-icons/bi';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import { Link } from 'react-router-dom';
import Pagination from '../../commons/Pagination/index.tsx';
const List = () => {
  const postsPerPage = 10;
  const totalPosts = samplePosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = samplePosts.slice(indexOfFirstPost, indexOfLastPost);

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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </S.PageNumber>
    </S.Wrap>
  );
};

export default List;
