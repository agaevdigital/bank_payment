import React from "react";
import c from "./Tariff.module.css";
import useLocale from "../../../Hooks/useLocale";
import About from "../../About/About";
import img from "./../../../assets/img/about/tariff.jpg";
import Button from "../../common/Button/Button";

type PropsType = {
    lang: string
}

type LocaleType = {
    lang: string
    title: string
    button: string
    row: Array<{
        type: string
        name: string
        range: string
        price: string
        value: string
    }>
}

const Tariff: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "Тарифы",
            button: "Начать",
            row: [
                {
                    type: "персональный или корпоративный",
                    name: "Открытие аккаунта в системе PaysUnion",
                    range: "",
                    price: "0",
                    value: "€",
                },
                {
                    type: "персональный",
                    name: "Открытие IBAN",
                    range: "",
                    price: "0",
                    value: "€",
                },
                {
                    type: "корпоративный",
                    name: "Открытие IBAN",
                    range: "от",
                    price: "150",
                    value: "€",
                },
                {
                    type: "",
                    name: "Внутренние переводы в системе PaysUnion",
                    range: "от",
                    price: "0,3",
                    value: "%",
                },
                {
                    type: "",
                    name: "Внешние переводы",
                    range: "от",
                    price: "3",
                    value: "€",
                },
                {
                    type: "",
                    name: "Прием платежей",
                    range: "от",
                    price: "0,5",
                    value: "%",
                },
                {
                    type: "персональная",
                    name: "Выпуск дебетовой Visa",
                    range: "",
                    price: "0",
                    value: "€",
                },
                {
                    type: "персональная",
                    name: "Ежемесячное обслуживание дебетовой Visa",
                    range: "от",
                    price: "1",
                    value: "€",
                },
                {
                    type: "корпоративная",
                    name: "Выпуск дебетовой Visa",
                    range: "от",
                    price: "10",
                    value: "€",
                },
                {
                    type: "корпоративная",
                    name: "Ежемесячное обслуживание дебетовой Visa",
                    range: "от",
                    price: "5",
                    value: "€",
                },
            ],
        },
        {
            lang: "en",
            title: "Tariffs",
            button: "To begin",
            row: [
                {
                    type: "Personal or corporate",
                    name: "Opening an account in the PAYSUNION system",
                    range: "",
                    price: "0",
                    value: "€",
                },
                {
                    type: "Personal",
                    name: "IBAN opening",
                    range: "",
                    price: "0",
                    value: "€",
                },
                {
                    type: "Corporate",
                    name: "IBAN opening",
                    range: "from",
                    price: "150",
                    value: "€",
                },
                {
                    type: "",
                    name: "Internal transfers in the PAYSUNION system",
                    range: "from",
                    price: "0,3",
                    value: "%",
                },
                {
                    type: "",
                    name: "External transfers",
                    range: "from",
                    price: "3",
                    value: "€",
                },
                {
                    type: "",
                    name: "Acceptance of payments",
                    range: "from",
                    price: "0,5",
                    value: "%",
                },
                {
                    type: "Personal",
                    name: "Debit VIS A issue",
                    range: "",
                    price: "0",
                    value: "€",
                },
                {
                    type: "Personal",
                    name: "Debit VISA monthly maintenance",
                    range: "from",
                    price: "1",
                    value: "€",
                },
                {
                    type: "Corporate",
                    name: "Debit VISA Issue",
                    range: "from",
                    price: "10",
                    value: "€",
                },
                {
                    type: "Corporate",
                    name: "Debit VISA monthly maintenance",
                    range: "from",
                    price: "5",
                    value: "€",
                },
            ],
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return (
        <>
            <About img={img} color="white" lang={lang}/>
            <section className={c.tariff}>
                <div className="container">
                    <h2 className={c.tariff__title + " subtitle"}>
                        {setLocale.title}
                    </h2>
                    <div className={c.tariff__content}>
                        {setLocale.row.map((row, index) => {
                            return (
                                <div className={c.tariff__row} key={index}>
                                    <div className={c.tariff__left}>
                                        <div className={c.tariff__type}>
                                            {row.type}
                                        </div>
                                        <div className={c.tariff__name}>
                                            {row.name}
                                        </div>
                                    </div>
                                    <div className={c.tariff__right}>
                                        <div className={c.tariff__price}>
                                            {row.range} <span className={c.tariff__numb}>{row.price}</span> {row.value}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <Button type="orange" className={c.tariff__button}>
                            {setLocale.button}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tariff;