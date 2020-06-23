import React from "react";
import Form from "react-bootstrap/Form";

export const Checkbox = ({ name, checked = false, onChange }) => {
    return (
        <Form.Check
            type="checkbox"
            name={name}
            label={name}
            checked={checked}
            onChange={onChange}
        />
    );
};
