import React from 'react'

export default function Melete() {
    return (
        <Fragment>
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
                <div style={{ ...leftStyle, backgroundImage: `url(${image8})` }} onMouseOver={() => setEighth(true)} onMouseLeave={() => setEighth(false)} onClick={() => setEighth(!eighth)}>
                    <animated.div style={{ ...eighthFade, background: '#93babc', }}>
                        <div style={{ ...allText }}>
                            <h1 style={{ h1Style }}>Fenton Building</h1>
                            <p style={{ pStyle }}>Generating customer leads and enquiry from an audience specifically looking for high end building and renovations in Tauranga. </p>
                            <h3 style={{ h3Style }}>Paid Search & Social Campaigns, Search Engine Optimisation</h3>
                        </div>
                    </animated.div>
                </div>
                <div style={{ ...rightStyle, backgroundImage: `url(${image4})` }} onMouseOver={() => setFourth(true)} onMouseLeave={() => setFourth(false)} onClick={() => setFourth(!fourth)}>
                    <animated.div style={{ ...fourthFade, background: '#e95c5a', }}>
                        <div style={{ ...allText }}>
                            <h1 style={{ h1Style }}>Luna & Rose Jewelery</h1>
                            <p style={{ pStyle }}>Driving brand awareness, increasing online conversions and e-commerce efficiency as well as creating an authentic and visually appealing brand in a competitive market.
                                </p>
                            <h3 style={{ h3Style }}>Paid Search & Social Campaigns, Email Marketing, Branding & Design, Search Engine Optimisation</h3>
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
                            <h1 style={{ h1Style }}>Medical on Miami Medical Centre.</h1>
                            <p style={{ pStyle, h1Style }}>Raising brand awareness in the local community, driving new customer acquisition and increasing online conversions.</p>
                            <h3 style={{ h3Style }}>Paid Search & Social Campaigns</h3>
                        </div>
                    </animated.div>
                </div>
            </div>
            <div style={gridStyle}>
                <div style={{ ...leftStyle, backgroundImage: `url(${image2})` }} onMouseOver={() => setSecond(true)} onMouseLeave={() => setSecond(false)} onClick={() => setSecond(!second)}>
                    <animated.div style={{ ...secondFade, background: '#986287', }}>
                        <div style={{ ...allText }}>
                            <h1 style={{ h1Style }}>Plae Shows</h1>
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

        </Fragment>)
}
