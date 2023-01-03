# Bem-vindo ao Cashforce Front-end.

Esta aplicação tem como objetivo consumir os dados disponibilizados pela API Cashforce Back-end e exibi-los em tela.

## O que foi desenvolvido:

Foi desenvolvida uma aplicação com Vue onde é possível acessar informações de notas fiscais de transações.

## Execução da aplicação:
Para executar a aplicação basta clonar o repositório à partir do comando `git clone`, fazer a instalação das dependências utilizando `npm install`, definidr as variáveis de ambiente, então, executar um `npm run dev` para a aplicação inicializar na sua máquina pela porta padrão.

## Tecnologias utilizadas:

- Vue.js
- Axios
- ESlint
- Components
- Props
- States

## Observações:

- Para executar a requisição corretamente a API precisa estar ativa, caso contrário, será retornado `requestFailed` para a aplicação.
- A estilização da aplicação foi feita à partir do `CSS` puro.
- A rota da requisição da API é definida no `.env` como `VITE_BASE_URL`.
