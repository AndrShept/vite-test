import { cn } from '@/lib/utils';
import React, { memo, useState, type Dispatch, type SetStateAction } from 'react';

interface Props {
  item: {
    name: number;
    isSelected: boolean;
  };
  setArr: Dispatch<
    SetStateAction<{
      name: number;
      isSelected: boolean;
    }[]>
  >,
}

export const Card =memo( ({ item, setArr }: Props) => {
    console.log('redneder')
  const onChange = () => {
    setArr((prev) => {
 return prev.map(card => {
    if(card.name === item.name){
        return {...card,
            isSelected: !card.isSelected
        }
    }
   return card
 })
    });
  };
  return (
    <article
      onClick={onChange}
      className={cn('border p-10 hover:bg-secondary/30', {
        'border-green-500': item.isSelected,
      })}
    >
      {item.name}
    </article>
  );
})
