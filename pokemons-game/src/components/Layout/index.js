import React from 'react';
import s from './style.module.css';
import cn from 'classnames';





const Layout = ({title, colorBg , urlBg, children}) => {

    const styleRoot = 
    {
        backgroundImage : urlBg ? `url(${urlBg})` : 'none',
        backgroundColor : colorBg ? `${colorBg}` : 'transparent'
    }        

    return (
        <section className={s.root} style={styleRoot} >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={cn(s.desc, s.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
