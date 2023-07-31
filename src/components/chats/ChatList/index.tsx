import React, { ChangeEvent, MouseEvent, useState } from 'react';
import * as S from '../ChatList/style';
import ProfileImg from '../../commons/ProfileImg';
import { Rating } from '@mui/material';
import Swal from 'sweetalert2';
import { useConsultRequestMutation } from '../../../hooks/query/useConsultRequestMutation';

interface ChatListProps {
  userToken?: string | null;
  name: string;
  hospitalName: string;
  profileImg: string | null;
  doctorEmail: string;
  grade?: number | null;
}

const ChatList = ({
  userToken,
  name,
  hospitalName,
  profileImg,
  doctorEmail,
  grade
}: ChatListProps) => {
  console.log(doctorEmail);
  const [consult, setConsult] = useState('');
  const [isConsultModal, setIsConsultModal] = useState(false);

  const { mutate: consultRequestMutate } = useConsultRequestMutation();

  const handleToggleConsultModal = () => {
    if (userToken) {
      setIsConsultModal(prev => !prev);
    } else {
      Swal.fire('로그인 후 상담신청이 가능합니다.');
    }
  };

  const handleChangeConsult = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setConsult(e.target.value);
  };

  const handleConsultRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    consultRequestMutate(
      {
        vetEmail: doctorEmail,
        message: consult
      },
      {
        onSuccess: () => {
          setIsConsultModal(false);
          setConsult('');
          Swal.fire('상담신청이 완료 되었습니다.');
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  return (
    <>
      <S.ChatList>
        <S.ListBox>
          <S.ListContainer>
            <ProfileImg w="8rem" h="8rem" src={profileImg || '/images/commons/kkam.png'} />
            <S.ListContentBox>
              <S.NameRateBox>
                <p>
                  {name} [{hospitalName}]
                </p>
                <Rating name="read-only" value={grade} readOnly size="large" />
              </S.NameRateBox>
              <S.ListDetail>검은인간 동물병원에서 제일 실력있는 수의사 입니다.</S.ListDetail>
            </S.ListContentBox>
          </S.ListContainer>
          <S.ListBtnBox type="button" onClick={handleToggleConsultModal}>
            상담신청
          </S.ListBtnBox>
        </S.ListBox>
      </S.ChatList>
      {isConsultModal && (
        <S.ChatFormBg>
          <S.ChatForm>
            <S.FormTitle>
              원활한 상담을 위해
              <br />
              아이의 정보를 입력해주세요!
            </S.FormTitle>
            <S.TextArea
              value={consult}
              onChange={handleChangeConsult}
              placeholder="EX) 
견종: 포메라니안
몸무게: 5kg
상세내용: 등쪽에 붉은 반점이 있습니다.
              "
            />
            <S.FormBtnBox>
              <S.FormSubmitBtn type="submit" onClick={handleConsultRequest}>
                상담신청
              </S.FormSubmitBtn>
              <S.FormCancelBtn type="button" onClick={handleToggleConsultModal}>
                취소하기
              </S.FormCancelBtn>
            </S.FormBtnBox>
          </S.ChatForm>
        </S.ChatFormBg>
      )}
    </>
  );
};

export default ChatList;
