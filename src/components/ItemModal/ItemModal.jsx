import "./ItemModal.css";
import closeBtn from "../../assets/close-btn_white.png";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          className="modal__close modal__close_type_clothes"
          onClick={onClose}
          type="button"
        >
          <img src={closeBtn} alt="close" className="modal__close-btn" />
        </button>
        <img src={card.link} alt={card.name} className="modal_image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
