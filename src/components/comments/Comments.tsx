import styles from'./Comments.module.scss';
import { Player } from 'video-react';

export const Comments = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.review}>
            <div className={styles.description}>
              <div className={styles.quote}>“</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
              </div>
            </div>
            
            <div className={styles.author}>
              <img src='/icons/Ivan.svg' className={styles.avatar} alt='avatar'></img>
              <div className={styles.text_place}>
                <div className={styles.name}>Иван Вилсон</div>
                <div className={styles.tag}>Путешественник</div>
              </div>
            </div>
        </div>
        <div className={styles.video}>
            <Player
                playsInline
                poster="/images/preview_winter.jpg"
                src="/video/video_1.mp4"
            />
        </div>
    </div>
  )
}
