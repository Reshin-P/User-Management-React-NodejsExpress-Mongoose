import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.JWT_SECRET);

const generateToken=(id)=>{
    console.log("fddfdfd");
    return jwt.sign({id},"secret",{
        expiresIn:'1d',
    })
}
export default generateToken