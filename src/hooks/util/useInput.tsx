import { useCallback, useState } from 'react';

const useInput = (intialValue: any) => {
  const [input, setInput] = useState(intialValue);

  const handleChange = useCallback((e: any) => {
    setInput(e.target.value);
  }, []);

  return [input, handleChange, setInput];
};

export default useInput;

// prettier오류인가? 저장하면 ,가 생겨요..

// import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

// type ReturnTypes<T = any> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

// const useInput = <T = any>(intialValue: T): ReturnTypes<T> => {
//   const [input, setInput] = useState(intialValue);

//   const handleChange = useCallback((e) => {
//     setInput(e.target.value);
//   }, []);

//   return [input, handleChange, setInput];
// };

// export default useInput;
