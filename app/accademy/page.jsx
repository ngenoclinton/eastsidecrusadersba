// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Play } from "lucide-react"

// export default function AcademyPage() {
//   const [activeVideo, setActiveVideo] = useState<string | null>(null)

//   const galleryImages = [
//     {
//       src: "/placeholder.svg?height=600&width=800",
//       alt: "Basketball training session",
//       caption: "Skill development drills with Coach Jermaine",
//     },
//     {
//       src: "/placeholder.svg?height=600&width=800",
//       alt: "Team practice",
//       caption: "Team defensive strategies practice",
//     },
//     {
//       src: "/placeholder.svg?height=600&width=800",
//       alt: "Shooting practice",
//       caption: "Free throw technique workshop",
//     },
//     {
//       src: "/placeholder.svg?height=600&width=800",
//       alt: "Group training",
//       caption: "Youth development program in action",
//     },
//     {
//       src: "/placeholder.svg?height=600&width=800",
//       alt: "One-on-one coaching",
//       caption: "Personalized coaching session",
//     },
//     {
//       src: "/placeholder.svg?height=600&width=800",
//       alt: "Team huddle",
//       caption: "Pre-game strategy session",
//     },
//   ]

//   const videos = [
//     {
//       id: "video1",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//       title: "Dribbling Fundamentals",
//       description: "Learn the basics of ball handling and control",
//       duration: "5:24",
//     },
//     {
//       id: "video2",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//       title: "Shooting Form Masterclass",
//       description: "Perfect your shooting technique with Coach Harold",
//       duration: "8:15",
//     },
//     {
//       id: "video3",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//       title: "Defensive Positioning",
//       description: "Key strategies for effective defensive play",
//       duration: "6:42",
//     },
//     {
//       id: "video4",
//       thumbnail: "/placeholder.svg?height=400&width=600",
//       title: "Game Highlights",
//       description: "Recent scrimmage highlights and analysis",
//       duration: "4:30",
//     },
//   ]

//   const facilities = [
//     {
//       name: "Main Court",
//       description: "Our professional-grade basketball court with regulation dimensions and high-quality flooring",
//       image: "/placeholder.svg?height=500&width=700",
//     },
//     {
//       name: "Training Area",
//       description: "Specialized training zone with shooting machines, agility equipment, and skill development tools",
//       image: "/placeholder.svg?height=500&width=700",
//     },
//     {
//       name: "Analysis Room",
//       description: "Video analysis suite where players can review game footage and receive coaching feedback",
//       image: "/placeholder.svg?height=500&width=700",
//     },
//   ]

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 bg-black">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <h1 className="text-4xl font-bold mb-8 text-green-500">THE ACADEMY</h1>
//           <p className="text-white text-lg max-w-3xl">
//             Welcome to the heart of Eastside Crusaders. Our academy is where skills are forged, character is built, and
//             basketball dreams come to life. Explore our facilities, training sessions, and see what makes our academy
//             special.
//           </p>
//         </div>
//       </section>

//       {/* Tabs Section */}
//       <section className="py-16 bg-black">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <Tabs defaultValue="gallery" className="w-full">
//             <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-900">
//               <TabsTrigger value="gallery" className="text-lg py-3">
//                 Photo Gallery
//               </TabsTrigger>
//               <TabsTrigger value="videos" className="text-lg py-3">
//                 Training Videos
//               </TabsTrigger>
//               <TabsTrigger value="facilities" className="text-lg py-3">
//                 Our Facilities
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="gallery">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {galleryImages.map((image, index) => (
//                   <div
//                     key={index}
//                     className="group relative overflow-hidden rounded-lg bg-gray-900 border border-green-900"
//                   >
//                     <div className="aspect-video relative">
//                       <Image
//                         src={image.src || "/placeholder.svg"}
//                         alt={image.alt}
//                         fill
//                         className="object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <p className="text-white text-sm">{image.caption}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="videos">
//               {activeVideo ? (
//                 <div className="mb-12">
//                   <div className="aspect-video relative bg-gray-900 rounded-lg overflow-hidden">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <p className="text-white text-lg">Video player would load here</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => setActiveVideo(null)}
//                     className="mt-4 bg-green-700 text-white px-4 py-2 rounded"
//                   >
//                     Back to videos
//                   </button>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {videos.map((video) => (
//                     <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden border border-green-900">
//                       <div
//                         className="aspect-video relative group cursor-pointer"
//                         onClick={() => setActiveVideo(video.id)}
//                       >
//                         <Image
//                           src={video.thumbnail || "/placeholder.svg"}
//                           alt={video.title}
//                           fill
//                           className="object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
//                           <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
//                             <Play size={30} className="text-white ml-1" />
//                           </div>
//                         </div>
//                         <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded">
//                           <span className="text-white text-sm">{video.duration}</span>
//                         </div>
//                       </div>
//                       <div className="p-4">
//                         <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
//                         <p className="text-gray-300">{video.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </TabsContent>

//             <TabsContent value="facilities">
//               <div className="space-y-12">
//                 {facilities.map((facility, index) => (
//                   <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
//                       <h3 className="text-2xl font-bold text-green-500 mb-4">{facility.name}</h3>
//                       <p className="text-white text-lg">{facility.description}</p>
//                     </div>
//                     <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
//                       <div className="rounded-lg overflow-hidden border border-green-900">
//                         <Image
//                           src={facility.image || "/placeholder.svg"}
//                           alt={facility.name}
//                           width={700}
//                           height={500}
//                           className="w-full h-auto"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Academy Philosophy */}
//       <section className="py-16 bg-gray-900">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-8 text-green-500">OUR ACADEMY PHILOSOPHY</h2>
//             <p className="text-white text-lg mb-8">
//               At Eastside Crusaders Academy, we believe in developing the complete player. Our approach combines
//               technical skill development, tactical understanding, physical conditioning, and mental fortitude to create
//               well-rounded basketball players who excel both on and off the court.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
//               <div className="bg-black p-6 rounded-lg border-t-4 border-green-600">
//                 <h3 className="text-xl font-bold mb-4 text-white">Learn</h3>
//                 <p className="text-gray-300">
//                   Master fundamental skills and advanced techniques through structured, progressive training methods.
//                 </p>
//               </div>
//               <div className="bg-black p-6 rounded-lg border-t-4 border-red-600">
//                 <h3 className="text-xl font-bold mb-4 text-white">Apply</h3>
//                 <p className="text-gray-300">
//                   Put skills into practice through game situations, scrimmages, and competitive play.
//                 </p>
//               </div>
//               <div className="bg-black p-6 rounded-lg border-t-4 border-green-600">
//                 <h3 className="text-xl font-bold mb-4 text-white">Grow</h3>
//                 <p className="text-gray-300">
//                   Develop character, leadership, and teamwork skills that extend beyond basketball.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
