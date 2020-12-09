import React from "react";
import About from "../../About/About";
import img from "./../../../assets/img/about/company.jpg";
import Info from "./Info/Info";
import Actividad from "./Actividad/Actividad";
import Contact from "./Contact/Contact";
import Feedback from "./Feedback/Feedback";

type PropsType = {
    lang: string
}

const Company: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    return(
        <>
            <About img={img} color="white" lang={lang} />
            <Info lang={lang} />
            <Actividad lang={lang} />
            <Contact lang={lang} />
            <Feedback lang={lang} />
        </>
    );
}

export default Company;