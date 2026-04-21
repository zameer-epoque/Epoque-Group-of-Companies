// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async redirects() {
//     return [
//       {
//         source: "/:path*",
//         has: [
//           {
//             type: "host",
//             value: "www.epoquegroup.in",
//           },
//         ],
//         destination: "https://epoquegroup.in/:path*",
//         permanent: true,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async redirects() {
//     return [
//       // 1️⃣ Force www → non-www
//       {
//         source: "/:path*",
//         has: [
//           {
//             type: "host",
//             value: "www.epoquegroup.in",
//           },
//         ],
//         destination: "https://epoquegroup.in/:path*",
//         permanent: true,
//       },
//       // 2️⃣ Force HTTP → HTTPS
//       {
//         source: "/:path*",
//         has: [
//           {
//             type: "header",
//             key: "x-forwarded-proto",
//             value: "http",
//           },
//         ],
//         destination: "https://epoquegroup.in/:path*",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.epoquegroup.in",
          },
        ],
        destination: "https://epoquegroup.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;