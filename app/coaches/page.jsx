import Image from "next/image"

export default function CoachesPage() {
  const coaches = [
    {
      name: "JERMAINE DSOUZA",
      position: "Ceo & Founder | Head Coach",
      bio: "Jermaine studied sports development, coaching and fitness at college then studied Sports Development Graduate having obtained his degree from Winchester University. Jermaine then worked as an intra-college sports activator meaning that he was responsible for delivering in-house competitions, working closely with curriculum teams, and leading gym inductions.",
      image: "/images/logo.png",
    },
    {
      name: "HAROLD EJELE",
      position: "Head Coach",
      bio: "Harold has been involved within the basketball community in several capacities over the years. Studying International Business at the University of Hertfordshire, he played for the first team and captained the side in his final year. Harold has played basketball across the country, starting off with Newham Youngbloods from U16 to U18, representing the borough of Newham during those years.",
      image: "/images/logo.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-4xl font-bold text-white mb-6 md:mb-0">
              MEET <span className="text-green-500">THE COACHES</span>
            </h1>
            <Image
              src="/images/logo.png"
              alt="Eastside Crusaders Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 bg-green-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-black p-8 transform transition-transform hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <Image
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    width={120}
                    height={120}
                    className="w-auto h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{coach.name}</h3>
                <p className="text-green-500 mb-4 text-center">{coach.position}</p>
                <p className="text-gray-300">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">OUR COACHING PHILOSOPHY</h2>
            <p className="text-lg text-center mb-10">
              At Eastside Crusaders, we believe in developing the complete player through our unique approach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-t-4 border-green-500 pt-4">
                <h3 className="text-lg font-bold mb-3">Skill Development</h3>
                <p className="text-gray-400">
                  Mastering the fundamentals through repetition and focused practice to build a solid foundation.
                </p>
              </div>
              <div className="border-t-4 border-green-500 pt-4">
                <h3 className="text-lg font-bold mb-3">Basketball IQ</h3>
                <p className="text-gray-400">
                  Understanding the game beyond the basics - strategy, positioning, and decision-making.
                </p>
              </div>
              <div className="border-t-4 border-green-500 pt-4">
                <h3 className="text-lg font-bold mb-3">Character Building</h3>
                <p className="text-gray-400">
                  Developing discipline, resilience, teamwork, and leadership skills both on and off the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
