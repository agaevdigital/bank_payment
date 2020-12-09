import React from "react";
import Products from "./Products/Products";
import Potential from "./Potential/Potential";
import Application from "./Application/Application";
import About from "../../About/About";
import img from "../../../assets/img/about/product.jpg";

type PropsType = {
    lang: string
}

const Product: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    return(
        <>
            <About img={img} lang={lang} color={""} />
            <Products lang={lang}/>
            <Potential lang={lang}/>
            <Application lang={lang}/>
        </>
    );
}

export default Product;