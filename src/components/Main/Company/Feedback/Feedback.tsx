import React from "react";
import c from "./Feedback.module.css";
import icon from "./../../../../assets/img/feedback/icon.svg";
import useLocale from "../../../../Hooks/useLocale";
import Button from "../../../common/Button/Button";

type PropsType = {
    lang: string
}

type LocaleType = {
    lang: string
    title: string
    button: string
    placeholder: string
}

type BlocksType = Array<Array<{
    text: string
    link: string
}>>


const Feedback: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "Мы будем рады сотрудничеству или ответить на любые ваши вопросы, просто свяжитесь с нами.",
            button: "Отправить",
            placeholder: "Ваш E-mail",
        },
        {
            lang: "en",
            title: "We will be glad to cooperate or answer any questions you may have, just contact us",
            button: "Send message",
            placeholder: "Your email",
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    let blocks: BlocksType = [
        [
            {
                text: "PAYSUNION Payment Account Terms and Conditions",
                link: "",
            },
            {
                text: "PAYSUNION Website Terms of Use",
                link: "",
            },
            {
                text: "PAYSUNION Complaint Handling Policy",
                link: "",
            },
        ],
        [
            {
                text: "PAYSUNION Privacy Notice",
                link: "",
            },
            {
                text: "PAYSUNION Cookies Notice",
                link: "",
            },
        ],
    ];

    return(
        <section className={c.feedback}>
            <div className="container">
                <div className={c.feedback__title}>
                    {setLocale.title}
                </div>
                <form action="" className={c.feedback__form}>
                    <input type="text" className={c.feedback__input} name="email" placeholder={setLocale.placeholder}/>
                    <Button type="none" className={c.feedback__button}>
                        {setLocale.button}
                    </Button>
                </form>
                <div className={c.feedback__bottom}>
                    {blocks.map((block, index) => {
                        return <div className={c.feedback__block} key={index}>
                            <img src={icon} alt="" className={c.feedback__icon}/>
                            <ul className={c.feedback__list}>
                                {block.map((elem) => {
                                    return (
                                        <li className={c.feedback__elem}>
                                            <a href={elem.link} className={c.feedback__link}>
                                                {elem.text}
                                            </a>
                                        </li>);
                                })}
                            </ul>
                        </div>

                    })}
                </div>
            </div>
        </section>
    );
}

export default Feedback;