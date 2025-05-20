import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
            <source src="/EastsideCrusadersBA.mp4" type="video/mp4" />
          </video>
          {/* Background color overlay with opacity */}
          <div className="absolute inset-0 bg-black/70 bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-8">
            <div className="w-full md:w-auto mb-6 md:mb-0 flex justify-center md:justify-start">
              <Image
                src="/images/logo.png"
                alt="Eastside Crusaders Logo"
                width={300}
                height={300}
                className="w-auto h-auto max-w-[180px] md:max-w-[250px]"
              />
            </div>
            <div className="md:ml-6 flex items-center">
              <h1
                className="text-green-500 font-bold leading-tight text-outline text-center md:text-left"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  textShadow: "0 0 10px rgba(0,0,0,0.5)",
                }}
              >
                EASTSIDE
                <br />
                CRUSADERS
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto md:mx-0">
            <p className="text-white text-lg mb-8">
              Welcome to Eastside Crusaders, your premier destination for basketball excellence! If you have a passion
              for the game and a desire to take your skills to the next level, you've come to the right place. Our
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
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-500 mb-8">ABOUT US</h2>
            <p className="text-lg leading-relaxed mb-10">
              At Eastside Crusaders, we believe that basketball is more than just a game; it's a lifestyle. Whether
              you're a beginner stepping onto the court for the first time or an advanced player striving for a
              competitive edge, our comprehensive programs cater to all skill levels and age groups.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-300">
                  To provide exceptional basketball training that develops not just skills, but character, teamwork, and
                  a lifelong passion for the game.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-300">
                  To become the premier basketball academy that transforms players at all levels into confident,
                  skilled, and successful athletes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
