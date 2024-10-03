import jwt from 'jsonwebtoken'

export const authRequired = (req, res, next)=>{
    
    //const {token} = req.cookies;
   // const {token}= req.headers['authorization'];
   const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if(!token) return res.status(401).json({ message: " No autorizado"});
    
    jwt.verify(token,'secreto123', (err, user)=> {
        if (err) return res.status(403).json({ message: "Token Invalido"});
        //console.log(user)
        //console.log(req.id)
        req.user = user
        next();
    })
};