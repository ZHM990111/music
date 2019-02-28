
import React from 'react';
import styles from './SongList.scss';

const SongList = ({ songList, current }) => {
  return <div>{
    songList.map((item, index) => {
      let name = item.ar.map(item => item.name).join(' ');
      return <p key={index} className={current === index ? styles.active : ''}>
        <span>{index + 1}</span>
        <span>{item.name}</span>
        <span>{name}</span>
      </p>
    })
  }</div>
};

export default SongList;