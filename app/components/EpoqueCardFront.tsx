// "use client"

// import Image from "next/image"
// import { Heart, Search, PlusSquare, User, Home } from "lucide-react"

// export default function EpoqueCardFront() {
//   const posts = [
//     "/p1.jpg",
//     "/p2.jpg",
//     "/p3.jpg",
//     "/p4.jpg",
//     "/p5.jpg",
//     "/p6.jpg",
//   ]

//   return (
//     <div className="w-full h-full rounded-2xl p-[1.5px] 
//       bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

//       <div className="w-full h-full rounded-2xl bg-white/95 backdrop-blur-xl flex flex-col overflow-hidden">

//         {/* 🔥 Header */}
//         <div className="px-4 pt-3 pb-2">
//           <p className="text-sm text-gray-500">@epoque.digital</p>

//           <div className="flex items-center gap-3 mt-2">
//             <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
//               <div className="bg-white p-[2px] rounded-full">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
//                   E
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="font-semibold text-sm">Epoque Group</h2>
//               <p className="text-[10px] text-gray-500">
//                 Lead Generation & Growth
//               </p>
//             </div>
//           </div>

//           <p className="text-[11px] text-gray-600 mt-2 leading-snug">
//             We don’t run ads. We build conversion ecosystems 🚀
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-2 mt-2">
//             <button
//               onClick={() =>
//                 window.open(
//                   "https://www.instagram.com/epoque.digital/",
//                   "_blank"
//                 )
//               }
//               className="flex-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-1 rounded text-[11px] shadow hover:scale-105 transition hover:cursor-pointer"
//             >
//               Follow
//             </button>

//             <button className="flex-1 border py-1 rounded text-[11px] hover:bg-gray-100 transition">
//               Message
//             </button>
//           </div>
//         </div>

//         {/* 🔥 FULL HEIGHT IMAGE GRID */}
//         <div className="grid grid-cols-3 flex-1 gap-[2px] px-[2px] pb-[2px]">
//           {posts.map((src, i) => (
//             <div
//               key={i}
//               className="relative w-full h-full group overflow-hidden"
//             >
//               <Image
//                 src={src}
//                 alt="post"
//                 fill
//                 className="object-cover group-hover:scale-110 transition duration-500"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs transition">
//                 ❤️ {Math.floor(Math.random() * 200 + 50)}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 🔥 Bottom Nav */}
//         <div className="flex justify-around items-center py-2 text-gray-700 border-t">
//           <Home size={18} />
//           <Search size={18} />
//           <PlusSquare size={18} />
//           <Heart size={18} />
//           <User size={18} />
//         </div>

//       </div>
//     </div>
//   )
// }


"use client"

import Image from "next/image"
import { Heart, Search, PlusSquare, User, Home } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EpoqueCardFront() {
  const image = "/insta.jpeg" // single image
  const router = useRouter() // ✅ ADD THIS

  return (
    <div className="w-full h-full rounded-2xl p-[1.5px] 
      bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

      <div className="w-full h-full rounded-2xl bg-white/95 backdrop-blur-xl flex flex-col overflow-hidden">

        {/* 🔥 Header */}
        <div className="px-4 pt-3 pb-2">
          <p className="text-sm text-gray-500">@epoque.digital</p>

          <div className="flex items-center gap-3 mt-2">
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
              <div className="bg-white p-[2px] rounded-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  E
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-sm text-black">Epoque Group Of Companies</h2>
              <p className="text-[10px] text-gray-500">
                Lead Generation & Growth
              </p>
            </div>
          </div>

          <p className="text-[11px] text-gray-600 mt-2 leading-snug">
            We don’t run ads. We build conversion ecosystems 🚀
          </p>

          {/* Buttons */}
         
{/* Buttons */}
<div className="flex gap-2 mt-2">
  <button
    onClick={() =>
      window.open(
        "https://www.instagram.com/epoque.digital/",
        "_blank"
      )
    }
    className="flex-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-1 rounded text-[11px] shadow hover:scale-105 transition hover:cursor-pointer"
  >
    Follow
  </button>

  <button
    onClick={() => router.push("/contact")}
    className="flex-1 border py-1 rounded text-[11px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-105 transition hover:cursor-pointer"
  >
    Message
  </button>
</div>
  </div>
        {/* 🔥 SINGLE IMAGE SECTION */}
        <div className="relative flex-1 mx-[2px] mb-[2px] rounded-lg overflow-hidden group">
          <Image
            src={image}
            alt="post"
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition">
            ❤️ {Math.floor(Math.random() * 200 + 50)}
          </div>
        </div>

        {/* 🔥 Bottom Nav */}
        <div className="flex justify-around items-center py-2 text-gray-700 border-t">
          <Home size={18} />
          <Search size={18} />
          <PlusSquare size={18} />
          <Heart size={18} />
          <User size={18} />
        </div>

      </div>
    </div>
  )
}