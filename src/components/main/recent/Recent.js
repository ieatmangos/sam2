import React, { useState } from 'react'
import Banner from '../banner/Banner'
import { animated, useSpring } from 'react-spring'
import Fade from 'react-reveal'
// import './Recent.css'
import image1 from '../../../images/new images/Office_Leasing.JPG'
import image2 from '../../../images/new images/Curry_Traders.JPG'
import image3 from '../../../images/new images/Luxury_Accomodation.JPG'
import image4 from '../../../images/new images/Luna&Rose.JPG'
import image5 from '../../../images/new images/LL_Wedding_Hire.JPG'
import image6 from '../../../images/new images/Jeffery_Construction.jpg'
import image7 from '../../../images/new images/Grounded_Packaging.JPG'
import image8 from '../../../images/new images/Harcourts.jpeg'
import image9 from '../../../images/new images/Bird&Kite.JPG'
import image10 from '../../../images/new images/Original_Foods.JPG'




const Recent = () => {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [fifth, setFifth] = useState(false)
    const [sixth, setSixth] = useState(false)
    const [seventh, setSeventh] = useState(false)
    const [eighth, setEighth] = useState(false)
    const [ninth, setNinth] = useState(false)
    const [tenth, setTenth] = useState(false)



    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 800 ? '1fr 1fr' : "1fr",
        // gridTemplateRows: '30vw 30vw',
        // gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: window.innerWidth > 800 ? '50px 30vw 50px' : "60vh 60vh",
        textAlign: 'left',
        gridColumnGap: '50px',
        gridRowGap: '0px'

    }
    const leftStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "50% 50%",
        height: '100%',
        width: '100%',
        // gridRowStart: 1,
        // gridRowEnd: 3,
        // gridColumnStart: 1,
        gridRowStart: 1,
        gridRowEnd: window.innerWidth > 800 ? 3 : 2,
        gridColumnStart: 1,
        position: 'relative'

    }

    const rightStyle = {
        backgroundSize: 'cover',
        backgroundPosition: "50% 50%",
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        gridRowStart: 2,
        gridRowEnd: window.innerWidth > 800 ? 4 : 3,
        gridColumnStart: window.innerWidth > 800 ? 2 : 1
        // gridRowStart: 2,
        // gridRowEnd: 3,
        // gridColumnStart: 2

    }
    const allText = {
        position: 'absolute',
        // paddingTop: window.innerWidth > 800 ? '30%' : '0%',
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        bottom: '0%',
        fontSize: window.innerWidth > 800 ? '1em' : '.9em',
        // lineHeight: window.innerWidth > 800 ? '1.2em' : '.9em'
    }
    const firstFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative', width: '100%', height: '100%',
        },
        to: {
            opacity: first ? 1 : 0
        }
    })
    const secondFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: second ? 1 : 0
        }
    })
    const thirdFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: third ? 1 : 0
        }
    })
    const fourthFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: fourth ? 1 : 0
        }
    })
    const fifthFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: fifth ? 1 : 0
        }
    })
    const sixthFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: sixth ? 1 : 0
        }
    })
    const seventhFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: seventh ? 1 : 0
        }
    })
    const eighthFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: eighth ? 1 : 0
        }
    })
    const ninthFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: ninth ? 1 : 0
        }
    })
    const tenthFade = useSpring({
        from: {
            opacity: 0,
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        to: {
            opacity: tenth ? 1 : 0
        }
    })
    const h1Style = {
        fontWeight: '700'
    }
    const pStyle = {
        fontWeight: '100'
    }
    const h3Style = {
        fontWeight: '500'
    }


    return (
        <div className='recent' id='work'>
            <Banner message={'Our Recent Work'} />
            {window.innerWidth < 800 ? <div style={{ marginBottom: "15px", fontStyle: "italic" }}>Double tap on an image below to learn more.</div> : null}
            <Fade up cascade>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image7})` }} onMouseOver={() => setSeventh(true)} onMouseLeave={() => setSeventh(false)} onClick={() => setSeventh(!seventh)}>
                        <animated.div style={{ ...seventhFade, background: '#986287', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Grounded Packaging</h1>
                                <p style={{ pStyle }}>Raising awareness of a new brand in a competitive market, driving new customer acquisition and increasing online conversions.</p>
                                <h3 style={{ h3Style }}>Paid Search & Social Campaigns, Search Engine Optimisation</h3>
                            </div>
                        </animated.div>
                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image5})` }} onMouseOver={() => setFifth(true)} onMouseLeave={() => setFifth(false)} onClick={() => setFifth(!fifth)}>
                        <animated.div style={{ ...fifthFade, background: '#f2e055', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>LL Wedding Hire</h1>
                                <p style={{ pStyle }}>Driving new customer acquisition for wedding & event hire with a high ROI on marketing spend, increasing online conversion rate of website visitors to enquiries.</p>
                                <h3 style={{ h3Style }}>Paid Search & Social Campaigns, Search Engine Optimisation</h3>
                            </div>
                        </animated.div>
                    </div>
                </div >
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image8})`, backgroundPosition: "100% 50%" }} onMouseOver={() => setEighth(true)} onMouseLeave={() => setEighth(false)} onClick={() => setEighth(!eighth)}>
                        <animated.div style={{ ...eighthFade, background: '#93babc', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Harcourts</h1>
                                <p style={{ pStyle }}>Helping Harcourts present a consistent brand message via their email communication, company brochures and promotional material, social media, branding and design. </p>
                                <h3 style={{ h3Style }}>Design & Branding, Email Marketing</h3>
                            </div>
                        </animated.div>
                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image4})` }} onMouseOver={() => setFourth(true)} onMouseLeave={() => setFourth(false)} onClick={() => setFourth(!fourth)}>
                        <animated.div style={{ ...fourthFade, background: '#e95c5a', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Luna & Rose Jewelery</h1>
                                <p style={{ pStyle }}>Driving brand awareness, increasing online conversions and e-commerce efficiency as well as creating an authentic and visually appealing brand in a competitive market.
                                </p>
                                <h3 style={{ h3Style }}>Paid Search & Social Campaigns, Email Marketing, Branding & Design</h3>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image6})` }} onMouseOver={() => setSixth(true)} onMouseLeave={() => setSixth(false)} onClick={() => setSixth(!sixth)}>
                        <animated.div style={{ ...sixthFade, background: '#fba47e', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Jeffery Construction</h1>
                                <p style={{ pStyle }}>Generating customer leads and enquiry from an audience specifically looking for high end building and renovations in Auckland.  </p>
                                <h3 style={{ h3Style }}>Paid Search & Social Campaigns</h3>
                            </div>
                        </animated.div>
                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image9})` }} onMouseOver={() => setNinth(true)} onMouseLeave={() => setNinth(false)} onClick={() => setNinth(!ninth)}>
                        <animated.div style={{ ...ninthFade, background: '#e95c5a', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Bird & Kite</h1>
                                <p style={{ pStyle }}>Driving brand awareness, increasing online conversions and e-commerce efficiency.</p>
                                <h3 style={{ h3Style }}>Paid Search & Social Campaigns, Email Marketing</h3>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image3})` }} onMouseOver={() => setThird(true)} onMouseLeave={() => setThird(false)} onClick={() => setThird(!third)}>
                        <animated.div style={{ ...thirdFade, background: '#93babc', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Luxury Accomodation</h1>
                                <p style={{ pStyle }}>Driving new customer acquisition and increasing online conversions.</p>
                                <h3 style={{ h3Style }}>Paid Social Campaigns</h3>
                            </div>
                        </animated.div>
                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image10})` }} onMouseOver={() => setTenth(true)} onMouseLeave={() => setTenth(false)} onClick={() => setTenth(!tenth)}>
                        <animated.div style={{ ...tenthFade, background: '#f2e055', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Original Foods</h1>
                                <p style={{ pStyle, h1Style }}>Working with Original Foods on their digital marketing strategy to launch their brand.</p>
                                <h3 style={{ h3Style }}> Designing & creating email templates, email marketing & social media.</h3>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image2})` }} onMouseOver={() => setSecond(true)} onMouseLeave={() => setSecond(false)} onClick={() => setSecond(!second)}>
                        <animated.div style={{ ...secondFade, background: '#986287', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Curry Traders</h1>
                                <p style={{ pStyle }}>Driving new customer acquisition and online conversions with a high ROI on marketing spend.</p>
                                <h3 style={{ h3Style }}>Paid Social Campaigns, E-Commerce</h3>
                            </div>
                        </animated.div>
                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image1})` }} onMouseOver={() => setFirst(true)} onMouseLeave={() => setFirst(false)} onClick={() => setFirst(!first)}>
                        <animated.div style={{ ...firstFade, background: '#fba47e', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Office Leasing</h1>
                                <p style={{ pStyle }}>Driving new customer acquisition and increasing online conversions.</p>
                                <h3 style={{ h3Style }}>Paid Search & Social Campaigns</h3>
                            </div>
                        </animated.div>
                    </div>
                </div>
            </Fade>

        </div>
    )
}
export default Recent
