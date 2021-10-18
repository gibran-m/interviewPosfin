import express from "express"
import db from "./config/database.js"
import barangRoutes from "./routes/index.js"
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('databse connected');
} catch (error) {
    console.log('error conection : ',  error);
    
}

app.use(cors());
app.use(express.json());
app.use('/barang',barangRoutes);

app.listen(5000, () => console.log("server running at port 5000"));