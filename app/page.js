import VideoBackground from "@/components/VideoBackground"
import Image from "next/image"
import Link from "next/link"
import WhyCrusadersWorks from "@/components/why-crusaders-works"
import Slider from "@/components/slider"
import ItsScience from "@/components/its-science"
import ItsFun from "@/components/its-fun"
import ItsCommunity from "@/components/its-community"

export default function Home() {
  const sliderSlides = [
    {
      title: "INNOVATION",
      content:
        "Our innovative basketball training sessions are experience-backed, technology-led, and specifically developed to build skills, basketball IQ, and improve overall athletic performance.",
    },
    {
      title: "MOTIVATION",
      content:
        "Our team mentality helps you to stay motivated, creates accountability and fosters a real community atmosphere based on a no-ego attitude.",
    },
    {
      title: "RESULTS",
      content:
        "Our training program is designed to work and deliver results for everyone, regardless of where you're at in your basketball journey.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden lg:pl-12">
        <div className="absolute inset-0 z-0">
          <VideoBackground src="/EastsideCrusadersBA.mp4" poster="/placeholder.svg?height=1080&width=1920" />
          {/* Background color overlay with opacity */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-8 md:pl-4">
            <div className="w-full md:w-auto mb-6 md:mb-0 flex justify-center md:justify-start">
              <Image
                src="/logo2.png"
                alt="Eastside Crusaders Logo"
                width={500}
                height={500}
                className="lg:w-80 lg:h-72 max-w-[180px] md:max-w-[250px]"
                priority
              />
            </div>
            <div className="md:ml-6 flex items-center">
              <h1
                className="text-green-500 font-bold leading-tight text-outline text-center md:text-left"
                style={{
                  fontSize: "clamp(2.2rem, 7vw, 4.5rem)",
                  textShadow: "0 0 10px rgba(0,0,0,0.5)",
                }}
              >
                EASTSIDE
                <br />
                CRUSADERS
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto md:mx-0 md:pl-4">
            <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
              Welcome to Eastside Crusaders, your premier destination for basketball excellence! If you have a passion
              for the game and a desire to take your skills to the next level, you&#39;ve come to the right place. Our
              basketball coaching academy is dedicated to nurturing talent, developing potential, and building a
              community of enthusiastic players who share a love for the sport.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/services" className="bg-green-600 text-white px-6 py-3 hover:bg-green-700 transition-colors">
                Our Services
              </Link>
              <Link href="#contact" className="bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-black lg:mt-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bebas text-green-500 mb-6 tracking-wider">ABOUT US</h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 text-white">
              At Eastside Crusaders, we believe that basketball is more than just a game; it&#39;s a lifestyle. Whether
              you&#39;re a beginner stepping onto the court for the first time or an advanced player striving for a
              competitive edge, our comprehensive programs cater to all skill levels and age groups.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left text-white">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bebas mb-3 tracking-wider text-green-500 ">OUR MISSION</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide exceptional basketball training that develops not just skills, but character, teamwork, and
                  a lifelong passion for the game.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bebas mb-3 tracking-wider text-green-500">OUR VISION</h3>
                <p className="text-gray-300 leading-relaxed ">
                  To become the premier basketball academy that transforms players at all levels into confident,
                  skilled, and successful athletes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Crusaders Works Section */}
      <WhyCrusadersWorks />

      {/* Slider Section */}
      <Slider slides={sliderSlides} heading="WHAT IS CRUSADERS TRAINING?" autoSlideInterval={6000} />

      {/* It's Science Section */}
      <ItsScience />

      {/* It's Fun Section */}
      <ItsFun />

      {/* It's Community Section */}
      <ItsCommunity />
    </>
  )
}
