
import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useTrail, animated, useSpring } from 'react-spring'
import './Header.css'
import Fade from 'react-reveal'
import hamburgermneu from '../../images/hamburgermneu.svg'


export default function Header() {
    const [Ypos, setYpos] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    function handleScroll() {
        const currentScrollPos = window.pageYOffset
        setYpos(currentScrollPos);
    }

    const menuList = [<a href='#work'><h3>Work</h3></a>,
    <a href='#team'><h3>Team</h3></a>,
    <a href='#blog'><h3>Blog</h3></a>,
    <a href='#contact'> <h3>Contact</h3></a>]

    const [toggle, set] = useState(false)
    const config = { mass: 5, tension: 2000, friction: 200 }

    const trail = useTrail(menuList.length, {
        config,
        opacity: toggle && Ypos < 5 ? 1 : 0,
        x: toggle && Ypos < 5 ? 0 : 40,
        background: 'white',
        border: '1px solid black',

        textAlign: 'center',

        position: 'relative',

        margin: '15px 5px 0px 0px',

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
            width: '60px',
            height: '60px',
            margin: '15px 5px 5px 0px',
            borderRadius: '50%',


            transform: 'rotate(0deg)',
            textAlign: 'center'
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

    return (

        <div className='header'>
            <div className='head-left'> <h1>BOUTIQUE DIGITAL</h1>
                <Fade right><div className='headercircle'></div></Fade>
            </div>

            <div className='head-right'>


                {window.innerWidth > 1000 ?
                    <Fragment>
                        <a href='#work'><h3>Work</h3></a>
                        <a href='#team'><h3>Team</h3></a>
                        <a href='#blog'><h3>Blog</h3></a>
                        <a href='#contact'> <h3>Contact</h3></a>
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


    )
}

