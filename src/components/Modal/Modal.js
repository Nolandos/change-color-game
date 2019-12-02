import React from 'react';
import './Modal.scss';

const Modal = ({ children }) => {
    return (
        <div className="modal">
            { children }
        </div>
    );
};

export default Modal; 