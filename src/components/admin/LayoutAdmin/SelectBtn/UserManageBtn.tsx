/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
import React, { useCallback, useState } from 'react';
import { styled } from 'styled-components';

const OPTIONS = [
  { value: 'Normal', name: '정상 계정' },
  { value: 'WeekSuspension', name: '2주 정지' },
  { value: 'ForeverSuspension', name: '영구 정지' },
  { value: 'SendAlert', name: '강제 탈퇴' },
  { value: 'WaitingProgress', name: '정지 해제' }
];
interface ColorOptions {
  [key: string]: string;
}
const COLORS: ColorOptions = {
  Normal: '#667085',
  WeekSuspension: '#000000',
  ForeverSuspension: '#030303',
  SendAlert: '#EB4335',
  WaitingProgress: '#344054'
};

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  defaultValue: string;
}

const SelectBox = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  }, []);

  return (
    <IdHandleSelect
      color={COLORS[selectedValue]}
      defaultValue={props.defaultValue}
      onChange={handleChange}
    >
      {OPTIONS.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </IdHandleSelect>
  );
};

function SelectBoxOptionProps() {
  return <SelectBox defaultValue="WaitingProgress"></SelectBox>;
}
export default SelectBoxOptionProps;

const IdHandleSelect = styled.select<{ color: string }>`
  display: block;
  width: 60%;
  padding: 0.7rem;
  background-color: ${props => props.color || '#4e2bf5'};
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
