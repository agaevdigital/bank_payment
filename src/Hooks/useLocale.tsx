import React, {useEffect} from "react";



const useLocale= (lang: string, locale: Array<any>) => {
    let setLocale = locale.find((l) => l.lang === lang);

    useEffect(() => {
        setLocale = locale.find((l) => l.lang === lang);
    }, [lang])

    return setLocale;
}

export default useLocale;