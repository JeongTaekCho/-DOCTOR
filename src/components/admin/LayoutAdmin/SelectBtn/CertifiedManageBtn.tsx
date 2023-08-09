import React, { useCallback, useState } from 'react';
import { styled } from 'styled-components';
import { useChangeVetStatusMutation } from '../../../../hooks/query/useChangeVetStatusMutation';
import Swal from 'sweetalert2';

const OPTIONS = [
  { value: 'pending', name: '대기' },
  { value: 'accepted', name: '인증' },
  { value: 'rejected', name: '반려' }
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
  status: string;
  vetAuthRefetch: () => void;
}

const SelectBox = ({ email, vetId, vetAuthRefetch, status }: Props) => {
  const [selectedValue, setSelectedValue] = useState('');
  const mutation = useChangeVetStatusMutation();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(e.target.value);

      mutation.mutate(
        { id: vetId, status: e.target.value, email: email },
        {
          onSuccess: () => {
            Swal.fire('수의사 신청 정보 변경 성공');
            vetAuthRefetch();
          },
          onError: (err: any) => {
            Swal.fire(err.response.data.error);
          }
        }
      );
    },
    [vetId, email, mutation]
  );

  return (
    <ReportHandleSelect
      disabled={status === 'accepted'}
      value={status}
      color={COLORS[selectedValue]}
      onChange={handleChange}
    >
      {OPTIONS.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </ReportHandleSelect>
  );
};

export default SelectBox;

const ReportHandleSelect = styled.select<{ color?: string }>`
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
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
