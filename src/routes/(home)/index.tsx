import { Card } from '@/components/Card';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { memo, useCallback, useState } from 'react';


const Index =  ()=> {
  const [arr, setArr] = useState(
    Array.from({ length: 100 }, (_, idx) => ({
      name: idx,
      isSelected: false,
      id: Math.random().toString()
    }))
  );
console.log('render')
  return (
    <div className='p-2 grid gap-1 md:grid-cols-4 grid-cols-2 '>
      {arr.map((item, idx) => (
        <Card  key={item.id} setArr={setArr} item={item}  />
      ))}
    </div>
  )
}
export const Route = createFileRoute('/(home)/')({
  component: Index,
 
  
});
