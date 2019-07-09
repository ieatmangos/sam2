import React, { Component } from 'react'
import RecentBanner from './RecentBanner'
import RecentBox from './RecentBox'
import food from '../../../images/food.jpeg'
import './Recent.css'
const img1 = {
    textclass: 'recentbox-text',
    imgclass: 'recentbox-image',
    company: 'Office Leasing',
    work: 'digital marketing',
    text: 'We worked with them',
}
const img2 = {
    textclass: 'recentbox2-text',
    imgclass: 'recentbox2-image',
    company: 'Plae Shoes',
    work: 'surfs up bro',
    text: 'We did other stuff',
}
const img3 = {
    textclass: 'recentbox3-text',
    imgclass: 'recentbox3-image',
    company: 'Luxury Accomodation',
    work: 'digital marketing',
    text: 'We worked with them and made some burgers with Tina',
}
const img4 = {
    textclass: 'recentbox4-text',
    imgclass: 'recentbox4-image',
    company: 'Luna&Rose Jewelery',
    work: 'Bar drinks',
    text: 'We called Dee a bird',
}
const img5 = {
    textclass: 'recentbox5-text',
    imgclass: 'recentbox5-image',
    company: 'LL Wedding Hire',
    work: 'Bar drinks',
    text: 'We called Dee a bird',
}
const img6 = {
    textclass: 'recentbox6-text',
    imgclass: 'recentbox6-image',
    company: 'Jeffery Construction',
    work: 'Bar drinks',
    text: 'We called Dee a bird',
}
const img7 = {
    textclass: 'recentbox7-text',
    imgclass: 'recentbox7-image',
    company: 'Grounded Packaging.',
    work: 'Bar drinks',
    text: 'We called Dee a bird',
}
const img8 = {
    textclass: 'recentbox8-text',
    imgclass: 'recentbox8-image',
    company: 'Fenton Building',
    work: 'Bar drinks',
    text: 'We called Dee a bird',
}
const img9 = {
    textclass: 'recentbox9-text',
    imgclass: 'recentbox9-image',
    company: 'Bird & Kite',
    work: 'Bar drinks',
    text: 'We called Dee a bird',
}
const img10 = {
    textclass: 'recentbox10-text',
    imgclass: 'recentbox10-image',
    company: 'Medical on Miami Medical Centre',
    work: 'Bar drinks',
    text: 'We called Dee a bird',
}

export class Recent extends Component {
    render() {
        return (
            <div className='recent'>
                <RecentBanner />
                <div className='recentbox-wrapper'>
                    <RecentBox props={img1} />
                    <RecentBox props={img2} />
                    <RecentBox props={img3} />
                    <RecentBox props={img4} />
                    <RecentBox props={img5} />
                    <RecentBox props={img6} />
                    <RecentBox props={img7} />
                    <RecentBox props={img8} />
                    <RecentBox props={img9} />
                    <RecentBox props={img10} />

                </div>



            </div>
        )
    }
}

export default Recent
