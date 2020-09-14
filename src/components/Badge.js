import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const Badge = () => {
  const context = useContext(CartContext);
  return (
    context.count > 0 && (
      <div className="badge">
        <span>{context.count}</span>
      </div>
    )
  );
};

export default Badge;
