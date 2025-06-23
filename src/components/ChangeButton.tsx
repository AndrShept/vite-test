import React, { memo, type Dispatch, type SetStateAction } from 'react';
import { Button } from './ui/button';

export const ChangeButton = memo(({
  setChange,
}: {
  setChange: Dispatch<SetStateAction<boolean>>;
}) => {
  return <Button onClick={() => setChange((prev) => !prev)}>CHANGE</Button>;
})
