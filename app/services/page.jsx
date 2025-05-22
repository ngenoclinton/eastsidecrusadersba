import ItsFun from "@/components/its-fun"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Mens Training 18+",
      schedule: "Thursday Evenings",
      price: "£7",
      image: "/player1.jpg",
    },
    {
      title: "Open Session 10+",
      schedule: "Thursday Evenings (5pm to 7:30pm)",
      price: "From £8",
      image: "/opensession10above.webp",
    },
  ]

  const trainingTypes = [
    {
      name: "SKILLS",
      color: "bg-red-600",
      description: "Focused on developing fundamental and advanced basketball techniques",
    },
    {
      name: "CONDITIONING",
      color: "bg-green-600",
      description: "Building basketball-specific strength, agility and endurance",
    },
    {
      name: "STRATEGY",
      color: "bg-blue-600",
      description: "Understanding game situations and tactical decision-making",
    },
    {
      name: "RECOVERY",
      color: "bg-purple-600",
      description: "Essential techniques to prevent injury and improve performance",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">SERVICES</h1>
            <Image src="/logo2.png" alt="Eastside Crusaders Logo" width={450} height={450} className="h-56 w-56" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 bg-">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card overflow-hidden group bg- rounded-lg border border-green-900 hover:border-green-600 transition-all duration-300"
              >
                <div className="h-64 relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0  bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white font-bold mb-2 text-center">{service.title}</h3>
                  <p className="text-center text-white mb-3">{service.schedule}</p>
                  <div className="border-t border-gray-800 my-4"></div>
                  <p className="text-center text-white text-2xl font-bold mb-4">{service.price}</p>
                  <div className="text-center">
                    {/* <Link
                      href="#contact"
                      className="inline-block bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors"
                    >
                      Book Now
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Training Programs Section - Full width image with overlay */}
      <section className="relative py-20 bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/defence1.jpg"
            alt="Basketball training session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="flex space-x-1 mb-4">
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">UNIQUE AND STRUCTURED TRAINING</h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Eastside Crusaders combines elements
              of skill development, tactical awareness, and physical conditioning. We're focused on creating noticeable
              improvements in quick succession. That's where the Crusaders difference comes in. 
              Players can develop core skills and game understanding, delivering amazing results, all in a supportive
              team environment. Train at your own pace.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {trainingTypes.map((type, index) => (
                <span key={index} className={`${type.color} text-white px-4 py-2 font-bold text-sm`}>
                  {type.name}
                </span>
              ))}
            </div>

            {/* <Link
              href="#how-it-works"
              className="flex items-center text-green-500 font-bold hover:text-green-400 transition-colors"
            >
              HOW DO THESE WORK?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link> */}
          </div>
        </div>
      </section>

      <ItsFun />

      {/* Start Your Trial Section */}
      <section className="relative bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-900 py-16 px-6 md:px-12 flex items-center">
            <div className="max-w-md mx-auto md:ml-auto md:mr-0">
              <div className="flex space-x-1 mb-4">
                <span className="text-red-600 text-2xl">★</span>
                <span className="text-red-600 text-2xl">★</span>
                <span className="text-red-600 text-2xl">★</span>
              </div>
              <h3 className="text-sm font-bold tracking-wider text-green-500 uppercase mb-4">
                READY TO JOIN THE TEAM?
              </h3>
              <h2 className="text-4xl font-bold mb-6 text-white">
                START YOUR
                <br />
                JOURNEY
              </h2>
              <p className="text-gray-300 mb-8">
                Experience the Eastside Crusaders difference with a trial session. See how our unique approach to
                basketball training can help you elevate your game.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                Let's Go
              </Link>
            </div>
          </div>

          <div className="relative h-96 md:h-auto">
            <Image
              src="/crusaders.jpg"
              alt="Basketball training"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Community Section
      <section className="py-20 bg-black">
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

      {/* What To Expect - Your First Session */}
      <section className="pt-16 pb-0 bg-black-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex justify-center space-x-1 mb-4">
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
            </div>
            <h3 className="text-sm font-bold tracking-wider text-green-500 uppercase mb-2">WHAT TO EXPECT</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              YOUR FIRST CRUSADERS
              <br />
              SESSION
            </h2>
            <p className="text-gray-300 max-w-4xl mx-auto text-center uppercase tracking-wide leading-relaxed">
              AT EASTSIDE CRUSADERS, OUR TRAINING SESSIONS ARE METICULOUSLY CRAFTED BY CERTIFIED BASKETBALL COACHES TO
              DEVELOP ALL ASPECTS OF YOUR GAME, HELPING YOU ACHIEVE UNPARALLELED SKILL, AGILITY, AND BASKETBALL IQ THAT
              WILL LEAVE YOU FEELING YOUR ABSOLUTE BEST.
            </p>
            <p className="text-gray-300 max-w-4xl mx-auto mt-6 text-center uppercase tracking-wide leading-relaxed">
              WE'RE MORE THAN JUST A TRAINING ACADEMY, WE'RE A TOTAL BASKETBALL DEVELOPMENT SOLUTION FOR EVERY PLAYER.
              FROM THE MOMENT YOU WALK THROUGH THE DOORS OF OUR COURTS, YOU BECOME A PART OF THE CRUSADERS FAMILY. WE'RE
              NOT JUST INCLUSIVE; WE EMBRACE AND CELEBRATE YOUR PRESENCE, MAKING YOU FEEL LIKE YOU TRULY BELONG.
            </p>
          </div>
        </div>
      </section>
      {/* Training Details */}
      <section className="pb-10 bg-black borde bordergreen-800" id="how-it-works">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            {/* <h2 className="text-xl text-white md:text-2xl font-bold mb-8 text-center">WHAT TO EXPECT</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-900 text-white p-6 bordr bordergreen-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-500">Training Sessions Include</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Warm-up and stretching</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Skill development drills</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Tactical training</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Scrimmage games</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Cool down and feedback</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 border border-green-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-500">What to Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Basketball shoes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Water bottle</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Comfortable athletic clothing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white">Towel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
