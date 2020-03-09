import React, { useState } from 'react';

export default () => {
    const [form, setState] = useState({
        name: '',
        email: ''
    });
    
    const handleSubmit = e => {
        e.preventDefault();
        if (form.name !== '' && form.email !== '')
            alert(`Thank you ${form.name}! You are signing up with email:  ${form.email}`);
        else
            alert('Please enter your name and email address to sign up for email updates.');
    };
    
    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    value={form.name}
                    name="name"
                    onChange={updateField}
                    type="text"
                    placeholder="Your name"
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    value={form.email}
                    name="email"
                    onChange={updateField}
                    type="email"
                    placeholder="Your email address"
                />
            </label>
            <br />
            <button>Submit</button>
        </form>
    );       
};
