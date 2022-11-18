import styles from './client.module.scss';
import hng from './assets/hng.webp'
import hotelng from './assets/hotelsng.webp';
import payoneer from './assets/payoneer.webp';
import zuri from './assets/zuri.webp';

function OurClient() {
        return (
                <div className={`container ${styles.container}`}>
                        <h2 className={styles.title}>Our Clients</h2>
                        <div className={styles.logos}>
                                <div className="display">
                                        <img src={hng} alt="HNG" srcset="" />
                                </div>
                                <div className="display">
                                        <img src={zuri} alt="Zuri" srcset="" />
                                </div>
                                <div className="display">
                                        <img src={payoneer} alt="" srcset="" />
                                </div>
                                <div className="display">
                                        <img src={hotelng} alt="" srcset="" />
                                </div>
                        </div>
                </div>
        )
}

export default OurClient
