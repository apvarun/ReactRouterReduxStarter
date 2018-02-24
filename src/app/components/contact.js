import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    return (
        <div>
            <h1>Contact me?</h1>
            <p>Go to <Link to='/'>Home</Link></p>
        </div>
    );
}
export default Contact;