import Image from "next/image"
import ExpandableSection from "./expandable-section"

const ItsScience = () => {
  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 bg-black rounded-lg border border-green-900">
            <div className="flex space-x-1 mb-4">
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
            </div>
            <h3 className="text-sm font-bold tracking-wider text-green-500 uppercase mb-4">HOW DOES CRUSADERS WORK?</h3>

            <h2 className="text-4xl font-bold mb-6 text-white">IT'S SCIENCE</h2>
            <p className="text-gray-300 mb-8">
              Crusaders offers innovative, high-intensity basketball training that is fast, fun and results-driven. Our
              goal is to help you become your best on the court through scientifically-backed training methods!
            </p>

            <div className="space-y-4">
              <ExpandableSection title="SKILL DEVELOPMENT TRAINING">
                <p className="text-gray-300">
                  Each Crusaders workout is a unique program that incorporates fundamental skills, game-situation
                  drills, and physical conditioning, all geared toward real-game performance.
                </p>
              </ExpandableSection>

              <ExpandableSection title="VARIED TRAINING SESSIONS">
                <p className="text-gray-300">
                  We offer a wide variety of training sessions that focus on different aspects of the game, ensuring
                  players develop a complete skill set and never get bored with repetitive drills.
                </p>
              </ExpandableSection>

              <ExpandableSection title="CERTIFIED COACHES">
                <p className="text-gray-300">
                  Our coaches have years of experience playing and coaching at high levels. They're certified,
                  passionate, and committed to helping each player reach their full potential.
                </p>
              </ExpandableSection>

              <ExpandableSection title="PERFORMANCE NUTRITION">
                <p className="text-gray-300">
                  We provide guidance on proper nutrition to fuel your training and recovery, helping you perform at
                  your best both on and off the court.
                </p>
              </ExpandableSection>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/blue-team-shot.jpg"
              alt="Basketball player in action"
              width={500}
              height={1000}
              className="roundedlg h-3/4 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItsScience
