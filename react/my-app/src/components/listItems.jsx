import React from 'react';

const ItemList = ({ items }) => {
  if (items.length === 0) {
    return <div>No items available</div>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ItemList;
