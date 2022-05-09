import React from 'react';
import './Header.scss';
import {motion} from "framer-motion";
import {images} from "../../images";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        }
    }
}

const Header = () => {
    return (
        <div id="home" className="app__header app__flex">
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 1, ease: "easeInOut"}}
                className="app__header-info"
            >

                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>✌🏻</span>
                        <div style={{marginLeft: 20}}>
                            <p className="p-text">Hello, we are GoMove</p>
                            <h1 className="head-text">lets do that</h1>
                        </div>
                    </div>

                </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1, delayChildren: 1, ease: "easeInOut"}}
                className="app__header-img">
                <img src={images.logocircle} alt="logo"/>
                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    src={images.circle} alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>
        </div>
    );
};

export default Header;
