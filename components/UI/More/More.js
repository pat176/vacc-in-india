import styles from "./More.module.css"

function More(props) {
  return (
    <div className={styles.cont + (props.lang === "Hin" ? " hindi" : "")}>
      <div className={styles.head}>{props.lang === "Hin" ? "टीका लगवाने की क्या जरूरत है?" : "What is the need to get vaccinated?"}</div>
      <div className={styles.items}>
        {props.lang==="Hin" ? (
          <>
            <div>1. आपको COVID-19 के खिलाफ गंभीर जोखिम नहीं होगा</div>
            <div>2. अगर आप ग्रामीण क्षेत्र से हैं तो आप अपने टीकाकरण को अपने क्षेत्र की उन्नति की ओर एक कदम मान सकते हैं</div>
            <div>3. इस अवांछित स्थिति से लड़ने के लिए आप पूरे देश की मदद करेंगे</div>
          </>
          ) : (
          <>
            <div>1. You will not be at severe risk against COVID-19</div>
            <div>2. If you are from Rural Region, You can count it as a step to transition to Urban</div>
            <div>3. You will help the whole nation to fight this unwanted situation</div>
          </>)
        }
      </div>
      <h1>{props.lang === "Hin" ? 
        (<>हम में से कई लोगों ने इस वायरस के कारण अपने प्रियजनों को खो दिया है। <br/>इसलिए हम आपसे जल्द से जल्द टीकाकरण कराने का अनुरोध करते हैं। ये बिलकुल मुफ्त में कराया जा सकता है। <br/>"बदलाव की ओर एक कदम बढ़ाए, आज ही अपना टीकाकरण कराये"</>)
        : ("Many of us have lost their loved ones due to this virus. So we request you to get vaccinated as soon as possible. It doesn't cost anything! And remember \"Change starts with you\"")
      }
      </h1>
      <a href="https://www.cowin.gov.in/">{
        props.lang === "Hin" ? "बुक करें"
          : "Book A Slot"
      }</a>
    </div>
  )
}
export default More