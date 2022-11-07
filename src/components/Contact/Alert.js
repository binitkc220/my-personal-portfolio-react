import React from 'react';
import './Contact.css';

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show alert-mssg m-3 p-3`} role="alert">
            {props.alert.msg}
        </div>
    )
}
