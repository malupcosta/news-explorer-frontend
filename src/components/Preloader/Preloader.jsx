import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader" aria-label="Carregando resultados">
      <div className="preloader__circle" />
      <p className="preloader__text">Procurando notícias...</p>
    </section>
  );
}

export default Preloader;
