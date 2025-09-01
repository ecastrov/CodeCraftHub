const getConfig = env => ({
  env,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/learning-platform',
  jwtSecret: process.env.JWT_SECRET || 'mySecretKey',
  port: process.env.PORT || 3000,
  cors: process.env.CORS || '*, https://localhost:3000',
});

module.exports = getConfig(process.env.NODE_ENV || 'development');