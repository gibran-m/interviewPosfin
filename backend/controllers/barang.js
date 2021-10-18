import Barang from "../models/barangModels.js";

export const getAllBarang = async (req, res) => {
    try {
        const barang = await Barang.findAll();
        res.json(barang); 
    } catch (error) {
        res.json({ message : error.message });
    }
}

export const createBarang = async (req, res) => {
    try {
        await Barang.create(req.body);
        res.json("message : Barang ditambakan" ); 
    } catch (error) {
        res.json({ message : error.message });
    }
}

export const getBarangById = async (req, res) => {
    try {
        const barangid = await Barang.findAll({
            where : { 
                pinjamId : req.params.id
            }
        });
        res.json(barangid[0]);  
    } catch (error) {
        res.json({ message : error.message });
    }
}

export const updateBarang = async (req, res) => {
    try {
        await Barang.update(req.body,{
            where : {
                pinjamId : req.params.id
            }
        });
        res.json("message : Barang di update" ); 
    } catch (error) {
        res.json({ message : error.message });
    }
}

export const deleteBarang = async (req, res) => {
    try {
        await Barang.destroy({
            where : {
                pinjamId : req.params.id
            }
        });
        res.json("message : Barang di hapus" ); 
    } catch (error) {
        res.json({ message : error.message });
    }
}