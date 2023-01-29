import React from 'react'
import css from './Headline.module.css';

type Props = {
    subject:string;
}

const Headline = ({subject}:Props) => {
  return (
    <h1 className={css.title}>{subject}</h1>
  )
}

export default Headline