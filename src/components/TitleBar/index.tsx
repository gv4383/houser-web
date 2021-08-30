import React from 'react';

import Button from '../Input/Button';
import { TEXT_SIZE } from '../../constants';

import './styles.scss';

interface Props {
  buttonBold?: boolean;
  buttonColor: string;
  buttonOnClick: () => void;
  buttonText: string;
  buttonTextSize: string;
  hasDivider?: boolean;
  title: string;
  titleBold?: boolean;
  titleSize: string;
}

const TitleBar = (props: Props) => {
  const {
    buttonBold,
    buttonColor,
    buttonOnClick,
    buttonText,
    buttonTextSize,
    hasDivider,
    title,
    titleBold,
    titleSize,
  } = props;

  const getContainerClassNames = () => {
    const classNamesArr = ['titlebar-container'];

    if (hasDivider) {
      classNamesArr.push('titlebar-container-divider');
    }

    return classNamesArr.join(' ');
  };

  const getTitleClassNames = () => {
    const classNamesArr = [];

    if (titleBold) {
      classNamesArr.push('title-text-bold');
    }

    switch (titleSize) {
      case TEXT_SIZE.SMALL:
        classNamesArr.push('title-text-sm');
        break;
      case TEXT_SIZE.MEDIUM:
        classNamesArr.push('title-text-md');
        break;
      case TEXT_SIZE.LARGE:
        classNamesArr.push('title-text-lg');
        break;
    }

    return classNamesArr.join(' ');
  };

  return (
    <div className={getContainerClassNames()}>
      <div className={getTitleClassNames()}>{title}</div>
      <Button
        bold={buttonBold}
        color={buttonColor}
        onClick={buttonOnClick}
        textSize={buttonTextSize}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default TitleBar;
