import React from "react";
import c from "./Footer.module.css";
import logo from "./../../assets/img/footer/logo.png";
import Button from "../common/Button/Button";
import useLocale from "../../Hooks/useLocale";
import {NavLink} from "react-router-dom";


type PropsType = {
    lang: string
}

type LocaleType = {
    text: string
    name: string
    transferLink: string
    payLink: string
    entry: string
    register: string
    subscribe: string
}

const Footer: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            text: "Надежный поставщик платежных решений для различных компаний по всему Миру.",
            name: "Продукты",
            transferLink: "Банковские переводы",
            payLink: "Интернет эквайринг",
            entry: "Вход",
            register: "Регистрация",
            subscribe: "© Все права защищены.",
        },
        {
            lang: "en",
            text: "Reliable provider of payment solutions for various companies around the World.",
            name: "Products",
            transferLink: "Bank transfers",
            payLink: "Internet acquiring",
            entry: "Entrance",
            register: "Check in",
            subscribe: "© All rights reserved.",
        }
    ];

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <footer className={c.footer} id="footer">
            <div className="container">
                <div className={c.footer__top}>
                    <NavLink to="/" className={c["footer__logo-link"]}>
                        <img src={logo} alt="logotype" className={c["footer__logo-img"]} />
                    </NavLink>
                </div>
                <div className={c.footer__middle}>
                    <div className={c.footer__left}>
                        <div className={c.footer__text}>
                            {setLocale.text}
                        </div>
                    </div>
                    <div className={c.footer__right}>
                        <div className={c.footer__name}>
                            {setLocale.name}
                        </div>
                        <ul className={c.footer__list}>
                            <li className={c.footer__elem}>
                                <NavLink to="/" className={c.footer__link}>{setLocale.transferLink}</NavLink>
                            </li>
                            <li className={c.footer__elem}>
                                <NavLink to="/payment" className={c.footer__link}>{setLocale.payLink}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={c.footer__buttons}>
                    <Button type="transparent" className={`${c.footer__button} ${c.footer__button_auth}`} >
                        {setLocale.entry}
                    </Button>
                    <Button type="orange" className={`${c.footer__button} ${c.footer__button_registr}`} >
                        {setLocale.register}
                    </Button>
                </div>
                <div className={c.footer__subscribe}>
                    {setLocale.subscribe}
                </div>
            </div>
        </footer>
    );
}

export default Footer;