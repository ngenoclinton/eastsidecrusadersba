import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export default function PlansPage() {
  const plans = [
    {
      name: "Mens Training 18+",
      price: "£7",
      period: "Per session",
      details: "Thursdays",
      features: [
        "Professional coaching",
        "Skill development",
        "Game situations",
        "Tactical training",
        "Performance feedback",
      ],
      buttonText: "Select Plan",
      popular: false,
    },
    // {
    //   name: "Monthly Pass",
    //   price: "£30",
    //   period: "Per month",
    //   details: "Unlimited access to Thursday sessions",
    //   features: [
    //     "All single session benefits",
    //     "Priority registration",
    //     "Personalized progress tracking",
    //     "Discounted private coaching",
    //     "Access to exclusive events",
    //   ],
    //   buttonText: "Select Plan",
    //   popular: true,
    // },
    {
      name: "Open Sessions 10+",
      price: "£8",
      period: "Per session",
      details: "Thursdays 6pm to 7:30pm",
      features: [
        "Age-appropriate drills",
        "Fundamental skill building",
        "Fun team activities",
        "Confidence building",
        "Safe learning environment",
      ],
      buttonText: "Select Plan",
      popular: false,
    },
  ]

  const additionalOptions = [
    {
      name: "Private Training",
      description: "One-on-one coaching sessions tailored to your specific needs and goals.",
      price: "From £25",
      period: "per session",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Team Training",
      description: "Custom training programs for existing teams looking to improve together.",
      price: "Custom pricing",
      period: "based on team size",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const faqs = [
    {
      question: "Do I need to bring my own basketball?",
      answer: "No, we provide all the necessary equipment for our training sessions, including basketballs.",
    },
    {
      question: "What if I need to cancel my session?",
      answer:
        "We understand that plans change. Please let us know at least 24 hours in advance if you need to cancel or reschedule your session.",
    },
    {
      question: "Is there a minimum commitment period for the monthly pass?",
      answer: "No, our monthly pass is flexible with no long-term commitment required.",
    },
    {
      question: "Are there any age restrictions for the sessions?",
      answer:
        "Yes, our Mens Training is for ages 18+ and our Open Sessions are for ages 10+. We ensure appropriate training for each age group.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Choose your <span className="text-green-500">training plan</span>
              </h1>
              <p className="text-gray-300 max-w-xl">
                Invest in your basketball journey with our flexible training plans designed to fit your schedule and
                goals. Whether you're looking to sharpen specific skills or develop your all-around game, we have
                options for you.
              </p>
            </div>
            <Image
              src="/logo2.png"
              alt="Eastside Crusaders Logo"
              width={100}
              height={100}
              className="h-56 w-56 mt-6 md:mt-0"
              // className="h-40 w-auto "
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden ${
                  plan.popular ? "border-2 border-green-500 bg-gray-900" : "border border-gray-800 bg-gray-900/70"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-white">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-red-600">{plan.price}</span>
                    <span className="text-gray-400 ml-2 text-green-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.details}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button
                    className={`w-full py-3 font-bold rounded-md transition-colors ${
                      plan.popular
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    {plan.buttonText}
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">ADDITIONAL OPTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {additionalOptions.map((option, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-black rounded-lg overflow-hidden">
                {/* <div className="md:w-2/5 relative h-60 md:h-auto">
                  <Image src={option.image || "/placeholder.svg"} alt={option.name} fill className="object-cover" />
                </div> */}
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{option.name}</h3>
                    <p className="text-gray-300 mb-4">{option.description}</p>
                  </div>
                  <div>
                    <div className="flex items-baseline mb-4">
                      <span className="text-2xl font-bold text-white">{option.price}</span>
                      <span className="text-gray-400 ml-2">{option.period}</span>
                    </div>
                    <Link
                      href="#contact"
                      className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Don't see your question here? Contact us directly.</p>
            <Link
              href="#contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
