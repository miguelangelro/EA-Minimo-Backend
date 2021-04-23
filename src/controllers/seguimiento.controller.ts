import { Request, Response } from "express";
import Seguimiento, {ISeguimiento} from "../models/seguimiento";


export const getAllSeguimientos = async (req:Request, res:Response) => {
try{
    const seguimientos = await Seguimiento.find({});
    if(seguimientos==null) return res.status(404).json({message: "Seguimientos not found."});
    else return res.status(200).json(seguimientos);
}catch(err){
    res.status(400).json({err})
}
          
}

export const getSeguimiento = async (req:Request, res:Response) => { 
   try{
   const seguimiento = await  Seguimiento.findById(req.params.id)
   if(seguimiento==null) return res.status(404).json({message: "Seguimiento not found"});
   else return res.status(200).json(seguimiento);
   }catch(err){
    res.status(400).json({err})
}
 
}

export const addSeguimiento = async (req:Request, res:Response) => {
    try{
        const {nombre, fecha, telefono,dni, fiebre, tos, dificultad, malestar} = req.body;

        const newSeguimiento: ISeguimiento = new Seguimiento ({
        nombre, 
        fecha,
        telefono,
        dni,
        fiebre,
        tos,
        dificultad,
        malestar
        });
    const savedSeguimiento = await newSeguimiento.save ();
    res.status(200).json({
        Seguimiento: savedSeguimiento
    })
    }catch(err){
        res.status(400).json({error: err})
    }
          
}


export const deleteSeguimiento = async (req:Request,res:Response) => {
    try{
    const seguimientoDeleted = await Seguimiento.findByIdAndDelete(req.params.id);
    if(seguimientoDeleted != null) return res.status(200).json({"Seguimiento eliminado": seguimientoDeleted});
    else return res.status(400).json("No existe dicho seguimiento");
    }catch(err){
        res.status(400).json({error: err})
    }
    
}

