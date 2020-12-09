import React from "react";
import c from "./Products.module.css";
import Button from "../../../common/Button/Button";
import useLocale from "../../../../Hooks/useLocale";

type PropsType = {
    lang: string
}

type LocaleType = {
    lang: string
    title: string
    boxes: Array<{
        subtitle: string
        describe: string
        text: string
        button: string
    }>
}

const Products: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "Продукты Paysunion",
            boxes: [
                {
                    subtitle: "Международные переводы",
                    describe: "Моментальные переводы без открытия счета",
                    text: "Совершайте международные перводы удобным для Вас способом: по реквизитам, по номеру карты, мгновенные переводы внутри системы.",
                    button: "Начать",
                },
                {
                    subtitle: "мультивалютный IBAN",
                    describe: "Открытие европейского банковского счета для физических и юридических лиц",
                    text: "Обменивайте валюты по выгодному курсу, совершайте оплаты и принимайте платежи на индивидуальный европейский счет с помощью SWIFT, SEPA и внутренних переводов",
                    button: "Открыть счет",
                },
                {
                    subtitle: "дебЕтовая карта Visa",
                    describe: "Получи европейскую VISA для себя или своего бизнеса",
                    text: "Расширь свои платежные возможности с нашей мультивалютной дебетовой картой. Путешествуй, оплачивай покупки, рассчитывайся с иностранными партнерами",
                    button: "Начать",
                },
                {
                    subtitle: "Прием он-лайн платежей",
                    describe: "Прием платежей с помощью QR-кода или ссылки",
                    text: "Современное решение для моментального пополнения вашего счета. Принимай донаты, вознаграждения, оплату за товар или услуги из 170 стран мира.",
                    button: "Начать",
                },
            ],
        },
        {
            lang: "en",
            title: "Paysunion Products",
            boxes: [
                {
                    subtitle: "International transfers",
                    describe: "Instant transfers without opening an account",
                    text: "Make international transfers in the most convenient way for you: by bank details, by card number, instant transfers within the system.",
                    button: "To begin",
                },
                {
                    subtitle: "Multicurrency IBAN",
                    describe: "Opening a European bank account for individuals",
                    text: "Exchange currencies at a favorable rate, make payments and accept payments to an individual European account using SWIFT, SEPA and internal transfers.",
                    button: "Open an account",
                },
                {
                    subtitle: "VISA debit card",
                    describe: "Get a European VISA for yourself or your business",
                    text: "Expand your payment options with our multi-currency debit card. Travel, pay for purchases, settle accounts with foreign partners",
                    button: "To begin",
                },
                {
                    subtitle: "Accepting online payments",
                    describe: "Accept payments using a QR code or link",
                    text: "A modern solution for instant replenishment of your account. Accept donations, rewards, payments for goods or services from 170 countries.",
                    button: "To begin",
                },
            ],
        }
    ];

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <section className={c.products}>
            <div className="container">
                <h2 className={c.products__title + " subtitle"}>
                    {setLocale.title}
                </h2>
                <div className={c.products__content}>
                    {setLocale.boxes.map((box, index) => {
                        return <div className={index === 0? `${c.products__box} ${c.products__box_first}` :
                                                index === setLocale.boxes.length - 1? `${c.products__box} ${c.products__box_last}`:
                                                c.products__box} key={index}>
                            <div className={c.products__numb}>{"0" + (index + 1)}</div>
                            <div className={c.products__subtitle}>{box.subtitle}</div>
                            <div className={c.products__describe}>{box.describe}</div>
                            <div className={c.products__text}>{box.text}</div>
                            <Button type="orange" className={index === 2? `${c.products__button} ${c.products__button_irregular}` : c.products__button} >
                                {box.button}
                            </Button>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Products;