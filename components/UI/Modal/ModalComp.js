import styles from "./Modal.module.css"
import Modal from "react-modal"

export default function ModalComp(props) {
  return (
      <Modal isOpen={props.open} style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: "50px",
          textAlign: "center",
          fontWeight: "bold",
          zIndex: "1001010100110101010"
        }
      }}>
        <audio src="/audio/speechmax-3172183341.mp3" autoPlay></audio>
        <div>
          क्या आप चाहते हैं की ये वेबसाइट आपको सुनाई जाये?
        </div>
        <div>

          <button style={{

            width: "50px",
            height: "50px",
            border: "0px",
            borderRadius: "50px",
            backgroundColor: "green",
            margin: "20px",
            color: "white"
          }} onClick={() => props.closeModal(true)}>हाँ</button>
          <button style={{

            width: "50px",
            height: "50px",
            border: "0px",
            borderRadius: "50px",
            backgroundColor: "red",
            margin: "20px",
            color: "white"
          }} onClick={() => props.closeModal(false)}>नहीं</button>
        </div>
      </Modal>
  )
}