import React from "react";
import c from "./Application.module.css";
import img from "./../../../../assets/img/application/img.png";
import qr from "./../../../../assets/img/application/qr.png";
import useLocale from "../../../../Hooks/useLocale";

type PropsType = {
    lang: string
}

type LocaleType = {
    title: string
    subtitle: string
}

const Application: React.FC<PropsType> = (props) => {
    const lang = props.lang;

    const locale = [
        {
            lang: "ru",
            title: "PAYSUNION в твоем телефоне",
            subtitle: "Скачайте официальное приложение",
        },
        {
            lang: "en",
            title: "Paysunion on your phone",
            subtitle: "Download the official app",
        }
    ]

    let setLocale: LocaleType = useLocale(lang, locale) || locale[0];

    return(
        <section className={c.application}>
            <div className={c.application__container + " container"}>
                <div className={c.application__content}>
                    <div className={c.application__left}>
                        <img src={img} alt="" className={c.application__img} />
                    </div>
                    <div className={c.application__right}>
                        <h2 className={c.application__title + " title"}>
                            {setLocale.title}
                        </h2>
                        <div className={c.application__subtitle}>
                            {setLocale.subtitle}
                        </div>
                        <div className={c.application__bottom}>
                            <div className={c.application__links}>
                                <a href="#" className={c.application__link}>
                                    {/*<img src="img/application/icon1.png" alt="" className={c.application__icon} />*/}
                                </a>
                                <a href="#" className={c.application__link}>
                                    {/*<img src="img/application/icon2.png" alt="" className={c.application__icon} />*/}
                                </a>
                            </div>
                            <img src={qr} alt="" className={c.application__qr} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Application;