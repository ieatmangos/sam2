import React, { useEffect } from 'react'
import './WhatWeDo.css'
import SplitText from '../../../gsap/SplitText'
import { TweenMax, TimelineMax } from 'gsap'


export default function WhatWeDo() {
    // const tl = new TimelineMax({ paused: false })

    // useEffect(() => {
    //     const myText = new SplitText("#services", { type: "chars" })
    //     tl
    //         .add(TweenMax.staggerFrom(myText.chars, 2, {
    //             x: 20,
    //             y: 10,
    //             stagger: { amount: 1 }
    //         }))
    //         .play()
    // })
    return (
        <div className='whatwedo'>
            {/* <h1>As your partner</h1> */}
            <p id='services' className='whatwedop'>With years of digital marketing & design experience, we’re a team of young savy individuals combining our skills to help solve business problems and accelerate brands and businesses. </p>
            <p id='second'>Our specialities include <span className='wwd-span'>Digital Marketing, PPC</span> (Google and Facebook Ad Campaigns),<span className='wwd-span'> E-Commerce, Lead Generation, SEO, Graphic Design,  Branding</span> and<span className='wwd-span'> Email Marketing</span>. We love working with new brands and new people, get in touch to discuss everything from you’re business, our business and anything in between.</p>
        </div>
    )
}

