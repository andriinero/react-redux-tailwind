import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { decremented, incremented, selectCount } from '../counterSlice';

import { Button } from '@/components/ui/button';

const Counter = () => {
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  };

  const handleDecrement = () => {
    dispatch(decremented());
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl font-bold">{count}</h2>
      <div className="space-x-4">
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleDecrement}>-</Button>
      </div>
    </div>
  );
};

export default Counter;
