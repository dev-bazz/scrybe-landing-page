import React from 'react'
import styles from './landingpage.module.scss'
import heroImage from './assets/Group 1000000899.webp'
import OurClient from '../../components/our-client'
import aboutUsimage from './assets/Group 1000000931.webp'

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
                                                <div className={styles.CTAs}>
                                                        <a href="#" className={styles.ctaDemo}>Request a Demo</a>
                                                        <a href='#' className={styles.ctaStarter}>Get Started</a>
                                                </div>
                                        </div>
                                        <div className={styles.heroImage}>
                                                <img src={heroImage} alt="" srcset="" />
                                        </div>
                                </div>
                        </section>
                        <section aria-label='Our Clients' >
                                <OurClient />
                        </section>

                        <section aria-label='About Us' >
                                <div className={`container ${styles.aboutUs}`}>
                                        <div className={styles.aboutUs__img}>
                                                <img src={aboutUsimage} alt="" srcset="" />
                                        </div>
                                        <div className={styles.aboutUs__content}>
                                                <h2 className={styles.aboutUs__title}>About Us</h2>
                                                <p className={styles.aboutUs__details}>Scrybe is a conversation intelligence tool that automatically transcribes and analyzes recorded customer support conversations to extract
                                                        sentimental analysis data. We help you determinethe efficiency of your customer support agents with the aim of improving overall customer satisfaction</p>
                                                <a href="#" className={styles.aboutUs__cta}>Read more</a>

                                        </div>
                                </div>
                        </section>
                        <section className={styles.gettingStarted}>
                                <div className={`container`}>
                                        <h2 className={styles.gettingStarted__title}>Getting Started</h2>
                                        <div className={styles.gettingStarted__cards}>
                                                <div className={styles.gettingStarted__card}>
                                                        <div className={styles.gettingStarted__card_image}>
                                                                img
                                                        </div>
                                                        <h3 className={styles.gettingStarted__card_title}>Upload Audio</h3>
                                                        <p className={styles.gettingStarted__card_detail}>Upload Audio between customers
                                                                and staff on our database</p>
                                                        <a href="#" className={styles.gettingStarted__card_cta}>Get Started</a>
                                                </div>

                                                <div className={styles.gettingStarted__card}>
                                                        <div className={styles.gettingStarted__card_image}>
                                                                img
                                                        </div>
                                                        <h3 className={styles.gettingStarted__card_title}>Transcribe Text</h3>
                                                        <p className={styles.gettingStarted__card_detail}>Our system transcribes these audio
                                                                into readable texts</p>

                                                </div>

                                                <div className={styles.gettingStarted__card}>
                                                        <div className={styles.gettingStarted__card_image}>
                                                                img
                                                        </div>
                                                        <h3 className={styles.gettingStarted__card_title}>Sentimental Analysis</h3>
                                                        <p className={styles.gettingStarted__card_detail}>The text is analyzed  using open Ai for
                                                                for sentiments</p>
                                                        <a href="#" className={styles.gettingStarted__card_cta}>Get Started</a>
                                                </div>
                                        </div>


                                </div>

                        </section>


                </div>
        )
}

export default LandingPage