import express  from "express";
import { 
    getAllBarang,
    createBarang,
    getBarangById,
    updateBarang,
    deleteBarang
    } from "../controllers/barang.js";
const router = express.Router();

router.get('/',getAllBarang);
router.get('/:id',getBarangById);
router.post('/',createBarang);
router.patch('/:id',updateBarang);
router.delete('/:id',deleteBarang);




export default router;