import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
            <div className={styles.data}>
                <div className={styles.logo}>Logo</div>
                <div className={styles.links}>
                    <button className={styles.text}>О НАС</button>
                    <button className={styles.text}>КОНТАКТЫ</button>
                    <button className={styles.text}>ПОМОЩЬ</button>
                    <button className={styles.text}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</button>
                </div>
            </div>
    </div>
  )
}
