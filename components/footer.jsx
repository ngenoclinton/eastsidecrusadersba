import { Mail, Phone, Clock } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-green-800" id="contact">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-500">CONTACT US</h3>
            <p className="text-lg mb-6">FOR MORE INFORMATION</p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-green-500" />
                <span>EST.CRUSADERS@GMAIL.COM</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-green-500" />
                <span>0737 9372 385</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-3 text-green-500" />
                <span>OPENING HOURS | MONDAY-SATURDAY 9AM TO 5PM |</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-white hover:text-green-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-green-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>

          {/* <ContactForm /> */}
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400 flex justify-between">
          <p>&copy; {new Date().getFullYear()} Eastside Crusaders. All rights reserved.</p>
          <p >Powered by <Link href="https://www.irobtechnologies.com/" target="_blank" className="text-green-500">iRob Technologies.</Link></p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
