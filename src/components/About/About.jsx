import authorImage from "../../images/author.jpg";
import "./About.css";

function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <img className="about__image" src={authorImage} alt="Autora do projeto" />

      <div className="about__content">
        <h2 className="about__title" id="about-title">
          Sobre a autora
        </h2>

        <p className="about__text">
          Meu nome é Maria Luisa e estou estudando desenvolvimento web
          full-stack na TripleTen. Durante a formação, desenvolvi projetos
          usando HTML, CSS, JavaScript, React, Node.js, Express e MongoDB.
        </p>

        <p className="about__text">
          Este projeto foi criado para praticar a construção de uma aplicação
          React conectada a uma API externa, com rotas, componentes
          reutilizáveis, busca de notícias, estados de carregamento e layout
          responsivo.
        </p>
      </div>
    </section>
  );
}

export default About;
