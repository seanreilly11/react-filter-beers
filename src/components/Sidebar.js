import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const Sidebar = () => {
    const [filter, setFilter] = useState({ style: [], volume: [] });

    const onCheckboxChecked = (e) => {
        let styles = [...filter.style];
        let volumes = [...filter.volume];
        let updatedStyles, updatedVolumes;

        if (e.target.name === "style") {
            if (filter.style.includes(e.target.value)) {
                // remove item if skills array contains this value
                updatedStyles = styles.filter(
                    (style) => style !== e.target.value
                );
            } else {
                // add item if skills array does not contain this value
                updatedStyles = [...styles, e.target.value];
            }
            setFilter({
                ...filter,
                style: updatedStyles,
            });
        } else if (e.target.name === "volume") {
            if (filter.volume.includes(e.target.value)) {
                // remove item if skills array contains this value
                updatedVolumes = volumes.filter(
                    (volume) => volume !== e.target.value
                );
            } else {
                // add item if skills array does not contain this value
                updatedVolumes = [...volumes, e.target.value];
            }
            setFilter({
                ...filter,
                volume: updatedVolumes,
            });
        }
    };

    console.log(filter);
    return (
        <div className="sidebar">
            <h6 className="product-count">
                <span>10</span> Products
            </h6>
            <div className="filter-group">
                <h4>Style</h4>
                <Form.Check
                    type="checkbox"
                    name="style"
                    label="Option"
                    value="Option"
                    checked={
                        filter.style ? filter.style.includes("Option") : false
                    }
                    onChange={onCheckboxChecked}
                />

                <Form.Check
                    type="checkbox"
                    name="style"
                    label="Options"
                    value="Options"
                    checked={
                        filter.style ? filter.style.includes("Options") : false
                    }
                    onChange={onCheckboxChecked}
                />

                <Form.Check
                    type="checkbox"
                    name="style"
                    label="Optionss"
                    value="Optionss"
                    checked={
                        filter.style ? filter.style.includes("Optionss") : false
                    }
                    onChange={onCheckboxChecked}
                />
            </div>
            <div className="filter-group">
                <h4>Volume</h4>
                <Form.Check
                    type="checkbox"
                    name="volume"
                    label="Option"
                    value="Option"
                    checked={
                        filter.volume ? filter.volume.includes("Option") : false
                    }
                    onChange={onCheckboxChecked}
                />

                <Form.Check
                    type="checkbox"
                    name="volume"
                    label="Options"
                    value="Options"
                    checked={
                        filter.volume
                            ? filter.volume.includes("Options")
                            : false
                    }
                    onChange={onCheckboxChecked}
                />

                <Form.Check
                    type="checkbox"
                    name="volume"
                    label="Optionss"
                    value="Optionss"
                    checked={
                        filter.volume
                            ? filter.volume.includes("Optionss")
                            : false
                    }
                    onChange={onCheckboxChecked}
                />
            </div>
        </div>
    );
};
