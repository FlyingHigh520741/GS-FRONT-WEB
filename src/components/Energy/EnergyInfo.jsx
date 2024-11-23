import { Container, Row, Col } from 'react-bootstrap';
import solarMobile from '/src/img/solar_mobile.png';
import solarLarge from '/src/img/solar_large.png';
import windMobile from '/src/img/wind_mobile.png';
import windLarge from '/src/img/wind_large.png';
import hydroMobile from '/src/img/hydro_mobile.png';
import hydroLarge from '/src/img/hydro_large.png';

function EnergyInfo() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Fontes de Energia e Suas Contribuições</h2>
          <section>
            <article gap={3} className="mt-4 mb-4">
              <h3>Energia Solar</h3>
              <p>A energia solar é uma fonte renovável obtida a partir da luz do sol. No nosso projeto, utilizamos painéis solares para alimentar datacenters, contribuindo para a redução da emissão de gases poluentes e garantindo um fornecimento de energia sustentável.</p>
              <picture>
                <source media="(max-width: 768px)" srcSet={solarMobile} />
                <source media="(min-width: 769px)" srcSet={solarLarge} />
                <img
                  className="d-block w-100"
                  src={solarLarge}
                  alt="Energia Solar"
                />
              </picture>
            </article>
            <article gap={3} className="mb-4">
              <h3>Energia Eólica</h3>
              <p>A energia eólica é gerada através do vento, utilizando turbinas para converter a energia cinética em eletricidade. É uma alternativa limpa e eficiente, ideal para regiões com alta incidência de ventos.</p>
              <picture>
                <source media="(max-width: 768px)" srcSet={windMobile} />
                <source media="(min-width: 769px)" srcSet={windLarge} />
                <img
                  className="d-block w-100"
                  src={windLarge}
                  alt="Energia Eólica"
                />
              </picture>
            </article>
            <article gap={3} className="mb-4">
              <h3>Energia Hidrelétrica</h3>
              <p>A energia hidrelétrica é produzida pelo movimento da água em barragens e rios. No contexto de nosso projeto, destacamos a importância dessa fonte para garantir um mix energético sustentável e diversificado.</p>
              <picture>
                <source media="(max-width: 768px)" srcSet={hydroMobile} />
                <source media="(min-width: 769px)" srcSet={hydroLarge} />
                <img
                  className="d-block w-100"
                  src={hydroLarge}
                  alt="Energia Hidrelétrica"
                />
              </picture>
            </article>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default EnergyInfo;
