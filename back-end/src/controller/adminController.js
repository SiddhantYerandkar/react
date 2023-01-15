const AdminModel = require('../models/adminModel')

const Register = async function (req, res) {
    try {
        let data = req.body

        let { username, password } = data

        if (Object.keys(req.body).length === 0) return res.send({ status: false, message: "Body should not be empty" })

        if (!username) return res.send({ status: false, message: "Username required" })

        if (!password) return res.send({ status: false, message: "password required" })

        let createData = await AdminModel.create(data)

        return res.send({ status: true, message: "Data Created", data: createData })

    } catch (error) {
        res.send({ status: false, message: error.message })
    }
}

const examForm = async function (req, res) {
    try {
        let data = req.body

        const { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10 } = data


    } catch (error) {
        return res.send({ status: false, message: error.message })
    }
}


module.exports.Register = Register()