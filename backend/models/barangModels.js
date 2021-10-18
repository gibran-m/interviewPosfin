import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Barang = db.define('pinjam_barang',{
    pinjamId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
     nama_peminjam:{
         type: DataTypes.STRING
     },
     barang_dipinjam:{
         type: DataTypes.STRING
     }
},{
    freezeTableName : true,
    timestamps : false,
    createdAt : false,
    updatedAt : false
})


export default Barang;