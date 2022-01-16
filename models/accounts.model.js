import mongoose from 'mongoose'

const AccountsSchema = mongoose.Schema({
    id: String,
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    }
})

const Accounts = mongoose.model('Accounts', AccountsSchema)

export default Accounts