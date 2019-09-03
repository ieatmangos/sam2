import React, { useState } from 'react'
import Banner from '../banner/Banner'
import { animated, useSpring } from 'react-spring'
import Fade from 'react-reveal'
// import './Recent.css'
import image1 from '../../../images/Office_Leasing.jpg'
import image2 from '../../../images/Plae_Shoes.jpg'
import image3 from '../../../images/Luxury_Accomodation.jpg'
import image4 from '../../../images/Luna&Rose_Jewelery.jpg'
import image5 from '../../../images/LL_Wedding_Hire.jpg'
import image6 from '../../../images/Jeffery_Construction.jpg'
import image7 from '../../../images/Grounded_Packaging.jpg'
import image8 from '../../../images/Fenton_Building.jpg'
import image9 from '../../../images/Bird_&_Kite.jpg'
import image10 from '../../../images/Medical_on_Miami_Medical_Centre.jpg'




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
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '50px 30vw 50px',
        textAlign: 'left',
        gridColumnGap: '50px',
        gridRowGap: '0px'

    }
    const leftStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        gridRowStart: 1,
        gridRowEnd: 3,
        gridColumnStart: 1,
        position: 'relative'

    }

    const rightStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        gridRowStart: 2,
        gridRowEnd: 4,
        gridColumnStart: 2

    }
    const allText = {
        position: 'absolute',
        // paddingTop: window.innerWidth > 800 ? '30%' : '0%',
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        bottom: window.innerWidth > 800 ? '10%' : '0%',
        fontSize: window.innerWidth > 800 ? '1.5em' : '.5em',
        lineHeight: window.innerWidth > 800 ? '1.2em' : '.9em'
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
            <Fade up cascade>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image1})` }} onMouseOver={() => setFirst(true)} onMouseLeave={() => setFirst(false)} onClick={() => setFirst(!first)}>
                        <animated.div style={{ ...firstFade, background: '#fba47e', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Office Leasing</h1>
                                {/* <h3 style={{h3Style}}>Digital Marketing</h3> */}
                                <p style={{ pStyle }}>Paid Search & Social Campaigns. Driving new customer acquisition and increasing online conversions.</p>
                            </div>
                        </animated.div>
                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image2})` }} onMouseOver={() => setSecond(true)} onMouseLeave={() => setSecond(false)} onClick={() => setSecond(!second)}>
                        <animated.div style={{ ...secondFade, background: '#986287', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Plae Shows</h1>
                                <h3 style={{ h3Style }}>Digital Marketing</h3>
                                <p style={{ pStyle }}>We did some stuff</p>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image3})` }} onMouseOver={() => setThird(true)} onMouseLeave={() => setThird(false)} onClick={() => setThird(!third)}>
                        <animated.div style={{ ...thirdFade, background: '#93babc', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Luxury Accomodation</h1>
                                {/* <h3 style={{h3Style}}>Digital Marketing</h3> */}
                                <p style={{ pStyle }}>Paid Social Campaigns. Driving new customer acquisition and increasing online conversions.
</p>
                            </div>
                        </animated.div>


                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image4})` }} onMouseOver={() => setFourth(true)} onMouseLeave={() => setFourth(false)} onClick={() => setFourth(!fourth)}>
                        <animated.div style={{ ...fourthFade, background: '#e95c5a', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Luna & Rose Jewelery</h1>
                                {/* <h3 style={{h3Style}}>Digital Marketing</h3> */}
                                <p style={{ pStyle }}>Paid Search & Social Campaigns
Email Marketing
Branding & Design
Search Engine Optimisation
</p>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image5})` }} onMouseOver={() => setFifth(true)} onMouseLeave={() => setFifth(false)} onClick={() => setFifth(!fifth)}>
                        <animated.div style={{ ...fifthFade, background: '#f2e055', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>LL Wedding Hire</h1>
                                {/* <h3 style={{h3Style}}>Search Engine Optimisation</h3> */}
                                <p style={{ pStyle }}>Paid Search & Social Campaigns. Driving new customer acquisition and increasing online conversions. Search Engine Optimisation</p>
                            </div>
                        </animated.div>
                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image6})` }} onMouseOver={() => setSixth(true)} onMouseLeave={() => setSixth(false)} onClick={() => setSixth(!sixth)}>
                        <animated.div style={{ ...sixthFade, background: '#fba47e', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Jeffery Construction</h1>
                                {/* <h3 style={{h3Style}}>Digital Marketing</h3> */}
                                <p style={{ pStyle }}>Paid Search & Social Campaigns. Generating customer leads and increasing website traffic and enquiry. </p>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image7})` }} onMouseOver={() => setSeventh(true)} onMouseLeave={() => setSeventh(false)} onClick={() => setSeventh(!seventh)}>
                        <animated.div style={{ ...seventhFade, background: '#986287', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Grounded Packaging</h1>
                                <h3 style={{ h3Style }}>Search Engine Optimisation
</h3>
                                <p style={{ pStyle }}>Paid Search & Social Campaigns. Driving new customer acquisition and increasing online conversions.</p>
                            </div>
                        </animated.div>
                    </div>

                    <div style={{ ...rightStyle, backgroundImage: `url(${image8})` }} onMouseOver={() => setEighth(true)} onMouseLeave={() => setEighth(false)} onClick={() => setEighth(!eighth)}>
                        <animated.div style={{ ...eighthFade, background: '#93babc', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Fenton Building</h1>
                                <h3 style={{ h3Style }}>Search Engine Optimisation</h3>
                                <p style={{ pStyle }}>Paid Search & Social Campaigns. Generating customer leads and increasing website traffic and enquiry. </p>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div style={gridStyle}>
                    <div style={{ ...leftStyle, backgroundImage: `url(${image9})` }} onMouseOver={() => setNinth(true)} onMouseLeave={() => setNinth(false)} onClick={() => setNinth(!ninth)}>
                        <animated.div style={{ ...ninthFade, background: '#e95c5a', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Bird & Kite</h1>
                                {/* <h3 style={{h3Style}}>Digital Marketing</h3> */}
                                <p style={{ pStyle }}>Paid Search & Social Campaigns. Email Marketing</p>
                            </div>
                        </animated.div>
                    </div>
                    <div style={{ ...rightStyle, backgroundImage: `url(${image10})` }} onMouseOver={() => setTenth(true)} onMouseLeave={() => setTenth(false)} onClick={() => setTenth(!tenth)}>
                        <animated.div style={{ ...tenthFade, background: '#f2e055', }}>
                            <div style={{ ...allText }}>
                                <h1 style={{ h1Style }}>Medical on Miami Medical Centre.</h1>
                                {/* <h3 style={{h3Style}}>Digital Marketing</h3> */}
                                <p style={{ pStyle, h1Style }}>Paid Search & Social Campaigns. Raising brand awareness in the local community, Driving new customer acquisition and increasing online conversions.</p>
                            </div>
                        </animated.div>
                    </div>
                </div>

            </Fade>

        </div>
    )
}
export default Recent

