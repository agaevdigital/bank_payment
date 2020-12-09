import React from "react";
import c from "./Contact.module.css";
import img from "./../../../../assets/img/contact/img.jpg";
import useLocale from "../../../../Hooks/useLocale";

type PropsType = {
    lang: string
}

type LocaleType = {
    lang: string
    title: string
    text: Array<string>
}

const Contact: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "Компания создана в соответствии с законодательством Чешской Республики",
            text: [
                "Регистрационный Номер: 27378527",
                "Название компании: Money Change s.r.o.",
                "Юридический адрес: Na hutích 581/1, Praha, 160 00, Чехия",
            ],
        },
        {
            lang: "en",
            title: "THE COMPANY IS ESTABLISHED IN ACCORDANCE WITH THE LEGISLATION OF THE CZECH REPUBLIC",
            text: [
                "Registration Number: 27378527",
                "Company name: Money Change s.r.o.",
                "Legal Address: Na hutich 581 / 1, Praha , 160 00, Czech Republic",
            ],
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <section className={c.contact}>
            <div className="container">
                <div className={c.contact__content}>
                    <div className={c.contact__left}>
                        <img src={img} alt="" className={c.contact__img} />
                    </div>
                    <div className={c.contact__right}>
                        <h2 className={c.contact__title + " title"}>
                            {setLocale.title}
                        </h2>
                        <div className={c.contact__block}>
                            {setLocale.text.map((t) => {
                                <div className={c.conatct__text}>{t}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;