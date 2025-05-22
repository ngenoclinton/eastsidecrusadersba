import Image from "next/image"
import Link from "next/link"

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
      image: "/Coach-Jermaine_CEO&Founder.jpg",
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
      image: "/Harold_coach.jpg",
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
                  <Image
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    width={150}
                    height={150}
                    className="w-auto h-auto rounded-full"
                  />
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



      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">WHAT OUR PLAYERS SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "The coaching at Eastside Crusaders has completely transformed my game. I've improved more in 3 months
                  than I did in the past 2 years."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                  <div>
                    <h4 className="text-white font-bold">John D.</h4>
                    <p className="text-gray-400 text-sm">Member since 2023</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Our Community Section */}
            {/* <section className="py-20 bg-black">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12">
                  <div className="flex justify-center space-x-1 mb-4">
                    <span className="text-red-600 text-2xl">★</span>
                    <span className="text-red-600 text-2xl">★</span>
                    <span className="text-red-600 text-2xl">★</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    AUTHENTIC, DEDICATED
                    <br />
                    PLAYERS
                  </h2>
                  <Link
                    href="https://instagram.com/eastside_crusaders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-gray-600 px-6 py-3 text-white hover:bg-gray-900 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    eastside_crusaders
                  </Link>
                </div>
      
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[...Array(8)].map((_, index) => (
                    <div key={index} className="aspect-square relative overflow-hidden rounded-md">
                      <Image
                        src={`/placeholder.svg?height=400&width=400&text=Player${index + 1}`}
                        alt={`Basketball player ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section> */}
      
    </>
  )
}
