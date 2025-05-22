import Image from "next/image"
import Link from "next/link"

export default function SessionsPage() {
  const sessions = [
    {
      title: "Fundamentals Training",
      day: "Mondays",
      time: "5:00 PM - 6:30 PM",
      ageGroup: "Ages 10-14",
      description:
        "Focus on core basketball skills including dribbling, passing, shooting, and defensive fundamentals.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Advanced Skills",
      day: "Wednesdays",
      time: "6:00 PM - 8:00 PM",
      ageGroup: "Ages 15+",
      description: "Develop advanced techniques, game strategy, and specialized skills for competitive play.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Shooting Clinic",
      day: "Thursdays",
      time: "5:30 PM - 7:00 PM",
      ageGroup: "All Ages",
      description: "Specialized training focused on shooting form, accuracy, and different shooting situations.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Team Scrimmages",
      day: "Saturdays",
      time: "10:00 AM - 12:00 PM",
      ageGroup: "Ages 15+",
      description: "Competitive 5-on-5 games with coaching feedback and situational training.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl font-bold mb-8 text-green-500">TRAINING SESSIONS</h1>
          <p className="text-white text-lg max-w-3xl">
            Join our structured training sessions designed to develop your basketball skills, improve your game
            awareness, and build your physical conditioning. Each session is led by our experienced coaches and tailored
            to different skill levels and age groups.
          </p>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300 border border-green-900"
              >
                <div className="h-64 relative">
                  <Image src={session.image || "/placeholder.svg"} alt={session.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{session.title}</h3>
                    <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">{session.ageGroup}</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-300">
                    <span className="mr-4">{session.day}</span>
                    <span>{session.time}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{session.description}</p>
                  <Link
                    href="#contact"
                    className="inline-block bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-500">WEEKLY SCHEDULE</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-green-800 text-white text-left">Time</th>
                  <th className="py-4 px-6 bg-green-800 text-white text-left">Monday</th>
                  <th className="py-4 px-6 bg-green-800 text-white text-left">Tuesday</th>
                  <th className="py-4 px-6 bg-green-800 text-white text-left">Wednesday</th>
                  <th className="py-4 px-6 bg-green-800 text-white text-left">Thursday</th>
                  <th className="py-4 px-6 bg-green-800 text-white text-left">Friday</th>
                  <th className="py-4 px-6 bg-green-800 text-white text-left">Saturday</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-4 px-6 text-white">5:00 - 6:30 PM</td>
                  <td className="py-4 px-6 text-green-500">Fundamentals (10-14)</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white">5:30 - 7:00 PM</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-green-500">Shooting Clinic (All)</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white">6:00 - 8:00 PM</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-green-500">Advanced Skills (15+)</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white">10:00 - 12:00 PM</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-gray-400">-</td>
                  <td className="py-4 px-6 text-green-500">Team Scrimmages (15+)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
