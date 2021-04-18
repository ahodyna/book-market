import { Router } from 'express';
import authService from '../controller/authService.js';

const router = Router();

router.use((req, res, next) => {
    console.log('req.cookies', req.cookies)
    const cookieToken = req.cookies['Authentication']

    console.log('extracting cookie token', cookieToken)

    if (cookieToken) {
        req.user = authService.authorizeAdmin(cookieToken)
    }
    next()
})

export default router