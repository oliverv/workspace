/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Oliverv Technologies',
    description: 'The official store for Oliverv supported workspaces.',
    icon: '',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://oliverv.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
