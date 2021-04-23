import {Router} from "express"; 
import {getAllSeguimientos, getSeguimiento,addSeguimiento, deleteSeguimiento} from '../controllers/seguimiento.controller'

const router = Router();

router.get('/all',getAllSeguimientos);
router.get('/:id',getSeguimiento);
router.post('/add',addSeguimiento);
router.delete('/:id',deleteSeguimiento);


export default router;