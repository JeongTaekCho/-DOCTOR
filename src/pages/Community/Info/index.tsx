import React, { useEffect, useState } from 'react';
import * as S from './style.ts';
import { BiUser } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import Pagination from '../../../components/commons/Pagination/index.tsx';
import SideLayout from '../../../components/layout/SideBar.tsx';
import PostRegister from '../../../components/community/PostRegister/index.tsx';
import { useGetPostsQuery } from '../../../hooks/query/useGetPostsQuery.ts';
import { useGetUsersQuery } from '../../../hooks/query/useGetUsersQuery.ts';
import { tokenAtom } from '../../../atoms/atoms.ts';
import { useAtomValue } from 'jotai';
import Swal from 'sweetalert2';
import TitleBar from '../../../components/community/TitleBar/index.tsx';
const Info = () => {
  const auth = useAtomValue(tokenAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [showRegister, setShowRegister] = useState(false);
  // const [order, setOrder] = useState<'oldest' | 'popularity'>('oldest');

  const { data: postData, refetch: postRefetch } = useGetPostsQuery(currentPage, 'info');

  const totalPages = postData?.total ? Math.ceil(postData?.total / 10) : undefined;
  const { data: userData } = useGetUsersQuery();
  const handleWriteButtonClick = () => {
    window.scrollTo(0, 0);
    setShowRegister(prev => !prev);

    if (!auth) {
      Swal.fire('게시글을 작성하려면 로그인이 필요합니다');
      return;
    }

    if (userData?.user?.blocked_at !== null) {
      Swal.fire('정지유저는 불가합니다');
      setShowRegister(false);
    }
  };

  // const handleOrderByDate = () => {
  //   setOrder('oldest');
  // };

  // const handleOrderByPopularity = () => {
  //   setOrder('popularity');
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    postRefetch();
  }, [currentPage]);

  return (
    <S.Wrap>
      <S.SideDiv>
        <SideLayout />
      </S.SideDiv>
      <S.Container>
        <TitleBar title="정보게시판" />
        {showRegister ? (
          <PostRegister onCancel={() => setShowRegister(false)} isFree={false} />
        ) : (
          <div>
            {/* <S.RadioDiv>
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
            </S.RadioDiv> */}
            <S.List>
              {postData?.posts?.map(post => (
                <Link to={`${ROUTE.FREEDETAIL.link}/${post.id}`} key={post.id}>
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
                        {post?.likes?.[0]?.is_like ? (
                          <AiFillHeart
                            size="25"
                            color="#9747ff"
                            style={{ verticalAlign: 'middle' }}
                          />
                        ) : (
                          <AiOutlineHeart
                            size="25"
                            color="#9747ff"
                            style={{ verticalAlign: 'middle' }}
                          />
                        )}
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
