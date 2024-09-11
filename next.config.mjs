/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["appwrite"],
    },
    images: {
      domains: ['cloud.appwrite.io'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }

export default nextConfig
