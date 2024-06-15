import css from "./Description.module.css";

const Description = () => { 
    return (
        <div className={css.header}>
            <h1 className={css.headerH1}>Sip Happens Café</h1>
            <p className={css.headerP}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    
    )
}

export default Description;