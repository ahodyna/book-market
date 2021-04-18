import {Router} from 'express';
import authService from '../controller/authService.js';

const router = Router();

router.post('/login', (req, res) => {
    const loginData = req.body
    console.log('loginData: ', loginData)
    const user = authService.loginAdmin(loginData.login, loginData.password)

    if(user) {
        return res.status(200).json({token: user.token})
    }else{
        return res.status(400).json({message: 'error'})
    }
})

export default router