import React, { useCallback, useState } from 'react';
import { styled } from 'styled-components';
import { useChangeVetStatusMutation } from '../../../../hooks/query/useChangeVetStatusMutation';

const OPTIONS = [
  { value: 'accepted', name: '인증' },
  { value: 'rejected', name: '반려' },
  { value: 'pending', name: '대기' }
];
interface ColorOptions {
  [key: string]: string;
}
const COLORS: ColorOptions = {
  Accepted: '#43c223', //인증
  Rejected: '#e04938', //반려
  Pending: '#5429FF' //대기
};

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  defaultValue: string;
  vetId: number;
}

const SelectBox = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);
  const mutation = useChangeVetStatusMutation();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    mutation.mutate({ id: props.vetId, status: e.target.value });
  }, []);

  return (
    <ReportHandleSelect
      color={COLORS[selectedValue]}
      defaultValue={props.defaultValue}
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

function SelectBoxOptionProps() {
  return <SelectBox defaultValue="WaitingProgress" vetId={12345}></SelectBox>;
}
export default SelectBoxOptionProps;

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
