import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Mens Training 18+",
      schedule: "Thursday Evenings",
      price: "£7",
      // action: "More Info",
      image: "/menstraining18above.webp",
    },
    {
      title: "Open Session 10+",
      schedule: "Thursday Evenings (5pm to 7:30pm)",
      price: "From £8",
      // action: "Book Now",
      image: "/opensession10above.webp",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-6">
          {/* <h1 className="text-3xl md:text-4xl font-bold mb-8 text-green-500">SERVICES</h1> */}

          <div className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">
              SERVICES
            </h1>
            <Image
              src="/logo2.png"
              alt="Eastside Crusaders Logo"
              width={450}
              height={450}
              className="h-56 w-56"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="service-card overflow-hidden group">
                <div className="h-64 relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white font-bold mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-center text-white mb-3">{service.schedule}</p>
                  <div className="border-t border-gray-800 my-4"></div>
                  <p className="text-center text-white text-2xl font-bold mb-4">
                    {service.price}
                  </p>
                  <div className="text-center">
                    {/* <Link
                      href="#contact"
                      className="inline-block border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
                    >
                      {service.action}
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="py-16 bg-black border-t border-green-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl text-white md:text-2xl font-bold mb-8 text-center">
              WHAT TO EXPECT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-black text-white p-6 border border-green-800">
                <h3 className="text-xl font-bold mb-4 text-green-500">
                  Training Sessions Include
                </h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-white" >Warm-up and stretching</span>
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

              <div className="bg-black p-6 border border-green-800">
                <h3 className="text-xl font-bold mb-4 text-green-500">
                  What to Bring
                </h3>
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
  );
}
