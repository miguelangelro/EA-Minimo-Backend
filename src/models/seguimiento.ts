import { Schema, model, Document } from 'mongoose'

export interface ISeguimiento extends Document {
    nombre: string;
    fecha: string;
    telefono: number;
    dni: string;
    fiebre: string;
    tos: string;
    dificultad: string;
    malestar: string;
};

const seguimientoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    fiebre: {
        type: String,
        required: true
    },
    tos: {
        type: String,
        required: true
    },
    dificultad: {
        type: String,
        required: true
    },
    malestar: {
        type: String,
        required: true
        },
},
{
    versionKey: false,
});


export default model<ISeguimiento>('Seguimiento', seguimientoSchema);