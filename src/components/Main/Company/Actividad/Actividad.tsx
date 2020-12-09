import React from "react";
import useLocale from "../../../../Hooks/useLocale";

type PropsType = {
    lang: string
}

type LocaleType = {
    lang: string
    subtitle: string
    elems: Array<string>
}

const Actividad: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            subtitle: "Деятельность",
            elems: [
                "Международные банковские переводы SWIFT и SEPA;",
                "Эквайринг банковских карт VISA и MASTERCARD;",
                "Обработка платежей для платежных систем и банков;",
                "Выпуск банковских карт VISA и MASTERCARD;",
                "Банкоматы и POS-терминалы для приема фиатных денег;",
            ],
        },
        {
            lang: "en",
            subtitle: "Activities",
            elems: [
                "International bank transfers SWIFT and SEPA;",
                "Acquiring bank cards VISA and MASTERCARD;",
                "Payment processing for payment systems and banks;",
                "Issuance of VISA and MASTERCARD bank cards;",
                "ATMs and POS- terminals for accepting fiat money;",
            ],
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <section className="actividad none">
            <div className="container">
                <h2 className="actividad__title subtitle">
                    {setLocale.subtitle}
                </h2>
                <ul className="actividad__list">
                    {setLocale.elems.map((e) => {
                        <li className="actividad__elem">{e}</li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Actividad;