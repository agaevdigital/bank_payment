import React from "react";
import About from "../../About/About";
import img from "./../../../assets/img/about/payment.jpg";
import Pay from "./Pay/Pay";
import Plus from "./Plus/Plus";

type PropsType = {
    lang: string
}

const Payment: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    return(
        <>
            <About img={img} color="white" lang={lang}/>
            <Pay lang={lang} />
            <Plus lang={lang} />
        </>
    );
}

export default Payment;