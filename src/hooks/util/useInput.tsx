import { useCallback, useState } from 'react';

const useInput = (intialValue: any) => {
  const [input, setInput] = useState(intialValue);

  const handleChange = useCallback((e: any) => {
    setInput(e.target.value);
  }, []);

  return [input, handleChange, setInput];
};

export default useInput;
