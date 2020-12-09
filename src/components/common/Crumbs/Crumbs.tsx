import React from "react";
import c from "./Crumbs.module.css";

type PropsType = {
    className: string
    crumbsNames: Array<string>
}

const Crumbs: React.FC<PropsType> = (props) => {
    const { className, crumbsNames } = props;

    return(
        <div className={c.crumbs + className}>
            {crumbsNames.map((crumb, index) => {
                if(index <= crumbsNames.length) {
                    return <>
                          <span className={c.crumb} key={index}>{crumb}</span>
                          <span className={c["crumb-separator"]}>/</span>
                        </>
                }else {
                    return <span className={`${c.crumb} ${c.crumb_active}`} key={index}>{crumb}</span>
                }
            })}
        </div>
    );
}

export default Crumbs;