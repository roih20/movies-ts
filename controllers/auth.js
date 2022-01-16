import Accounts from "../models/accounts.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const registerUser = async (req, res) => {

    const {firstName, lastName, email, password} = req.body

    try {
        const oldEmail = await Accounts.findOne({email})

        if(oldEmail) return res.status(400).json({error: 'The email already exits'})

        const hashPassword = await bcrypt.hash(password, 12)

        const userCreated = await Accounts.create({email, password: hashPassword, name: `${firstName} ${lastName}`})

        res.status(201).json({
            message: 'User created succesfully',
            user: userCreated
        })

    } catch (error) {
        res.status(500).json({error})
    }

}


export const loginUser = async (req, res) => {

    const {email, password} = req.body

    try {
        const oldUser = await Accounts.findOne({email})

        if(!oldUser) return res.status(404).json({error: 'This users does not exist'})

        const comparePassword = await bcrypt.compare(password, oldUser.password)

        if(!comparePassword) return res.status(400).json({error: 'No valid data'})

        const token = jwt.sign({email: oldUser.email, id: oldUser._id}, process.env.SECRET_WORD);

        res.status(201).json({
            result: {
                name: oldUser.name,
                email: oldUser.email
            },
            token
        })

    } catch (error) {
        res.status(500).json({error})
    }

}