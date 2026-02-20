/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;