module.exports = {
  port: parseInt(process.env.PORT) || 3000,
  connection: process.env.DATABASE_URL || 'postgres://localhost:5432/white'
};
