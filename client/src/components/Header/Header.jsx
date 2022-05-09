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
        <div id="home" className="app__header" >
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
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 1, ease: "easeInOut"}}
                className="app__header-info"
            >

                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">                     
                        <div>
                            <p className="p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <h1 className="head-text">lets do that</h1>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default Header;
