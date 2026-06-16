function PopupWithForm({ isOpen, title, name, buttonText, children, onClose }) {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Fechar janela"
          onClick={onClose}
        />

        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" name={name}>
          {children}

          <button className="popup__submit-button" type="submit">
            {buttonText}
          </button>

          <p className="popup__caption">
            ou{" "}
            <button className="popup__link-button" type="button">
              Inscreva-se
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
