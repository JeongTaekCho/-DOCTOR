import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useChangeVetStatusMutation } from '../../../../hooks/query/useChangeVetStatusMutation';
import Swal from 'sweetalert2';

const OPTIONS = [
  { value: 'accepted', name: '인증' },
  { value: 'rejected', name: '반려' },
  { value: 'pending', name: '대기' }
];
interface ColorOptions {
  [key: string]: string;
}
const COLORS: ColorOptions = {
  accepted: '#43c223', //인증
  rejected: '#e04938', //반려
  pending: '#5429FF' //대기
};

interface Props {
  vetId: number;
  email: string;
}

const SelectBox = ({ email, vetId }: Props) => {
  const [selectedValue, setSelectedValue] = useState('');
  const mutation = useChangeVetStatusMutation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    mutation.mutate(
      { id: vetId, status: e.target.value, email: email },
      {
        onSuccess: () => {
          Swal.fire('수의사 신청 정보 변경 성공');
        },
        onError: (err: any) => {
          Swal.fire(err.response.data.error);
        }
      }
    );
  };

  return (
    <ReportHandleSelect color={COLORS[selectedValue]} onChange={handleChange}>
      {OPTIONS.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </ReportHandleSelect>
  );
};

export default SelectBox;

const ReportHandleSelect = styled.select<{ color: string }>`
  display: block;
  width: 60%;
  padding: 0.7rem;
  background-color: ${props => props.color || '#a898fa'};
  border-radius: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
