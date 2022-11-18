import React from 'react'
import styles from './landingpage.module.scss'
import heroImage from './assets/Group 1000000899.webp'


function LandingPage() {
        return (
                <div >
                        <section className={styles.hero} >
                                <div className={styles.container}>
                                        <div className={styles.content}>
                                                <h1 className={styles.heroH1}>World class Transcription
                                                        and <span className={styles.heroAccent}>
                                                                Sentiment Analysis <wbr />
                                                        </span>
                                                        for yor Business</h1>
                                                <p className={styles.heroText}>We help businesses unlock insights and extract meaningful
                                                        data from your customer support conversations </p>
                                                <div>
                                                        <a href="#">CTA</a>
                                                        <a href='#'> CTA</a>
                                                </div>

                                        </div>
                                        <div className={styles.heroImage}>
                                                <img src={heroImage} alt="" srcset="" />
                                        </div>
                                </div>
                        </section>
                        <section>
                                hello
                        </section>

                </div>
        )
}

export default LandingPage