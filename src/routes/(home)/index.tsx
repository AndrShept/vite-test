import { Card } from '@/components/Card';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { memo, useCallback, useState } from 'react';


const Index =  ()=> {
  console.log('render TATO')
  const [arr, setArr] = useState(
    Array.from({ length: 100 }, (_, idx) => ({
      name: idx,
      isSelected: false,
    }))
  );

  return (
    <div className='p-2 grid gap-1 md:grid-cols-4 grid-cols-2 '>
      {arr.map((item, idx) => (
        <Card  key={idx} setArr={setArr} item={item} />
      ))}
      <p>sdasd</p>
    </div>
  
  )
}
export const Route = createFileRoute('/(home)/')({
  component: Index,
 
  
});
