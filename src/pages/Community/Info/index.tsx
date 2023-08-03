import React, { useEffect, useState } from 'react';
import * as S from './style.ts';
import { BiUser, BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import Pagination from '../../../components/commons/Pagination/index.tsx';
import SideLayout from '../../../components/layout/SideBar.tsx';
import PostRegister from '../../../components/community/PostRegister/index.tsx';
import { useGetPostsQuery } from '../../../hooks/query/useGetPostsQuery.ts';
const Info = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showRegister, setShowRegister] = useState(false);
  const [order, setOrder] = useState<'oldest' | 'popularity'>('oldest');

  const { data: postData, refetch: postRefetch } = useGetPostsQuery(currentPage, 'info');

  const totalPages = postData?.total ? Math.ceil(postData?.total / 10) : undefined;

  const handleWriteButtonClick = () => {
    window.scrollTo(0, 0);
    setShowRegister(prev => !prev);
  };

  const handleOrderByDate = () => {
    setOrder('oldest');
  };

  const handleOrderByPopularity = () => {
    setOrder('popularity');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    postRefetch();
  }, [currentPage]);

  return (
    <S.Wrap>
      <S.SideDiv>
        <SideLayout> </SideLayout>
      </S.SideDiv>
      <S.Container>
        {showRegister ? (
          <PostRegister onCancel={() => setShowRegister(false)} isFree={false} />
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
              {postData?.posts?.map(post => (
                <Link to={ROUTE.FREEDETAIL.path} key={post.id}>
                  <S.Post>
                    <S.LeftDiv>
                      <S.PostHeader>{post.title}</S.PostHeader>
                      <S.PostUser>
                        <BiUser size="15" />
                        {post?.users?.nickname}
                        <S.PostDate>{post?.created_at.slice(0, 10)}</S.PostDate>
                      </S.PostUser>
                    </S.LeftDiv>
                    <S.HeartDiv>
                      <S.HeartContainer>
                        <BiHeart size="25" color="#9747ff" style={{ verticalAlign: 'middle' }} />
                        <S.PostHeart>{post?.like}</S.PostHeart>
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
    </S.Wrap>
  );
};

export default Info;
