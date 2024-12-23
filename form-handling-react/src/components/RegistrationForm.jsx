import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.username) newErrors.username = "Username is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (!username)
        if (!email)
        if (!password)
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form Submitted", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
            "value={username}", "value={email}", "value={password}"
           
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
