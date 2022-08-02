/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['norwegianrain.com','img01.ztat.net', 'slimages.macysassets.com'],
},
}



module.exports = nextConfig
