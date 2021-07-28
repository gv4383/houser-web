import React from 'react';

import './styles.scss';

interface Props {
  bold?: boolean;
  children: string;
  color: 'dark' | 'green' | 'red';
  textSize: 'sm' | 'md' | 'lg';
}

const Button = ({ bold, children, color, textSize }: Props) => {
  const getClassNames = () => {
    const classNamesArr = ['button-container', `button-text-${textSize}`, `button-color-${color}`];

    if (bold) {
      classNamesArr.push('button-text-bold');
    }

    return classNamesArr.join(' ');
  };
  console.log('CLASS NAMES:', getClassNames());

  return <button className={getClassNames()}>{children}</button>;
};

export default Button;
