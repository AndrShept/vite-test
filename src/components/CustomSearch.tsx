import React, { memo, useState } from 'react';

export const CustomSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <input
        className='p-3 border bg-secondary/40'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
