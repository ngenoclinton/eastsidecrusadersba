import Image from "next/image"

const ItsCommunity = () => {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <div className="flex justify-center mb-2">
            <div className="flex space-x-1">
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
            </div>
          </div>
          <h3 className="text-center text-sm font-bold tracking-wider text-green-500 uppercase mb-4">
            WHY GROUP TRAINING?
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">IT'S COMMUNITY</h2>
          <p className="text-center text-gray-300 uppercase tracking-wide max-w-4xl">
            EASTSIDE CRUSADERS ISN'T JUST A TEAM, WE'RE A FAMILY. AT OUR COURTS YOU WILL MAKE FRIENDS AND GET REAL
            RESULTS BECAUSE YOUR CRUSADERS COMMUNITY IS THERE TO MOTIVATE AND SUPPORT YOU. THAT'S TRAINING, LIFE
            CHANGING.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12 max-w-xl">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-green-600 mr-4"></div>
                <span className="text-xs font-bold tracking-wider text-green-600 uppercase">COMMUNITY</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">FOR EVERYBODY</h3>
              <p className="text-gray-300">
                It doesn't matter whether you're just beginning your basketball journey or are 20 years into it,
                Eastside Crusaders programs are designed to work at all levels. We're all in it together.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-green-600 mr-4"></div>
                <span className="text-xs font-bold tracking-wider text-green-600 uppercase">COMMUNITY</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">ACCOUNTABILITY</h3>
              <p className="text-gray-300">
                Achieving your basketball goals is easier – and a lot more fun – when you're part of a group. Because
                having a team behind you keeps you accountable and staying the course.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-green-600 mr-4"></div>
                <span className="text-xs font-bold tracking-wider text-green-600 uppercase">COMMUNITY</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">WITHOUT JUDGMENT</h3>
              <p className="text-gray-300">
                Eastside Crusaders courts are no-judgment zones where coaches and players work together to get results
                in an open, welcoming, supportive and protective environment that fosters a real sense of community.
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src="/reds-team1.jpg"
              alt="Basketball community training"
              width={500}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItsCommunity
