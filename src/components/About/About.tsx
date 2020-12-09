import React from "react";
import c from "./About.module.css";
import Button from "../common/Button/Button";
import useLocale from "../../Hooks/useLocale";

type PropsType = {
    img: string
    color: string
    lang: string
};

type LocaleType = {
    lang: string
    pretitle: string
    title: string
    subtitle: string
    buttons: string
}

const About: React.FC<PropsType> = (props) => {
    const { img, color, lang } = props;
    const locale = [
        {
            lang: "ru",
            pretitle: "Платежный сервис",
            title: "Надежный поставщик платежных решений для различных компаний по всему Миру",
            subtitle: "Переводите деньги онлайн, самым современным и безопасным способом.",
            button: "Подробнее",
        },
        {
            lang: "en",
            pretitle: "Payment service",
            title: "Reliable provider of payment solutions for various companies around the world",
            subtitle: "Transfer money online in the most modern and secure way.",
            button: "More details",
        }
    ];

    const setLocale = useLocale(lang, locale);

    return(
        <section className={color === "white"? `${c.about} ${c.about_white}` : c.about}>
            <img src={img} alt="" className={c.about__img}/>
            <div className="container container_relative">
                <h2 className={c.about__pretitle}>
                    {setLocale.pretitle}
                </h2>
                <h1 className={c.about__title + " title"}>
                    {setLocale.title}
                </h1>
                <div className={c.about__subtitle}>
                    {setLocale.subtitle}
                </div>
                <Button type="orange" className={c.about__button}>
                    {setLocale.button}
                </Button>
            </div>
        </section>
    );
}

export default About;