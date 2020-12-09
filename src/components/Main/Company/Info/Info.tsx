import React from "react";
import c from "./Info.module.css";
import useLocale from "../../../../Hooks/useLocale";

type PropsType = {
    lang: string
}

type LocaleType = {
    title: string
    text: Array<string>
}

const Info: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "О компании",
            text: [
                "PAYSUNION - мировой надежный поставщик платежных решений. Переводите деньги онлайн самым передовым и безопасным способом.",
                "Мы здесь для тех, кто никогда не прекращает двигаться вперед. Которые продолжают искать новые идеи и лучший опыт во всем, что они делают. Потому что современный гиперсвязанный мир заслуживает такого же прогрессивного финансового партнера. Тот, который адаптируется к вашим потребностям, дает вам контроль и постоянно толкает вас в новые захватывающие пространства.",
                "Глобальные расходы и переводы с межбанковским курсом. Независимо от того, занимаетесь ли вы бизнесом или бегаете за хлебом, PAYSUNION создает глобальную финансовую службу, соответствующую вашему образу жизни.",
            ],
        },
        {
            lang: "en",
            title: "About company",
            text: [
                "PAYSUNION is a trusted global provider of payment solutions. Transfer money online in the most advanced and secure way",
                "We are here for those who never stop moving forward. Who keep looking for new ideas and better experiences in everything they do. Because today's hyper-connected world deserves the same progressive financial partner. One that adapts to your needs, gives you control and constantly pushes you into exciting new spaces.",
                "Global expenses and transfers with an interbank rate. No matter whether you are a business or run for bread, PAYSUNION creates a global financial service that corresponds to your about Braz life.",
            ],
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <section className={c.info}>
            <div className="container">
                <h2 className={c.info__title + " subtitle"}>
                    {setLocale.title}
                </h2>
                <div className={c.info__content}>
                    {setLocale.text.map((t, index) => {
                        return <div className={c.info__text} key={index}>{t}</div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Info;