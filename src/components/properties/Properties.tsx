import styles from'./Properties.module.scss';
import data from '../../data/data.json'
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import { useState } from 'react';

const Properties = () => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(6);

    const updateOffset = (value) => {
        setStart((value - 1) * 6)
        setEnd(value*6)
    }

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.title}>Список предложений</div>
                </div>
                <div className={styles.main_block}>
                    <Card start={start} end={end} />
                    <Pagination pages={Math.max(Math.ceil(data.length/6), 1)} updateOffset={updateOffset}/>
                </div>
            </div>
        </div>
        
      )
}

export default Properties