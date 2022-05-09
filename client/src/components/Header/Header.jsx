import React from 'react';
import './Header.scss';
import {motion} from "framer-motion";
import {images} from "../../images/";

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
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Artem</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">Full stack</p>
                        <p className="p-text">web developer</p>
                    </div>

                </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1, delayChildren: 1, ease: "easeInOut"}}
                className="app__header-img">
                <img src={images.profile_first} alt="profile_bg"/>
                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    src={images.circle} alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>
            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.react, images.redux, images.graphql, images.node].map((item, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={item} alt="circle"/>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Header;
