import styles from'./Card.module.scss';
import data from '../../data/data.json'


const Card = ({start, end}) => {

    return (
        <div className={styles.card_block}>
            {data.slice(start, end).map((data, index) => (
                <div className={styles.card} key={index}>
                    <img className={styles.img} src={data.image} alt=""/>
                    <div className={styles.text}>{data.name}</div>
                        <div className={styles.wrapper}>
                            <div className={styles.container}>
                                <div className={styles.description}>{data.description}</div>
                            </div>
                            <div className={styles.type}>{data.type}</div>
                            <div className={styles.cost}>₽{data.cost}/день</div>
                            <div className={styles.stats}>
                                <div className={styles.icon}>
                                    <img src="/icons/Bed.svg" alt="" />
                                    <div className={styles.number}>{data.bed}</div>
                                </div>
                                <div className={styles.icon}>
                                    <img src="/icons/Shower.svg" alt="" />
                                    <div className={styles.number}>{data.showers}</div>
                                </div>
                                <div className={styles.icon}>
                                    <img src="/icons/Size.svg" alt="" />
                                    <div className={styles.number}>{data.places}</div>
                                </div>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default Card