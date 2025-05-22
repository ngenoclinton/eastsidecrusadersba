import Image from "next/image"

const WhyCrusadersWorks = () => {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <div className="flex justify-center mb-2">
            <div className="flex space-x-1">
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
            </div>
          </div>
          <h3 className="text-center text-sm font-bold tracking-wider text-green-500 uppercase">
            BACKED BY EXPERIENCE
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="hidden md:block">
            <Image
              src="/player-in-action.jpg"
              alt="Basketball player training"
              width={400}
              height={600}
              className="rounded-lg object-cover h-full w-full"
            />
          </div>

          <div className="text-center md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-500">WHY CRUSADERS WORKS</h2>
            <p className="text-white leading-relaxed">
              Born in East London, Eastside Crusaders merges elite basketball training with character development. With
              each session, you'll experience the proven benefits of our comprehensive approach to basketball training.
              We combine skill development, tactical awareness, and physical conditioning to provide you with the
              results you're looking for - all in a supportive community environment.
            </p>
          </div>

          <div className="hidden md:block">
            <Image
              src="/player-training1.jpg"
              alt="Basketball player training"
              width={400}
              height={600}
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyCrusadersWorks
