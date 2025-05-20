import Link from "next/link"
import Image from "next/image"

export default function PlansPage() {
  const plans = [
    {
      name: "Mens Training 18+",
      price: "£7",
      period: "Every week",
      details: "Thursdays",
      buttonText: "Select",
      note: "For Enquiries Please Email or Message",
    },
    {
      name: "Open Sessions 10+",
      price: "£8",
      period: "Every week",
      details: "Thursdays 6pm to 7:30pm. Option of pay as you play or monthly payment of £30",
      buttonText: "Select",
      note: "",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-4xl font-bold text-white mb-6 md:mb-0">
              Choose your <span className="text-green-500">pricing plan</span>
            </h1>
            <Image src="/logo2.png" alt="Eastside Crusaders Logo" width={450} height={450} className="h-56 w-56" />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="pb-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {plans.map((plan, index) => (
              <div key={index} className="border border-gray-800 p-8 hover:border-green-800 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-center">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
                <p className="text-center mb-3">{plan.period}</p>
                <p className="text-center mb-8 text-gray-400 h-16">{plan.details}</p>
                <button className="w-full bg-red-600 text-white py-3 hover:bg-red-700 transition-colors mb-4">
                  {/* {plan.buttonText} */}
                </button>
                {plan.note && <p className="text-center text-sm text-gray-400">{plan.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-16 bg-black border-t border-green-800">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">ADDITIONAL OPTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-gray-800 p-8 hover:border-green-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Private Training</h3>
              <p className="mb-6 text-gray-400 h-16">
                One-on-one coaching sessions tailored to your specific needs and goals.
              </p>
              <div className="text-2xl font-bold mb-6">From £25 per session</div>
              <Link
                href="#contact"
                className="block w-full bg-red-600 text-white py-3 text-center hover:bg-red-700 transition-colors"
              >
                Enquire Now
              </Link>
            </div>
            <div className="border border-gray-800 p-8 hover:border-green-800 transition-colors">
              <h3 className="text-xl font-bold mb-4">Team Training</h3>
              <p className="mb-6 text-gray-400 h-16">
                Custom training programs for existing teams looking to improve together.
              </p>
              <div className="text-2xl font-bold mb-6">Custom pricing</div>
              <Link
                href="#contact"
                className="block w-full bg-red-600 text-white py-3 text-center hover:bg-red-700 transition-colors"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
