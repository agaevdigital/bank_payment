import React from "react";
import c from "./Plus.module.css";
import useLocale from "../../../../Hooks/useLocale";
import icon from "./../../../../assets/img/actividad/icon.png";

type PropsType = {
    lang: string
}

type LocaleType = {
    lang: string
    title: string
    boxes: Array<{
        name: string
        text: string
    }>
}

const Plus: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "Преимущества",
            boxes: [
                {
                    name: "Подключение от 2 дней",
                    text: "Готовые модули CMS и SDK для мобильных приложений, функциональное API",
                },
                {
                    name: "Быстрый перевод денег",
                    text: "Выручку отправляем в любой банк на следующий рабочий день. Внутри PAYSUNION - каждый день.",
                },
                {
                    name: "Поддержка 24/7",
                    text: "Отвечаем по телефону или в чате",
                },
                {
                    name: "Удобный личный кабинет",
                    text: "С аналитикой продаж и управлением платежами",
                },
                {
                    name: "Персональный аккаунт менеджер",
                    text: "",
                },
                {
                    name: "Постоянный рост и развитие функциональности",
                    text: "",
                },
            ],
        },
        {
            lang: "en",
            title: "Benefits",
            boxes: [
                {
                    name: "Connection from 2 days",
                    text: "Ready CMS and SDK modules for mobile applications, functional API",
                },
                {
                    name: "Fast money transfer",
                    text: "We send the proceeds to any bank on the next business day. Inside PAYSUNION - every day.",
                },
                {
                    name: "24/7 support",
                    text: "We answer by phone or chat",
                },
                {
                    name: "Convenient personal account",
                    text: "With sales analytics and payment management",
                },
                {
                    name: "Personal account manager",
                    text: "",
                },
                {
                    name: "Continuous growth and development of functionality",
                    text: "",
                },
            ],
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <section className={c.plus}>
            <div className="container">
                <h2 className={c.plus__title + " subtitle"}>
                    {setLocale.title}
                </h2>
                <div className={c.plus__content}>
                    {setLocale.boxes.map((box, index) => {
                        return <div className={c.plus__box} key={index}>
                            <div className={c.plus__left}><img src={icon} alt="" className={c.plus__icon}/></div>
                            <div className={c.plus__right}>
                                <div className={c.plus__name + " subtitle"}>{box.name}</div>
                                {box.text.length > 0 ? <div className={c.plus__text}>{box.text}</div> : ""}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Plus;