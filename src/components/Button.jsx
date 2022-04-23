import React from 'react';
import { motion } from "framer-motion"
import styles from '../styles/Global'
import expo from '../assets/google.png'

const Button = ({assetsUrl, link}) => {
    return (
        <div className={styles.btnBlack}>
            <img src={expo} alt="Expo_Icon" className={styles.btnIcon }/>
            <div
                className="flex flex-col justify-start ml-4"
            >
                <p className={`${styles.btnText} font-normal text-xs`}>GET IT ON</p>
                <p className={`${styles.btnText} font-bold text-sm`}>Google Play</p>
            </div>
        </div>
    )
}

export default Button
