function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <img
        className="about__image"
        src="/src/assets/hero.png"
        alt="Autora do projeto"
      />

      <div className="about__content">
        <h2 className="about__title" id="about-title">
          Sobre o autor
        </h2>

        <p className="about__text">
          Esse bloco descreve o autor do projeto. Aqui você deve indicar seu
          nome, o que você faz e quais tecnologias de desenvolvimento você
          conhece.
        </p>

        <p className="about__text">
          Você também pode falar sobre sua experiência com o Practicum, o que
          aprendeu lá e como pode ajudar clientes em potencial.
        </p>
      </div>
    </section>
  );
}

export default About;
