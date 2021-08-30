import React from 'react';

import './styles.scss';

interface Props {
  bold?: boolean;
  children: string;
  color: string;
  onClick: () => void;
  textSize: string;
}

const Button = ({ bold, children, color, onClick, textSize }: Props) => {
  const getClassNames = () => {
    const classNamesArr = ['button-container', `button-text-${textSize}`, `button-color-${color}`];

    if (bold) {
      classNamesArr.push('button-text-bold');
    }

    return classNamesArr.join(' ');
  };

  return (
    <button className={getClassNames()} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
