import { Toast } from 'react-bootstrap'
import success from "./success.png"

const Alert = ({ show, toastText, handleToast }) => {
  return (
    <Toast className="toast-container" show={show} onClose={() => handleToast(false)} delay={3000} autohide style={{ position: 'fixed', bottom: "40%", right: "40%", left: "39%", color: "rgba(255, 255, 255, 0.747)" }}>
      <Toast.Header className="float-right" style={{ backgroundColor: "transparent", border: "none" }}>     
      </Toast.Header>
      <Toast.Body className="mt-4 mb-3 text-center">
        <img src={success} className="mx-auto d-block mb-2" style={{opacity: 0.7}}/>
        <h5>SUCCESS !</h5>
        {/* <p style={{ fontSize: 15}}>{toastText}</p> */}
      </Toast.Body>
    </Toast>
  )
}

export default Alert