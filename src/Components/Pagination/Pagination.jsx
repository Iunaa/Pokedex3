import React from "react";
import styles from "../Pagination/pagination.module.scss";

import React from 'react'

export const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props

  return (
    <div className={styles.paginationContainer}>
        <button className={styles.paginationContainer__left}><div>⇦</div></button>
        <div>{page} de {totalPages}</div>
        <button className={styles.paginationContainer__right}><div>⇨</div></button>
    </div>
  )
}
