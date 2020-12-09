import React from "react";
import c from "./Potential.module.css";
import img from "./../../../../assets/img/potential/img.jpg";
import useLocale from "../../../../Hooks/useLocale";
import Button from "../../../common/Button/Button";

type PropsType = {
    lang: string
}

type LocaleType = {
    lang: string
    title: string
    subtitle: string
    text: string
    button: string
}

const Potential: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "Твои возможности",
            subtitle: "Современные финансовые решения в одном клике",
            text: "Совершайте переводы и принимайте платежи из 170 стран мира. Легко. Надежно. Динамично.",
            button: "Начать",
        },
        {
            lang: "en",
            title: "Your possibilities",
            subtitle: "Modern financial solutions in one click",
            text: "Make transfers and accept payments from 170 countries. Easily. Reliable. Dynamically.",
            button: "To begin",
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <section className={c.potential}>
            <div className="container">
                <h2 className={c.potential__title + " subtitle"}>
                    {setLocale.title}
                </h2>
                <div className={c.potential__content}>
                    <div className={c.potential__left}>
                        <img src={img} alt="" className={c.potential__img} />
                    </div>
                    <div className={c.potential__right}>
                        <div className={c.potential__subtitle + " title"}>
                            {setLocale.subtitle}
                        </div>
                        <div className={c.potential__text}>
                            {setLocale.text}
                        </div>
                        <Button type="orange" className={c.potential__button}>
                            {setLocale.button}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Potential;