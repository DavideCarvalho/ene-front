import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

const Input: React.FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
  const currentClassName = props.className || '';
  const classes = `${currentClassName} ene-input`;
  const {
    className,
    ...propsWithoutClassName
  } = props;
  return (
    <input {...propsWithoutClassName} className={classes}/>
  )
};

export default React.memo(Input);
