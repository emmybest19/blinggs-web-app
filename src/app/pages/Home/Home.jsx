import React from 'react'
import HomePageHero from '../../components/HomeHero/HomePageHero'
import MockUp from '@/app/components/Mockup/Mockup'
import EverythingYouNeed from "../../components/EveryHomeSection/EverythingNeed"
import StartInMinutes from '@/app/components/HomeStart/StartMinutes'
import HomeStats from '@/app/components/Stats/HomeStats'
import TestimonyHome from '@/app/components/TestimonialHome/TestimonyHome'
import ComingSoon from '@/app/components/ComingSoon/CoomingSoon'
// import Footer from '@/app/components/Footer/Footer'

export default function Home() {
    return (
        <>
            <HomePageHero />
            <MockUp />
            <EverythingYouNeed />
            <StartInMinutes />
            <HomeStats />
            <TestimonyHome />
            <ComingSoon />
        </>
    )
}