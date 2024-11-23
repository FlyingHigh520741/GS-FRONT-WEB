import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function EnergyDetails() {
  const { energyType } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Buscar dados do localStorage
    const storedData = JSON.parse(localStorage.getItem('energyData'));
    if (storedData) {
      const energyDetails = storedData.find(item => item.type === energyType);
      setDetails(energyDetails);
    }
  }, [energyType]);

  if (!details) {
    return <p>Carregando...</p>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Detalhes da {details.type}</h2>
          <p>Consumo: {details.consumption} kWh</p>
          <p>Armazenamento: {details.storage} kWh</p>
          <p>Nosso projeto monitora continuamente esses dados para garantir que os datacenters estejam sempre operando de maneira eficiente, minimizando o impacto ambiental e otimizando o uso da energia renovável.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default EnergyDetails;