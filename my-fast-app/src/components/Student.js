import React, { useState, useEffect } from "react";

export const Student = () => {
    const initialValues = { username: "", password: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        setIsSubmit(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])


    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required"
        }
        if (!values.password) {
            errors.password = "Password is required"
        }
        return errors
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="username">username</label>
                    <input type={"text"} name="username" placeholder="Username" value={formValues.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="username">password</label>
                    <input type={"password"} name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
