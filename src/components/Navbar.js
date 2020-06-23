import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Checkbox } from "./Checkbox";

export const Navbar = () => {
    const [filter, setFilter] = useState({ style: [], volume: [] });

    const handleChange = (e) => {
        const item = e.target.name;
        const type = e.target.value;
        if (filter[type].indexOf(e.target.name) === -1)
            setFilter((prevState) => ({
                ...prevState,
                [type]: [...filter[type], item],
            }));
        else if (filter[type].indexOf(e.target.name) > -1) {
            const filtered = filter[type].filter(
                (filt) => filt[type] !== e.target.name
            );
            setFilter({ ...filter, filtered });
        }
    };

    console.log(filter);
    return (
        <div>
            <DropdownButton title="Style">
                <Dropdown.Item>
                    <Form.Check
                        type="checkbox"
                        name="Option"
                        label="Option"
                        value="style"
                        checked={filter.style.includes("Option")}
                        onChange={handleChange}
                    />
                </Dropdown.Item>
                <Dropdown.Item>
                    <Form.Check
                        type="checkbox"
                        name="Options"
                        label="Options"
                        value="style"
                        checked={filter.style.includes("Options")}
                        onChange={handleChange}
                    />
                </Dropdown.Item>
                <Dropdown.Item>
                    <Form.Check
                        type="checkbox"
                        name="Optionss"
                        label="Optionss"
                        value="style"
                        checked={filter.style.includes("Optionss")}
                        onChange={handleChange}
                    />
                </Dropdown.Item>
            </DropdownButton>
        </div>
    );
};
