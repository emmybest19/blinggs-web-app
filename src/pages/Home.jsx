import CTASection from "../components/home/CTASection"
import HeroSection from "../components/home/HeroSection"

function Home() {
    return (
        <div className="bg-[#434c5d] px-[15px] md:px-[60px] py-[10px] md:py-[30px]">
            <HeroSection />
            <CTASection />
        </div>
    )
}

export default Home
