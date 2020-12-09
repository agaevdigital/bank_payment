import React from "react";
import c from "./Pay.module.css";
import useLocale from "../../../../Hooks/useLocale";
import img from "./../../../../assets/img/pay/img.jpg";
import Crumbs from "../../../common/Crumbs/Crumbs";

type PropsType = {
    lang: string
}

type LocaleType = {
    lang: string
    title: string
    text: Array<string>
    subtitle: string
    describe: string
    bottom: string
    crumbs: Array<string>
}

const Pay: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "Интернет эквайринг",
            text: [
                "Комплекс технологически продвинутых услуг по приему платежей в Интернете, нацеленных на оптимальное решение различных бизнес-потребностей поставщиков платежных услуг.",
                "Наше модульное решение настраивается и адаптируется под нужды каждого клиента и предоставляется через масштабируемый API, в который каждый месяц добавляются новые функции, которые увеличивают возможности Ваших приложений.",
            ],
            subtitle: "Гибкое и модульное решение для эквайринга",
            describe: "PAYSUNION обеспечит высокую эффективность Ваших платежных процессов.",
            bottom: "Мы понимаем, насколько важна быстрая интеграция и высокая доступность сервиса в e-commerce. Поэтому PAYSUNION предлагает быструю процедуру регистрации и заключения договора на обслуживание мерчанта, и готовые технологические решения по приему платежных карт для быстрой интеграции мерчантов. Тем самым мы обеспечим высокую эффективность платежных процессов для Вашего бизнеса.",
            crumbs: [
                "Продукты",
                "Интернет эквайринг",
            ],
        },
        {
            lang: "en",
            title: "Internet acquiring",
            text: [
                "A set of technologically advanced services for accepting payments on the Internet, aimed at the optimal solution to the various business needs of payment service providers.",
                "Our modular solution is customizable and adaptable to the needs of each client and is delivered through a scalable API that adds new features every month to enhance the capabilities of your applications.",
            ],
            subtitle: "Flexible and modular acquiring solution",
            describe: "PAYSUNION will ensure high efficiency of your payment processes.",
            bottom: "We understand how important fast integration and high service availability in e-commerce are. Therefore, PAYSUNION offers a quick registration procedure and conclusion of a service agreement for a merchant, and ready-made technological solutions for accepting payment cards for quick integration of merchants. Thus, we will ensure high efficiency of payment processes for your business.",
            crumbs: [
                "Products",
                "Internet acquiring",
            ],
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <section className={c.pay}>
            <div className="container">
                <Crumbs className={c.pay__crumbs} crumbsNames={setLocale.crumbs} />
                <h2 className={c.pay__title + " subtitle"}>
                    {setLocale.title}
                </h2>
                <div className={c.pay__block}>
                    {setLocale.text.map((t) => <div className={c.pay__text}>{t}</div>)}
                </div>
                <div className={c.pay__middle}>
                    <div className={c.pay__left}>
                        <img src={img} alt="" className={c.pay__img} />
                    </div>
                    <div className={c.pay__right}>
                        <h2 className={c.pay__subtitle + " title"}>
                            {setLocale.subtitle}
                        </h2>
                        <div className={c.pay__describe}>
                            {setLocale.describe}
                        </div>
                    </div>
                </div>
                <div className={c.pay__bottom}>
                    {setLocale.bottom}
                </div>
            </div>
        </section>
    );
}

export default Pay;