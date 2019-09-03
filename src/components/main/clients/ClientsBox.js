
import './ClientsBox.css'




import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

const first = {
    name: 'Ben',
    title: 'Co-Founder, Grounded Packaging',
    quote: 'We’ve worked with the team at Butiq Digital since launching Grounded Packaging, they’ve been instrumental in getting our brand and products out to the market and driving customer enquiries and leads from the day we started. ',
}

const second = {
    name: 'Jodi',
    title: 'Founder, Bird & Kite',
    quote: 'We love working with Sam and his team, we look to them as our digital experts who look after an aspect of our business we know very little about. We’ve seen some great results with increased online sales and new customers which is all we can ask for.',
}
const third = {
    name: 'Rosie',
    title: 'Founder, La Luna Rose',
    quote: 'Working with Sam & Annabelle has been a pleasure, they always put my business first and make sure that every dollar spent is accountable and has a purpose. They’ve been a crucial part of my business growth recently, and I look forward to continuing to work together.',
}
const fourth = {
    name: 'Lucy',
    title: 'Founder, LL Wedding Hire',
    quote: 'Lorem ipsum dolarum, totam fm, totam facilis id modi neque quod.',
}


const pages = [
    ({ style }) => <animated.div style={{ ...style, background: '#fba47e', display: 'grid', gridTemplateColumns: '2fr 4fr' }}><div style={{ marginLeft: '20%' }}><h1 style={{
        fontSize: window.innerWidth > 800 ? '2em' : '.5em'
    }}>{first.name}</h1><h3 style={{ fontSize: window.innerWidth > 800 ? '.8em' : '.3em' }}>{first.title}</h3></div><div style={{
        fontSize: window.innerWidth > 800 ? '1em' : '.4em', marginRight: '20% '
    }}>"{first.quote}"</div></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#986287', display: 'grid', gridTemplateColumns: '2fr 4fr' }}><div style={{ marginLeft: '20%' }}><h1 style={{ fontSize: window.innerWidth > 800 ? '2em' : '.5em' }}>{fourth.name}</h1><h3 style={{ fontSize: window.innerWidth > 800 ? '.8em' : '.3em' }}>{fourth.title}</h3></div><div style={{ fontSize: window.innerWidth > 800 ? '1em' : '.4em', marginRight: '20%' }}>"{fourth.quote}"</div></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#93babc', display: 'grid', gridTemplateColumns: '2fr 4fr' }}><div style={{ marginLeft: '20%' }}><h1 style={{ fontSize: window.innerWidth > 800 ? '2em' : '.5em' }}>{second.name}</h1><h3 style={{ fontSize: window.innerWidth > 800 ? '.8em' : '.3em' }}>{second.title}</h3></div><div style={{ fontSize: window.innerWidth > 800 ? '1em' : '.4em', marginRight: '20%' }}>"{second.quote}"</div></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#e95c5a', display: 'grid', gridTemplateColumns: '2fr 4fr' }}><div style={{ marginLeft: '20%' }}><h1 style={{ fontSize: window.innerWidth > 800 ? '2em' : '.5em' }}>{third.name}</h1><h3 style={{ fontSize: window.innerWidth > 800 ? '.8em' : '.3em' }}>{third.title}</h3></div><div style={{ fontSize: window.innerWidth > 800 ? '1em' : '.4em', marginRight: '20%' }}>"{third.quote}"</div></animated.div>,
]

export default function ClientBox() {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 4), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)', borderRadius: '5%', width: '100%' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)', borderRadius: '0%', width: '100%', height: '100%' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)', borderRadius: '0%', width: '100%' },
    })
    return (
        <div className='wrapper'>
            <div className="simple-trans-main" onClick={onClick}>
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                })}
            </div>
        </div>
    )
}







