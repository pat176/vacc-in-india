import styles from "./Header.module.css"

function Header(props) {
  console.log(props.lang)
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <span style={{ color: "#072F5F" }}>V</span>acc.
        <span style={{ color: "#072F5F" }}>I</span>n.
        <span style={{ color: "#072F5F" }}>I</span>ndia
      </div>
      <div className={styles.right + (props.lang === "Hin" ? " hindi" : "")}>
        <button className={styles.switch + (props.lang === "Eng" ? " hindi " + styles.hindi : "")} onClick={() => {
          if (props.lang === "Eng") {
            props.setLang("Hin")
          } else { props.setLang("Eng") }
          console.log(props.lang)
        }}>
          {props.lang === "Eng" ? "हिंदी में देखें" : "See In English"}

        </button>
        <a href="https://www.cowin.gov.in/" target={"_blank"}>{
          props.lang === "Hin" ? "बुक करें"
          : "Book A Slot"
        }</a>
        <a href="#" onClick={()=>props.scrollToMore()}>{
          props.lang === "Hin" ? "और जानें" : "Learn More"
        }</a>
      </div>
    </div >
  )
}

export default Header
