import { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal } from 'react-bootstrap';

function EnergyMonitor() {
  const [energyData, setEnergyData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Buscar dados da API mock
    fetch('https://63a69a6f59fd83b1bb3e2f30.mockapi.io/energy')
      .then(response => response.json())
      .then(data => {
        setEnergyData(data);
        localStorage.setItem('energyData', JSON.stringify(data));
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Monitoramento de Energia</h2>
          <p>Nosso sistema de monitoramento utiliza IoT para medir o consumo energético e otimizar a eficiência dos painéis solares que alimentam datacenters. Acompanhe em tempo real as variáveis ambientais e operacionais, e veja como nossa solução ajuda a manter o consumo eficiente e sustentável.</p>
          <h4>Como o Sistema Funciona:</h4>
          <ul>
            <li>
              <strong>Sensores:</strong> O sensor DHT22 mede a temperatura e umidade, enquanto o LDR mede a luz solar e calcula a energia gerada em Watts.
            </li>
            <li>
              <strong>Controle dos LEDs:</strong> O LED GPIO25 acende durante o carregamento da bateria, e o LED GPIO26 acende quando a bateria está completamente carregada (500Ah). O LED GPIO5 emite um alerta para altas temperaturas.
            </li>
            <li>
              <strong>Dashboard:</strong> Todas as variáveis são monitoradas em tempo real e exibidas no dashboard, incluindo:
              <ul>
                <li>Temperatura e Umidade</li>
                <li>Energia Gerada (em Watts)</li>
                <li>Perda de Eficiência (%), devido ao aumento da temperatura</li>
                <li>Nível da Bateria (0Ah a 500Ah)</li>
              </ul>
            </li>
          </ul>
          <h4>Integração com MQTT:</h4>
          <p>Os dados do sistema são enviados para o broker MQTT, permitindo monitoramento remoto:</p>
          <ul>
            <li><strong>/Thinkitive/temp:</strong> Publica a temperatura ambiente.</li>
            <li><strong>/Thinkitive/bateria:</strong> Publica o nível atual da bateria.</li>
            <li><strong>/Thinkitive/perda_eficiencia:</strong> Publica a perda de eficiência devido ao aumento da temperatura.</li>
          </ul>
          <ListGroup className="mt-3">
            {energyData.map((energy) => (
              <ListGroup.Item key={energy.id}>{energy.type}: {energy.consumption} kWh</ListGroup.Item>
            ))}
          </ListGroup>
          <Button className="mt-3" variant="primary" onClick={() => setShowModal(true)}>Assistir Vídeo Educacional</Button>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Vídeo Educacional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video width="100%" height="315" controls>
            <source src="/src/videos/gs-edge.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default EnergyMonitor;