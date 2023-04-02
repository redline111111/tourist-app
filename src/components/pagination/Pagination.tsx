import styles from './Pagination.module.scss'
import { useState, useEffect } from 'react';
import cn from 'clsx'

const Pagination = ({pages, updateOffset}) => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Array.from({length: pages}, (_, index) => index+1))
  }, [pages])

  const changePage = (num) => {
    setPage(num)
    updateOffset(num)
  }

  return (
    <div className={styles.wrapper}>
      
      {list.length && list.map(num => 
        <button className={cn(styles.btn,{
          [styles.picked]: page === num})} 
        key={page + 1 + 'h' +num} onClick={() => changePage(num)}>{num}</button>
    )}
    </div>
  )
}

export default Pagination