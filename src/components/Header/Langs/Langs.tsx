import React from "react";
import c from "./Langs.module.css";


type PropsType = {
    lang: string
    setLang: (lang: string) => void
};

const Langs: React.FC<PropsType> = (props) => {
    const { lang, setLang } = props;

    return(
        <div className={c.header__langs}>
            <span className={lang === 'ru'? `${c.header__lang} ${c.header__lang_active}` : c.header__lang}
                  onClick={() => setLang('ru')}>RU</span>
            <span className={c.header__separ}>|</span>
            <span className={lang === 'en'? `${c.header__lang} ${c.header__lang_active}` : c.header__lang}
                  onClick={() => setLang('en')}>EN</span>
        </div>
    );
}

export default Langs;