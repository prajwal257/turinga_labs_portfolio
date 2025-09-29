import React from 'react';
import styles from './PreLoader3.module.scss';

function PreLoader3() {
  return (
    <div className={styles.preloaderWrapper}>
      <svg
        className={styles.loaderIcon}
        width="100"
        height="100"
        viewBox="0 0 50 50"
        fill='#fff'
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-271.86793,-78.004835)">
          <path
            className={styles.loaderPath}
            // fill='#161616'
            d="
              M 296.86794,78.004829
              A 25,25 0 0 1 271.86792,103.00434
              A 25,25 0 0 1 296.86794,128.00437
              A 25,25 0 0 1 321.86797,103.00434
              A 25,25 0 0 1 296.86794,78.004829 
              Z
            "
          />
        </g>
      </svg>
      <h2>LOADING</h2>
    </div>
  );
}

export default PreLoader3;
