import { Sequelize } from "sequelize";

const db = new Sequelize ('db_interview_test', 'root', '', {
    host : "localhost",
    dialect : "mysql"
});

export default db;