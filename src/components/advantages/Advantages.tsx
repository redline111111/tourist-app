import styles from'./Advantages.module.scss';
import data from './advantages.json';

const Advantages = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>Лучшие условия проживания, о которых мы позаботимся</div>
        <div className={styles.main_block}>
            <img className={styles.img} src='/advantages.svg' alt=''></img>
            <div className={styles.advantages}>
                {data.map((adv, index) => (
                    <div key={index}> 
                        <div className={styles.icon_block}>
                            <img className={styles.icon} src={adv.iconPath} alt={adv.alt} />
                        </div>
                        <div className={styles.text}>{adv.text}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Advantages