import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  title,
  name,
  buttonText,
  children,
  onClose,
  onSubmit,
  captionText,
  linkText,
  onLinkClick,
  isValid = true,
  errorMessage = "",
}) {
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

        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children}

          {errorMessage && (
            <span className="popup__submit-error">{errorMessage}</span>
          )}

          <button
            className="popup__submit-button"
            type="submit"
            disabled={!isValid}
          >
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
