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
import Swal from 'sweetalert2';
const Free = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showRegister, setShowRegister] = useState(false);

  const { data: postData, refetch: postRefetch }: any = useGetPostsQuery(currentPage, 'free');
  const { data: userData } = useGetUsersQuery();
  const totalPages = postData?.total ? Math.ceil(postData?.total / 10) : undefined;

  const handleWriteButtonClick = () => {
    window.scrollTo(0, 0);
    setShowRegister(prev => !prev);

    if (userData?.user?.blocked_at !== null) {
      Swal.fire('정지유저는 불가합니다');
      setShowRegister(false);
    }
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
          <PostRegister onCancel={handleWriteButtonClick} isFree={true} />
        ) : (
          <div>
            <S.List>
              {postData?.posts?.map((post: any) => (
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
                currentPage={postData?.currentPage}
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

export default Free;
