const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://jimp:asdf1234A@cluster0.jhrjo.mongodb.net/local_library?retryWrites=true&w=majority'
}

export default config
