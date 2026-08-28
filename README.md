# 💰 DT Money

Aplicação web de controle financeiro desenvolvida com **React**, criada durante meus estudos na trilha **Ignite da Rocketseat** e mantida no portfólio como parte da minha evolução no desenvolvimento Front-end e Full Stack.

O projeto permite registrar **entradas e saídas financeiras**, acompanhar as transações realizadas e visualizar um resumo do saldo de forma simples e intuitiva.

> 🔄 Este é um projeto que estou revisitando e evoluindo como parte do meu portfólio. A versão atual representa meus estudos com React e gerenciamento de estado, enquanto as próximas etapas terão foco em TypeScript, integração com backend real, banco de dados e novas funcionalidades.

---

## 🌐 Demonstração

🚀 **Aplicação online:**

https://dt-money-ignite-02-6oe5ekdx1-lfbond.vercel.app/

---

## 📸 Preview

> Adicionar aqui futuramente uma captura de tela ou GIF da aplicação.

```md
![Preview do DT Money](./src/assets/preview.png)
```

---

## 💻 Sobre o projeto

O **DT Money** é uma aplicação de gerenciamento financeiro que permite cadastrar e acompanhar transações.

O projeto foi desenvolvido originalmente durante meus estudos de **ReactJS na Rocketseat** e posteriormente passou a fazer parte do meu portfólio pessoal.

Além de preservar o projeto como registro da minha evolução, decidi revisitá-lo para aplicar conhecimentos adquiridos posteriormente e transformá-lo gradualmente em uma aplicação Full Stack mais completa.

A ideia é demonstrar não apenas minha capacidade de criar novos projetos, mas também de:

* analisar código desenvolvido anteriormente;
* identificar oportunidades de melhoria;
* refatorar aplicações existentes;
* evoluir arquitetura e organização de código;
* documentar decisões técnicas;
* trabalhar incrementalmente sobre uma base existente.

---

## ✨ Funcionalidades atuais

A aplicação permite:

* 💰 cadastrar novas transações;
* 🟢 registrar valores de entrada;
* 🔴 registrar valores de saída;
* 📋 visualizar o histórico de transações;
* 📊 acompanhar o total de entradas;
* 📉 acompanhar o total de saídas;
* 💵 visualizar o saldo disponível;
* 🏷️ categorizar transações;
* 📅 visualizar informações relacionadas às movimentações financeiras;
* 📱 utilizar a aplicação através de uma interface web.

---

## 🛠️ Tecnologias

A versão atual foi construída utilizando tecnologias e conceitos do ecossistema React, incluindo:

* ReactJS
* JavaScript
* Styled Components
* Context API
* React Hooks
* MirageJS
* HTML5
* CSS-in-JS
* Git
* GitHub
* Vercel

---

## 🧠 Conceitos praticados

Durante o desenvolvimento deste projeto foram trabalhados conceitos como:

### React

* componentização;
* propriedades;
* estado;
* Hooks;
* renderização;
* reutilização de componentes.

### Gerenciamento de estado

Uso da **Context API** para compartilhar informações das transações entre diferentes partes da aplicação.

### Comunicação entre componentes

Organização da aplicação para permitir que diferentes componentes compartilhem e atualizem os dados financeiros.

### Imutabilidade

Atualização dos dados da aplicação respeitando os princípios de imutabilidade utilizados no ecossistema React.

### Estilização

Construção da interface utilizando **Styled Components**, permitindo trabalhar estilos diretamente através de componentes.

### Simulação de API

A versão atual utiliza **MirageJS** para simular uma API durante o desenvolvimento.

Isso permitiu trabalhar conceitos de comunicação assíncrona antes da implementação de um backend real.

---

# 🏗️ Arquitetura atual

De forma simplificada, a aplicação funciona atualmente assim:

```text
Interface React
      ↓
Components
      ↓
Context API
      ↓
MirageJS
      ↓
Dados simulados
```

Essa arquitetura foi importante durante meus estudos de React para compreender comunicação entre componentes, estado global e consumo de dados.

---

# 🔄 Evolução do projeto

Este projeto representa uma etapa anterior da minha jornada como desenvolvedor.

Em vez de simplesmente arquivá-lo, decidi revisitá-lo e utilizá-lo para aplicar conhecimentos adquiridos posteriormente.

## Versão original

Principais conceitos:

```text
React
Styled Components
Context API
Hooks
MirageJS
```

## Objetivo da refatoração

Transformar gradualmente o projeto em uma aplicação financeira Full Stack.

Arquitetura planejada:

```text
React + TypeScript
        ↓
     REST API
        ↓
 Node.js + Express
        ↓
      Prisma
        ↓
   PostgreSQL
```

---

# 🚀 Roadmap — DT Money 2.0

## Etapa 1 — Front-end

* [ ] Migrar o projeto para TypeScript
* [ ] Revisar a estrutura de componentes
* [ ] Melhorar responsividade
* [ ] Criar estados de loading
* [ ] Criar tratamento visual de erros
* [ ] Implementar busca de transações
* [ ] Implementar filtros
* [ ] Implementar ordenação
* [ ] Melhorar acessibilidade
* [ ] Melhorar experiência em dispositivos móveis

---

## Etapa 2 — Dashboard

* [ ] Criar gráficos financeiros
* [ ] Exibir evolução mensal de receitas
* [ ] Exibir evolução mensal de despesas
* [ ] Criar resumo por categoria
* [ ] Criar filtros por período
* [ ] Criar indicadores financeiros

Exemplo:

```text
Entradas
R$ 8.400

Saídas
R$ 3.200

Saldo
R$ 5.200
```

---

## Etapa 3 — Backend

Substituir o MirageJS por uma API REST real.

Tecnologias planejadas:

```text
Node.js
Express
TypeScript
Prisma
PostgreSQL
```

Endpoints inicialmente planejados:

```http
GET /transactions

GET /transactions/:id

POST /transactions

PUT /transactions/:id

DELETE /transactions/:id

GET /transactions/summary
```

---

## Etapa 4 — Banco de dados

Persistir as transações utilizando PostgreSQL.

Estrutura inicial planejada:

```text
User
 └── Transactions
       ├── id
       ├── title
       ├── amount
       ├── type
       ├── category
       └── createdAt
```

---

## Etapa 5 — Autenticação

* [ ] Cadastro de usuário
* [ ] Login
* [ ] Autenticação com JWT
* [ ] Rotas protegidas
* [ ] Transações associadas ao usuário
* [ ] Logout

Endpoints planejados:

```http
POST /users

POST /sessions
```

---

## Etapa 6 — Qualidade

* [ ] Validação de formulários
* [ ] Tratamento centralizado de erros
* [ ] Testes unitários
* [ ] Testes de componentes
* [ ] Padronização de código
* [ ] ESLint
* [ ] Prettier
* [ ] Documentação da API

---

# 📚 Objetivos de aprendizado

Com a evolução deste projeto pretendo aprofundar conhecimentos em:

* React
* TypeScript
* React Hooks
* gerenciamento de estado
* componentização
* consumo de APIs
* Node.js
* Express
* APIs REST
* PostgreSQL
* Prisma
* autenticação
* JWT
* validação
* testes
* Git Flow
* boas práticas de desenvolvimento.

---

# 📁 Estrutura

A estrutura pode variar conforme a evolução do projeto, mas a organização da versão atual segue a separação entre componentes, contextos, páginas/estrutura principal, estilos e serviços necessários à aplicação.

Durante a refatoração, essa estrutura também será revisada para melhorar a separação de responsabilidades.

---

# ⚙️ Como executar

## Pré-requisitos

Antes de começar, tenha instalado:

* Node.js
* npm ou Yarn
* Git

---

## Clone o projeto

```bash
git clone https://github.com/lfbond/dtmoney-rocketseat-reactjs.git
```

Entre no diretório:

```bash
cd dtmoney-rocketseat-reactjs
```

---

## Instale as dependências

Com npm:

```bash
npm install
```

Ou Yarn:

```bash
yarn
```

---

## Execute a aplicação

Com npm:

```bash
npm start
```

Ou:

```bash
yarn start
```

A aplicação será iniciada em ambiente de desenvolvimento.

---

# 🌐 Deploy

O projeto está publicado na **Vercel**.

🔗 Aplicação:

https://dt-money-ignite-02-6oe5ekdx1-lfbond.vercel.app/

---

# 📈 Por que estou refatorando este projeto?

Uma parte importante da evolução como desenvolvedor não está apenas em construir novos projetos.

Também está em conseguir olhar para um código desenvolvido anteriormente e identificar:

> O que eu faria diferente hoje?

Por isso decidi manter este projeto no portfólio e documentar sua evolução.

A ideia é utilizar cada melhoria para aprofundar conhecimentos técnicos e registrar minha evolução através de:

```text
Issue
 ↓
Branch
 ↓
Implementação
 ↓
Commit
 ↓
Pull Request
 ↓
Documentação
 ↓
Deploy
```

---

# 📝 Histórico de evolução

### Versão inicial

Projeto desenvolvido durante meus estudos de React na trilha Ignite da Rocketseat.

### Refatoração 2026

Projeto selecionado para uma nova etapa de estudos com foco em:

* TypeScript;
* arquitetura;
* APIs REST;
* Node.js;
* banco de dados;
* autenticação;
* testes;
* boas práticas.

As alterações serão implementadas gradualmente e documentadas através do histórico do GitHub.

---

# 🎓 Origem do projeto

O projeto foi desenvolvido originalmente durante meus estudos na trilha **Ignite ReactJS da Rocketseat**.

A implementação e as futuras refatorações fazem parte do meu processo pessoal de aprendizado e construção de portfólio.

---

# 👨‍💻 Autor

**Luís Felipe Bond**

Desenvolvedor Front-end / Full Stack JavaScript Jr.

Principais tecnologias em estudo e desenvolvimento:

`JavaScript` • `TypeScript` • `React` • `Node.js`

GitHub:

https://github.com/lfbond

---

⭐ Se este projeto foi útil ou você gostou da evolução dele, considere deixar uma estrela no repositório.

🚀 **Projeto em evolução contínua.**
