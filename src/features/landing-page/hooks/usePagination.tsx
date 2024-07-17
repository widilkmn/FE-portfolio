import { useState } from "react";

const usePagination = () => {
  const [increment, setIncrement] = useState<number>(0);

  const handleIncrement = () => {
    setIncrement((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setIncrement((prev) => (prev >= 1 ? prev - 1 : prev));
  };
  return { increment, handleIncrement, handleDecrement };
};

export default usePagination;
