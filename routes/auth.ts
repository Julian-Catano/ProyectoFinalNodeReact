import { Router } from "express";
import { login } from "../controllers/auth";
import validateJWT from "../helpers/validate-jwt";
const router = Router();

router.post('/auth-users', login);
router.get('/auth-users', validateJWT)

router.get('*', (req, res)=>{
    res.status(404).json({error: 'Page not found'})
})

export default router;
