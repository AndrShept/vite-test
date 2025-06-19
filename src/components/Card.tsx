import { cn } from '@/lib/utils';
import React, {
  memo,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface Props {
  item: {
    name: number;
    isSelected: boolean;
    id:string
  };
  setArr: Dispatch<
    SetStateAction<
      {
        name: number;
        isSelected: boolean;
        id: string;
      }[]
    >
  >;
}

export const Card = memo(({ item, setArr }: Props) => {
  console.log('card');
  const onChange = () => {
    setArr((prev) => {
      return prev.map((card) => {
        if (card.name === item.name) {
          return { ...card, isSelected: !card.isSelected };
        }
        return card;
      });
    });
  };
  const onDelete = (id: string) => {
    setArr((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <article
      onClick={onChange}
      className={cn('border p-10 hover:bg-secondary/30 ', {
        'border-green-500': item.isSelected,
      })}
    >
      {item.name}
      <button
        onClick={() => onDelete(item.id)}
        className='text-red-500 hover:bg-secondary rounded-md border size-7 flex items-center justify-center   '
      >
        X
      </button>
    </article>
  );
});
