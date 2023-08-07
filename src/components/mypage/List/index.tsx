import React, { useState } from 'react';
import * as S from './style';
import { BiHeart } from 'react-icons/bi';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import { Link } from 'react-router-dom';
import Pagination from '../../commons/Pagination/index.tsx';
import { useGetUserPostQuery } from '../../../hooks/query/useGetUserPostQuery.ts';

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const List = () => {
  const { data: postList } = useGetUserPostQuery();
  const postsPerPage = 10;
  const totalPosts: any = postList?.data?.length;
  const totalPages: number | undefined = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList?.data?.slice(indexOfFirstPost, indexOfLastPost);

  if (!currentPosts || currentPosts.length === 0) {
    return (
      <div style={{ width: '100%', height: '100%', textAlign: 'center', paddingTop: '7rem' }}>
        <p style={{ fontSize: '3rem', fontWeight: '600' }}>작성한 게시물이 없습니다</p>
      </div>
    );
  }

  return (
    <S.Wrap>
      <S.List>
        {currentPosts.map(post => (
          <Link to={`${ROUTE.FREEDETAIL.link}/${post.id}`} key={post.id}>
            <S.Post>
              <S.LeftDiv>
                <S.PostHeader>{post.title}</S.PostHeader>
                <S.PostUser>
                  <S.PostDate>{formatDate(post.created_at)}</S.PostDate>
                </S.PostUser>
              </S.LeftDiv>
              <S.HeartDiv>
                <S.HeartContainer>
                  <BiHeart size="25" color="#9747ff" style={{ verticalAlign: 'middle' }} />
                  <S.PostHeart>{post.like}</S.PostHeart>
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
