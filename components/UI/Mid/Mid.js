import Image from "next/image"
import Doctor from "../../../public/—Pngtree—doctor wearing a mask_5404596.png"

import styles from "./Mid.module.css"
import down from "../../../public/untitled3.png"

function Mid(props) {
  return (
    <div className={styles.cont + (props.lang === "Hin" ? " hindi" : "")}>
      <div className={styles.left}>
        <div>
          {props.lang === "Eng" ? "Fight The Deadly Virus With Vaccination." : "टीका लगवाएं और खुदको इस जानलेवा वायरस से बचाएं"}

        </div>
        <div className={styles.scndCont}>

          <a href="https://www.cowin.gov.in/" target={"_blank"} rel="noreferrer">{
            props.lang === "Hin" ? "बुक करें"
              : "Book A Slot"
          }</a>
          <button className={styles.knowMore} onClick={() => props.scrollToMore()}>{
            props.lang === "Hin" ? "और जानें "
              : "Know More "
          }
            <Image src={down} width={(190.43 / 7)} height={(87.23 / 7)}></Image>
          </button>
        </div>
      </div>
      <Image src={Doctor} width="600px" height="600px" />
    </div>
  )
}
export default Mid