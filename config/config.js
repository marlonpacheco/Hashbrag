module.exports = {
  "development": {
<<<<<<< HEAD:config/config.json
    "username": "root",
    "password": "",
=======
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
>>>>>>> c19b7d99401ad07765edcb1ee7d82210e66fa419:config/config.js
    "database": "hashbrag",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
