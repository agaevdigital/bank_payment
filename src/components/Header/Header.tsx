import React, {useEffect, useState} from "react";
import c from './Header.module.css';
import Nav from "./Nav/Nav";
import Langs from "./Langs/Langs";
import Button from "../common/Button/Button";
import logo from "./../../assets/img/header/logo.png";
import useLocale from "../../Hooks/useLocale";

type PropsType = {
    lang: string
    setLang: (lang: string) => void
};

const Header: React.FC<PropsType> = (props) => {
    const [stateNav, setStateNav] = useState(false);
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            entry : "Вход",
            register: "Регистрация",
        },
        {
            lang: "en",
            entry : "Entrance",
            register: "Check in",
        }
    ];

    let setLocale = useLocale(lang, locale) || locale[0];

    return(
        <header className={c.header} id="header">
            <div className="container">
                <div className={c.header__top}>
                    <Langs {...props}/>
                </div>
                <div className={c.header__line}></div>
                <div className={c.header__bottom}>
                    <div className={c.header__left}>
                        <a href="/" className={c["header__logo-link"]}>
                            <img src={logo} alt="" className={c.header__logo} />
                        </a>
                    </div>
                    <div className={stateNav? `${c.header__right} ${c.header__right_active}` : c.header__right}>
                        <Nav lang={lang} />
                        <div className={c.header__buttons}>
                            <Button type="transparent" className={`${c.header__button} ${c["header__button-auth"]}`}>
                                {setLocale.entry}
                            </Button>
                            <Button type="orange" className={`${c.header__button} ${c["header__button-register"]}`}>
                                {setLocale.register}
                            </Button>
                        </div>
                    </div>
                    <div className={stateNav? `${c.burger} ${c.burger_active}` : c.burger} onClick={() => setStateNav(!stateNav)}>
                        <span className={c.burger__line}></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;