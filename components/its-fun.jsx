import Image from "next/image"

const ItsFun = () => {
  return (
    <section className="py-16 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 z-0">
                <Image
                  src="/defence1.jpg"
                  alt="Basketball training session"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/99 to-green-700"></div>
              </div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">IT'S FUN</h2>
          {/* <p className="text-white text-lg uppercase tracking-wide leading-relaxed">
            AT EASTSIDE CRUSADERS WE USE TECHNOLOGY TO OUR ADVANTAGE, CREATING AN ENGAGING AND INTERACTIVE TRAINING
            EXPERIENCE THAT SEAMLESSLY GUIDES AND SUPPORTS YOU THROUGHOUT YOUR WORKOUT AND MAKES YOUR BASKETBALL
            TRAINING EXPERIENCE FUN AND ENGAGING.
          </p> */}
        </div>
      </div>
    </section>
  )
}

export default ItsFun
