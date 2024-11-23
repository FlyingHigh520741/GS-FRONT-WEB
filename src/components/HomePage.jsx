import { Container, Row, Col, Carousel } from 'react-bootstrap';
import solarMobile from '/src/img/solar_mobile.png';
import solarLarge from '/src/img/solar_large.png';
import windMobile from '/src/img/wind_mobile.png';
import windLarge from '/src/img/wind_large.png';
import hydroMobile from '/src/img/hydro_mobile.png';
import hydroLarge from '/src/img/hydro_large.png';

function HomePage() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Bem-vindo ao DWB Energy</h2>
          <p>Monitore o consumo de energia e contribua para um futuro mais sustentável!</p>
          <p>
            Nosso projeto foi desenvolvido para enfrentar os desafios do consumo energético elevado dos datacenters, que são essenciais para o crescimento das tecnologias de Inteligência Artificial, mas que trazem consigo grandes impactos ambientais e custos operacionais. Utilizando um sistema IoT inteligente, conseguimos simular o uso de energia solar para alimentar datacenters de forma eficiente e sustentável.
          </p>
          <p>
            A solução implementada conta com sensores ambientais, como o DHT22, que mede a temperatura e umidade, e um sensor LDR que monitora a luz solar para calcular a energia gerada. A eficiência do sistema é acompanhada por LEDs: um LED indica quando a bateria está sendo carregada e outro quando está totalmente carregada. Além disso, um terceiro LED emite um alerta caso a temperatura ultrapasse os limites ideais, reduzindo a eficiência da geração de energia.
          </p>
          <p>
            Todos os dados são coletados e enviados para um broker MQTT, permitindo o monitoramento em tempo real através de um dashboard interativo. No dashboard, é possível visualizar variáveis como temperatura, umidade, energia gerada, perda de eficiência e o nível da bateria. Dessa forma, garantimos um acompanhamento completo para otimizar o uso da energia solar e garantir uma operação sustentável e eficiente dos datacenters.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <picture>
                <source media="(max-width: 768px)" srcSet={solarMobile} />
                <source media="(min-width: 769px)" srcSet={solarLarge} />
                <img
                  className="d-block w-100"
                  src={solarLarge}
                  alt="Energia Solar"
                />
              </picture>
              <Carousel.Caption style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
                <h3>Energia Solar</h3>
                <p>A energia solar é uma fonte renovável obtida através da luz do sol, utilizada para gerar eletricidade e calor.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <picture>
                <source media="(max-width: 768px)" srcSet={windMobile} />
                <source media="(min-width: 769px)" srcSet={windLarge} />
                <img
                  className="d-block w-100"
                  src={windLarge}
                  alt="Energia Eólica"
                />
              </picture>
              <Carousel.Caption style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
                <h3>Energia Eólica</h3>
                <p>A energia eólica aproveita a força do vento para gerar eletricidade de forma limpa e sustentável.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <picture>
                <source media="(max-width: 768px)" srcSet={hydroMobile} />
                <source media="(min-width: 769px)" srcSet={hydroLarge} />
                <img
                  className="d-block w-100"
                  src={hydroLarge}
                  alt="Energia Hidrelétrica"
                />
              </picture>
              <Carousel.Caption style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
                <h3>Energia Hidrelétrica</h3>
                <p>A energia hidrelétrica é gerada pelo fluxo da água, geralmente por meio de barragens, contribuindo significativamente para a produção de energia limpa.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
