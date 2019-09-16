
import React, { useState, useEffect, Fragment, createRef } from 'react'
import { Link } from 'react-router-dom'
import { useTrail, animated, useSpring } from 'react-spring'
import './Header.css'
import Fade from 'react-reveal'
import hamburgermneu from '../../images/hamburgermneu.svg'


export default function Header() {
    const [Ypos, setYpos] = useState(0)
    const blogREF = createRef();
    useEffect(() => {
        const blog = document.getElementById("blog");
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    function handleScroll() {
        const currentScrollPos = window.pageYOffset
        setYpos(currentScrollPos);
    }

    const handleRef = (data) => {
        var elmnt = document.getElementById(`${data}`);
        elmnt.scrollIntoView(
            { behavior: 'smooth', }
        );
    }


    const menuList = [<h3 onClick={() => handleRef('work')}>Work</h3>,
    <h3 onClick={() => handleRef('team')}>Team</h3>,
    // <h3 onClick={() => handleRef('blog')}>Blog</h3>,
    <h3 onClick={() => handleRef('services')}>Services</h3>,
    <h3 onClick={() => handleRef('contact')}>Contact</h3>]

    const [toggle, set] = useState(false)
    const config = { mass: 5, tension: 2000, friction: 200 }

    const trail = useTrail(menuList.length, {
        config,
        opacity: toggle && Ypos < 5 ? 1 : 0,
        x: toggle && Ypos < 5 ? -50 : 40,
        textAlign: "right",
        color: "black",
        from: { opacity: 0, x: 20 },
    })
    const hidemenuonscroll = () => {
        if (Ypos > 5 && toggle === true)
            set(false)
        else return null
    }

    const hamburgerStyle = useSpring({
        from: {
            zIndex: 100,
            opacity: 0,
            width: window.innerWidth > 800 ? '60px' : '40px',
            // height: window.innerWidth > 800 ? '60px' : '40px',

            // margin: '15px 5px 5px 0px',
            borderRadius: '50%',
            transform: 'rotate(0deg)',

        },
        to: {
            opacity: Ypos > 7 ? 0 : 1,
            transform: toggle ? 'rotate(90deg)' : 'rotate(0deg)',
        }
    })
    const hamburgerDivStyle = useSpring({
        to: {
            opacity: Ypos > 7 ? 0 : 1,
            transform: Ypos > 7 ? 'translateX(100px)' : 'translateX(0px)'
        },
        from: { opacity: 1, position: 'fixed', right: '0px', top: '80px', zIndex: 100, },
        config: { friction: 80 }
    })


    const menuStyle = useSpring({
        opacity: toggle && Ypos < 5 ? 1 : 0,
        transform: toggle && Ypos < 5 ? "translateX(0%)" : "translateX(100%"
    })


    return (
        <Fragment>
            <div className='header'>
                <div className='head-left'> <h1>BUTIQ DIGITAL</h1>
                    <Fade right><div className='headercircle'></div></Fade>
                </div>
                <div className='head-right'>
                    {window.innerWidth > 1000 ?
                        <Fragment>
                            <h3 onClick={() => handleRef('work')}>Work</h3>
                            <h3 onClick={() => handleRef('team')}>Team</h3>
                            <h3 onClick={() => handleRef('services')}>Services</h3>
                            {/* <h3 onClick={() => handleRef('blog')}>Blog</h3> */}
                            <h3 onClick={() => handleRef('contact')}>Contact</h3>
                        </Fragment>
                        :
                        <animated.div onClick={() => set(state => !state)} style={hamburgerStyle}>
                            <img style={{
                                // display: 'absolute',
                                width: '60%',

                            }} src={hamburgermneu}>
                            </img>
                        </animated.div>
                    }
                    <Fragment>
                        <animated.div style={hamburgerDivStyle} >
                            {hidemenuonscroll()}
                            {
                                trail.map(({ x, ...rest }, index) => (
                                    <animated.div
                                        key={menuList[index].key}
                                        className="trails-text"
                                        style={{ ...rest, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
                                        {menuList[index]}
                                    </animated.div>
                                ))
                            }
                        </animated.div>
                    </Fragment>
                </div>




            </div>

            <animated.div style={menuStyle} className='menu-bg'></animated.div>
        </Fragment>
    )
}

