import React from "react";
import c from "./Button.module.css";

type PropsType = {
    type: string
    children: string
    className: string
};

const Button: React.FC<PropsType> = (props) => {
    const { type, children, className } = props;

    let typeClass = "btn ";
    if(type === "orange") {
        typeClass += "btn_orange";
    }else {
        if(type !== "none") {
            typeClass += "btn_transparent";
        }
        //if empty then no additional class
    }

    return(
        <button className={`${className} ${typeClass}`}>
            {children}
        </button>
    );
}

export default Button;