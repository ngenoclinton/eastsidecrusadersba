import Image from "next/image"

export default function CoachesPage() {
  const coaches = [
    {
      name: "JERMAINE DSOUZA",
      position: "Ceo & Founder | Head Coach",
      bio: [
        "Jermaine studied sports development, coaching and fitness at college then studied Sports Development Graduate having obtained his degree from Winchester University. Jermaine then worked as an intra-college sports activator meaning that he was responsible for delivering in-house competitions, working closely with curriculum teams, and leading gym inductions.",
        "Previously, Jermaine was the head basketball coach for the men's and women's basketball teams. Upon completing his Level 3 Education in Training Certificate, Jermaine led twilight and theory sessions alongside his team, delivering over 32 different sports and activities.",
        "Jermaine is passionate about sports and applies behavioral, motivational, and different exercise strategies to keep his sessions fun and engaging. As a sportsman, Jermaine knows first-hand the physical and mental health benefits of being active and part of a team. Sport is an amazing way to let off steam and meet new friends.",
        "Through coaching and mentoring, the ambition is to guide players & students to help them grow into well-rounded individuals. Working with novice youngsters to elite athletes, he envisions inspiring growth in the character and confidence of every individual he teaches and is excited to bring his experience to the Academy.",
      ],
      image: "/logo2.png",
    },
    {
      name: "HAROLD EJELE",
      position: "Head Coach",
      bio: [
        "Harold has been involved within the basketball community in several capacities over the past 13 years. Studying International Business at the University of Hertfordshire, he played for the first team and captained the side in his final year.",
        "Harold has played basketball across the country, starting off with Newham Youngbloods from U16 to U18, representing the borough of Newham during those years. Whilst at university, he played Division 1 basketball with the Hemel Storm for a season. He most recently played Division 2 basketball with Baltic Stars.",
        "Harold has an avid interest in sports, particularly strong expertise when it comes to basketball holistically. He is the Eastside Crusaders Head Coach for the 23/24 season and leads our coaching sessions on a weekly basis.",
        "Basketball has been a fundamental part of his life, keeping him grounded, focused, and efficient in activities beyond the court. He has a passion for the game and is keen to pass on his teachings to aspiring athletes - kids, youth, and adults.",
      ],
      image: "/logo2.png",
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
            <Image src="/logo2.png" alt="Eastside Crusaders Logo" width={450} height={450} className="h-56 w-56" />
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="pb-16 bg-green-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-black p-8 transform transition-transform hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  {/* <Image
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    width={120}
                    height={120}
                    className="w-auto h-auto"
                  /> */}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{coach.name}</h3>
                <p className="text-green-500 mb-4 text-center">{coach.position}</p>
                <div className="text-gray-300 space-y-4">
                  {coach.bio.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
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
