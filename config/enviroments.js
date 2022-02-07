const TYPE_ENV = process.env.NODE_ENV;
if (TYPE_ENV === undefined || TYPE_ENV != "production") {
    require("dotenv").config();
}

module.exports.env = {
    SERVER_PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
};