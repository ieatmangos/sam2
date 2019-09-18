import React, { useState } from 'react'
import { useSpring, animated } from "react-spring"
import GetInTouch from '../GetItTouch'
import Banner from '../main/banner/Banner'
import Fade from 'react-reveal'
import './Footer.css'
export default function Footer() {
    const [hovered, setHovered] = useState(false)
    const footerStyle = useSpring({
        from: { background: "white" },
        to: { background: hovered ? "#49c5b6" : "white" },
        config: { friction: 50 }
    })
    const leftStyle = useSpring({
        to: {
            color: hovered ? "white" : 'black'
        }, config: { friction: 50 }
    })

    const fillColor = hovered ? "white" : "black"

    const handleRef = (data) => {
        var elmnt = document.getElementById(`${data}`);
        elmnt.scrollIntoView(
            { behavior: 'smooth', }
        );
    }

    const bannerStyleFooter = useSpring({
        color: hovered ? "white" : 'black',
        config: { friction: 30 }
    })
    return (
        <animated.div
            className='footer'
            style={{ ...footerStyle }}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={{ width: "50%", margin: 'auto', marginTop: '0px', textAlign: 'center', }}>
                <div className='footer-banner'>
                    <animated.div style={{ ...bannerStyleFooter, paddingTop: "50px" }} className='footer-banner-h1'>Say Hello
                        <Fade right><div className='footer-circle' style={{ bottom: '-10px', }}></div></Fade></animated.div>
                </div>

            </div>
            <div className='footer-button'> <GetInTouch props={hovered} /></div>
            <animated.div
                className='footer-left'
                style={{ ...leftStyle }}
            >
                <p className='footer-left-p'>Butiq Digital</p>
                <p className='footer-left-p'>+64 98890802</p>
                <p className='footer-left-p'>hello@boutiqdigital.com</p>
            </animated.div>

            <animated.div
                className='footer-middle'
            >
                <svg width="183" height="46" viewBox="0 0 183 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <a href='https://www.facebook.com/Butiq-Digital-102585577806314/'><path d="M45 7.5005C45 3.5595 41.442 0 37.5 0H7.5C3.558 0 0 3.5595 0 7.5005V37.4995C0 41.4405 3.558 45 7.5005 45H22.5V28H17V20.5H22.5V17.578C22.5 12.5385 26.284 8 30.9375 8H37V15.5H30.9375C30.274 15.5 29.5 16.3055 29.5 17.512V20.5H37V28H29.5V45H37.5C41.442 45 45 41.4405 45 37.4995V7.5005Z" fill={fillColor} />
                    </a>
                    <g clip-path="url(#clip0)">
                        <a href="http://linkedin.com/company/butiq-digital"> <path d="M115.421 27.3634V44.0001H105.776V28.4776C105.776 24.5782 104.381 21.917 100.89 21.917C98.225 21.917 96.639 23.7105 95.9413 25.4453C95.6869 26.0655 95.6214 26.9287 95.6214 27.7969V44.0001H85.9732C85.9732 44.0001 86.1031 17.71 85.9732 14.9862H95.6204V19.0988C95.6009 19.1295 95.5754 19.1627 95.557 19.1925H95.6204V19.0988C96.9021 17.1247 99.1912 14.3046 104.315 14.3046C110.663 14.3045 115.421 18.4514 115.421 27.3634ZM75.8807 1C72.5801 1 70.4212 3.16496 70.4212 6.01195C70.4212 8.7969 72.5176 11.0276 75.7527 11.0276H75.8171C79.1817 11.0276 81.2741 8.79732 81.2741 6.01195C81.2107 3.16496 79.1817 1 75.8807 1ZM70.9942 44.0001H80.6388V14.9862H70.9942V44.0001Z" fill={fillColor} />
                        </a>
                    </g>
                    <a href="https://www.instagram.com/butiqdigital/?hl=en"> <g  >
                        <path d="M161.312 4C141 4 141 4 141 24.0612C141 44.1223 141 44 161.312 44C181 44 181 44 181 24.0612C181 4.00001 181 4 161.312 4Z" stroke={fillColor} stroke-width="4" />
                        <path d="M170.277 23.8166C170.277 28.825 166.131 32.9481 160.938 32.9481C155.744 32.9481 151.598 28.825 151.598 23.8166C151.598 18.8081 155.744 14.6851 160.938 14.6851C166.131 14.6851 170.277 18.8081 170.277 23.8166Z" stroke={fillColor} stroke-width="4" />
                        <ellipse cx="172.776" cy="12.1958" rx="2.49221" ry="2.44648" fill={fillColor} />
                    </g>
                    </a>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="45" height="45" fill="white" transform="translate(70.4212)" />
                        </clipPath>
                    </defs>
                </svg>

            </animated.div>
            <animated.div
                className='footer-right'
                style={{ ...leftStyle }}
            >
                <p onClick={() => handleRef("work")} className='footer-right-p'>Work</p>
                <p onClick={() => handleRef("team")} className='footer-right-p'>Team</p>
                <p onClick={() => handleRef("services")} className='footer-right-p'>Services</p>
            </animated.div>

        </animated.div>
    )
}
