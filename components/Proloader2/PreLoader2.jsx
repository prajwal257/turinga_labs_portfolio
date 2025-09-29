import React from 'react';
import styles from './PreLoader2.module.scss';

function PreLoader2() {
  return (
    <div className={styles.PreLoader2}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // fill="#000000"
          d="M0,0 v25 a25,25 0 0 0 25,-25 Z 
             M25,0 a25,25 0 0 0 25,25 V0 Z 
             M0,25 v25 h25 a25,25 0 0 0 -25,-25 Z 
             M50,25 a25,25 0 0 0 -25,25 h25 Z"
        />
      </svg>
    </div>
  );
}

export default PreLoader2;
