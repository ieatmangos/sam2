
import './ClientsBox.css'




import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

const first = {
    name: 'Bob',
    title: 'Manage',
    quote: 'Lorem ipsum dolor sit amet rendis soluta nostrum dolore fugiat, iusto cum. Veritatis earum, totam facilis id modi neque quod.',
}

const second = {
    name: 'Sam',
    title: 'something',
    quote: 'Lorem ipsum dolarum, totam facilis id modi neque quod.',
}
const third = {
    name: 'Pete',
    title: 'Designer',
    quote: 'Lorem ipsum dolarum, totam facilis id modi neque ilis id modi neque ilis id modi neque ilis id modi neque quod.',
}
const fourth = {
    name: 'Mark',
    title: 'Operator',
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







