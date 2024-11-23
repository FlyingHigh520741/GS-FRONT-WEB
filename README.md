# DWB Energy - Monitoramento de Energia Verde

## Descrição do Projeto

**DWB Energy** é um projeto desenvolvido para enfrentar os desafios do consumo energético elevado dos datacenters, essenciais para o crescimento das tecnologias de Inteligência Artificial, mas que trazem consigo grandes impactos ambientais e custos operacionais. Utilizando um sistema IoT inteligente, nosso projeto simula o uso de energia solar para alimentar datacenters de forma eficiente e sustentável.

A solução implementada envolve sensores ambientais, como o **DHT22**, que mede temperatura e umidade, além de um sensor **LDR** que monitora a luz solar para calcular a energia gerada. **LEDs** são utilizados para indicar diferentes estados do sistema: um LED para o carregamento da bateria, outro para sinalizar quando a bateria está carregada e um terceiro para alertar sobre altas temperaturas que comprometem a eficiência do sistema.

Os dados coletados são enviados para um broker **MQTT**, possibilitando o monitoramento em tempo real por meio de um dashboard interativo, onde é possível visualizar variáveis como temperatura, umidade, energia gerada, perda de eficiência e o nível da bateria.

## Funcionalidades

- **Monitoramento em Tempo Real**: Sensores de temperatura, umidade e luz solar medem e transmitem dados em tempo real.
- **Sistema de Alerta**: LEDs indicam quando a bateria está sendo carregada, quando está completamente carregada e quando há comprometimento na eficiência devido a altas temperaturas.
- **Dashboard Interativo**: Visualização das principais variáveis do sistema, incluindo temperatura, umidade, energia gerada e estado da bateria.
- **Integração com MQTT**: Os dados são enviados para um broker MQTT, permitindo monitoramento remoto.

## Tecnologias Utilizadas

- **React com Vite**: Utilizado para desenvolvimento da interface do usuário, garantindo uma aplicação rápida e responsiva.
- **React Bootstrap**: Facilita a criação de componentes responsivos, como carrosséis e layouts.
- **ESP32 e Simulador Wokwi**: Para simular o hardware, utilizando o ESP32 para medir variáveis ambientais e operacionais.
- **MQTT**: Protocolo de comunicação para envio e recebimento dos dados dos sensores em tempo real.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **HomePage**: Página inicial que apresenta uma visão geral do projeto, incluindo um carrossel com informações sobre as diferentes fontes de energia limpa (solar, eólica e hidrelétrica).
- **Componentes**: O projeto segue as melhores práticas de componentização do React, reutilizando componentes sempre que possível para facilitar a manutenção e expansão do código.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/FlyingHigh520741/GS-FRONT-WEB.git
   ```

2. **Navegue até a pasta do projeto**:
   ```bash
   cd GS-FRONT-WEB
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Execute o projeto**:
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação** no navegador pelo endereço fornecido (geralmente http://localhost:3000).

## Equipe

- **RM556275** - Daniel Vieira Novais
- **RM559124** - Bento Rangel
- **RM559067** - Werbeth Nunes

## Licença

Este projeto é de uso educacional e faz parte do **Global Solution da FIAP**.

## Imagens do Projeto

Imagens ilustrativas de energia solar, eólica e hidrelétrica foram utilizadas no carrossel para ilustrar as fontes de energia renováveis abordadas pelo projeto.
