# Consulta CEP

Bem-vindo ao projeto Consulta CEP! Esta é uma aplicação desenvolvida em React com TypeScript e TailwindCSS que permite aos usuários consultar endereços via API do ViaCEP, armazená-los localmente e listá-los de forma simples e eficiente.

## Visão Geral

O projeto Consulta de CEP foi desenvolvido para facilitar a consulta de endereços a partir de um CEP, utilizando a API pública do ViaCEP. A aplicação permite que os usuários:

- Consultem endereços digitando um CEP válido.
- Visualizem os dados retornados (logradouro, bairro, cidade e UF).
- Salvem os endereços consultados em um armazenamento local persistente.
- Visualizem a lista de endereços salvos.

## Funcionalidades

- Campo de CEP: Permite ao usuário digitar um CEP para consulta.
- Consulta ao ViaCEP: Realiza a consulta do endereço ao sair do campo ou ao clicar no botão "Consultar".
- Cache Local: Armazena os CEPs já consultados para evitar requisições desnecessárias à API.
- Salvar Endereços: Permite salvar os endereços consultados em um armazenamento local persistente.
- Listagem de Endereços: Exibe todos os endereços salvos em uma lista organizada.
- Design Responsivo: Interface adaptável a diferentes tamanhos de tela, desenvolvida com TailwindCSS.

## Tecnologias Utilizadas

- React
- TypeScript
- HTML
- TailwindCSS
- ViaCEP API

## Modo de instalação

Clone este repositório em seu terminal:

```bash
git clone https://github.com/brochjosias/loja-commerce.git
```

```bash
cd consulta-cep
```

Instale as Dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Assim que carregar, o sistema será exibido no seu navegador padrão.
