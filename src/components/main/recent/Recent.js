import React, { Component } from 'react'
import RecentBanner from './RecentBanner'
import RecentBox from './RecentBox'
import food from '../../../images/food.jpeg'

const img1 = {
    textclass: 'recentbox-text',
    imgclass: 'recentbox-image',
    company: 'Bali Bagus',
    work: 'digital marketing',
    text: 'We worked with them',
}
const img2 = {
    textclass: 'recentbox2-text',
    imgclass: 'recentbox2-image',
    company: 'Surf Lessons',
    work: 'surfs up bro',
    text: 'We did other stuff',
}
const img3 = {
    textclass: 'recentbox3-text',
    imgclass: 'recentbox3-image',
    company: 'Bobs Burgers',
    work: 'digital marketing',
    text: 'We worked with them and made some burgers with Tina',
}
const img4 = {
    textclass: 'recentbox4-text',
    imgclass: 'recentbox4-image',
    company: 'Paddys Pub',
    work: 'Bar drinks',
    text: 'We called Dee a bird',
}

export class Recent extends Component {
    render() {
        return (
            <div className='recent'>
                <RecentBanner />

                <RecentBox props={img1} />
                <RecentBox props={img2} />
                <RecentBox props={img3} />
                <RecentBox props={img4} />





            </div>
        )
    }
}

export default Recent
