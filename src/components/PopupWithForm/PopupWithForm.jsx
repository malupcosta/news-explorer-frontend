import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  title,
  name,
  buttonText,
  children,
  onClose,
  captionText,
  linkText,
  onLinkClick,
}) {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
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

        <form className="popup__form" name={name} onSubmit={handleSubmit}>
          {children}

          <button className="popup__submit-button" type="submit">
            {buttonText}
          </button>

          <p className="popup__caption">
            {captionText}{" "}
            <button
              className="popup__link-button"
              type="button"
              onClick={onLinkClick}
            >
              {linkText}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
