import React, {useState} from "react";
import c from "./Nav.module.css";
import img from "./../../../assets/img/header/img.png";
import useLocale from "../../../Hooks/useLocale";
import {NavLink} from "react-router-dom";
import { withRouter } from "react-router";


type PropsType = any;

type LocaleType = {
    lang: string
    products: string
    tariffs: string
    about: string
    transfer: string
    pay: string
}

const Nav: React.FC<PropsType> = (props) => {

    const [stateWindow, setStateWindow] = useState(false);
    const lang = props.lang;
    const url = props.location.pathname;

    const locale = [
        {
            lang: "ru",
            products: "Продукты",
            tariffs: "Тарифы",
            about: "О компании",
            transfer: "Банковские переводы",
            pay: "Интернет эквайринг",
        },
        {
            lang: "en",
            products: "Products",
            tariffs: "Tariffs",
            about: "About company",
            transfer: "Bank transfers",
            pay: "Internet acquiring",
        }
    ];

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <nav className={c.header__nav}>
            <li className={c.header__elem}>
                <div className={url === "/" || url === "/payment"?`${c.header__link} ${c.header__link_active} ${c.header__link_block}` : `${c.header__link} ${c.header__link_block}`}
                     onClick={() => setStateWindow(!stateWindow)}>
                    {setLocale.products}
                    <div className={stateWindow? `${c.header__window} ${c.header__window_active}` : c.header__window}>
                        <div className={c["header__window-left"]}>
                            <NavLink className={url === "/"? `${c.header__sublink} ${c.header__link_active}` : c.header__sublink}
                                     to="/">{setLocale.transfer}</NavLink>
                            <NavLink className={url === "/payment"? `${c.header__sublink} ${c.header__link_active}` : c.header__sublink}
                                     to="/payment">{setLocale.pay}</NavLink>
                        </div>
                        <div className={c["header__window-right"]}>
                            <img src={img} alt="" className={c.header__img} />
                        </div>
                    </div>
                </div>
            </li>
            <li className={c.header__elem}>
                <NavLink className={url === "/tariff"? `${c.header__link} ${c.header__link_active}` : c.header__link} to="/tariff">{setLocale.tariffs}</NavLink>
            </li>
            <li className={c.header__elem}>
                <NavLink className={url === "/about"? `${c.header__link} ${c.header__link_active}` : c.header__link}  to="/about">{setLocale.about}</NavLink>
            </li>
        </nav>
    );
}

export default withRouter(Nav);