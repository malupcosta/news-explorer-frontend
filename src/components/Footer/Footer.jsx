function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2026 Supersite, desenvolvido pelo News API
      </p>

      <nav className="footer__nav" aria-label="Links do rodapé">
        <a className="footer__link" href="/">
          Início
        </a>

        <a
          className="footer__link"
          href="https://tripleten.com"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
