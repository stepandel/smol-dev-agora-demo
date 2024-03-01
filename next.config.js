module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // replace 'example.com' with the actual domain where delegate images are hosted
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret', // replace 'secret' with the actual secret for accessing the remote DB
    secondSecret: process.env.SECOND_SECRET, // Can be accessed through process.env
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}