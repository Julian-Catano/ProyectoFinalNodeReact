import { Router } from "express";
import { createReceta, consultReceta, consultRecetaById, updateReceta, deleteReceta} from "../controllers/receta";
const router = Router();


router.post('/create-receta', createReceta);
router.get('/consult-receta', consultReceta);
router.get('/consult-receta-id/:id', consultRecetaById);
router.put('/update-receta', updateReceta);
router.delete('/delete-receta/:id', deleteReceta);
router.get('*', (req, res)=>{
    res.status(404).json({error: 'Page not found'})
})

export default router;