# 💰 DT Money 2.0 — Full Stack Financial Application

Aplicação web Full Stack para gerenciamento de transações financeiras, desenvolvida com **React, TypeScript, Node.js, Express, Prisma e PostgreSQL**.

O projeto nasceu durante meus estudos na trililha **Ignite ReactJS da Rocketseat** como uma aplicação Front-end que utilizava JSON Server para simular uma API. Posteriormente, decidi revisitá-lo e transformá-lo em um projeto Full Stack completo, utilizando uma API REST própria, banco de dados PostgreSQL, ORM Prisma e deploy independente das diferentes camadas da aplicação.

Mais do que uma simples atualização visual, esta versão representa uma evolução da arquitetura original e registra uma etapa importante do meu desenvolvimento profissional como desenvolvedor **Full Stack JavaScript/TypeScript**.

---

## 🌐 Aplicação

### Front-end

Hospedado na **Vercel**.

> O endereço definitivo de produção será atualizado após a conclusão do merge da branch `refactor/fullstack-v2` para `main`.

### Back-end

API Node.js + Express hospedada no **Render**.

### Banco de dados

PostgreSQL hospedado no **Neon**.

---

# 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Objetivo da refatoração](#-objetivo-da-refatoração)
- [Evolução da arquitetura](#-evolução-da-arquitetura)
- [Arquitetura atual](#️-arquitetura-atual)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#️-tecnologias)
- [Front-end](#️-front-end)
- [Back-end](#️-back-end)
- [Banco de dados](#️-banco-de-dados)
- [API REST](#-api-rest)
- [Validação com Zod](#️-validação-com-zod)
- [Prisma ORM](#-prisma-orm)
- [Tratamento do tipo Decimal](#-tratamento-do-tipo-decimal)
- [Pesquisa de transações](#-pesquisa-de-transações)
- [Persistência](#-persistência)
- [Deploy](#-deploy)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Como executar localmente](#️-como-executar-localmente)
- [Migrations](#️-migrations)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Fluxo de uma requisição](#-fluxo-de-uma-requisição)
- [Principais desafios](#-principais-desafios-enfrentados)
- [Aprendizados](#-aprendizados)
- [Histórico de evolução](#-histórico-de-evolução)
- [Próximas possibilidades](#-próximas-possibilidades)
- [Autor](#-autor)

---

# 💻 Sobre o projeto

O **DT Money** é uma aplicação de controle financeiro que permite registrar entradas e saídas e acompanhar o saldo resultante dessas movimentações.

A interface apresenta um resumo financeiro contendo:

- total de entradas;
- total de saídas;
- saldo atual;
- histórico das transações;
- descrição;
- categoria;
- valor;
- tipo da movimentação;
- data de criação.

A aplicação também permite pesquisar transações por descrição ou categoria.

Na versão 2.0, os dados deixaram de ser armazenados em uma API simulada e passaram a percorrer uma arquitetura Full Stack real:

```text
React
  ↓
Axios
  ↓
REST API
  ↓
Node.js + Express
  ↓
Zod
  ↓
Prisma ORM
  ↓
PostgreSQL
```

---

# 🎯 Objetivo da refatoração

O projeto original cumpriu seu objetivo durante os estudos de React, mas utilizava **JSON Server** para simular a persistência.

Em vez de abandonar o projeto depois do curso, decidi utilizá-lo como base para estudar e implementar uma evolução arquitetural.

O objetivo passou a ser transformar:

```text
React
   ↓
JSON Server
   ↓
server.json
```

em:

```text
React + TypeScript
        ↓
       Axios
        ↓
     REST API
        ↓
Node.js + Express + TypeScript
        ↓
       Zod
        ↓
      Prisma
        ↓
   PostgreSQL
```

Essa evolução permitiu trabalhar não apenas conceitos de Front-end, mas também:

- desenvolvimento de APIs;
- arquitetura cliente-servidor;
- métodos HTTP;
- códigos de status HTTP;
- validação de dados;
- ORM;
- modelagem de banco;
- migrations;
- PostgreSQL;
- variáveis de ambiente;
- integração Front-end/Back-end;
- deploy Full Stack;
- persistência em produção.

---

# 🔄 Evolução da arquitetura

## Versão original

A versão inicial utilizava:

```text
React
TypeScript
Styled Components
Context API
Axios
JSON Server
server.json
```

O fluxo era:

```text
Interface
   ↓
React
   ↓
Context
   ↓
Axios
   ↓
JSON Server
   ↓
server.json
```

O JSON Server era útil para os estudos de Front-end, porém não representava uma API de produção real.

---

## DT Money 2.0

A nova versão substituiu essa camada por:

```text
Interface
   ↓
React + TypeScript
   ↓
Context
   ↓
Axios
   ↓
HTTP
   ↓
Node.js + Express
   ↓
Zod
   ↓
Prisma
   ↓
PostgreSQL
```

Com isso, o Front-end deixou de conhecer qualquer mecanismo de persistência diretamente.

Ele apenas conversa com uma API.

A API é responsável pela validação e regras relacionadas aos dados.

O Prisma realiza a comunicação entre aplicação e banco.

O PostgreSQL realiza a persistência definitiva.

---

# 🏗️ Arquitetura atual

A arquitetura de produção está distribuída em três ambientes:

```text
┌─────────────────────────────────────┐
│              FRONT-END              │
│                                     │
│       React + TypeScript + Vite     │
│                                     │
│              Vercel                 │
└─────────────────┬───────────────────┘
                  │
                  │ HTTP / Axios
                  ▼
┌─────────────────────────────────────┐
│               API                   │
│                                     │
│    Node.js + Express + TypeScript   │
│                                     │
│              Render                 │
└─────────────────┬───────────────────┘
                  │
                  │ Prisma ORM
                  ▼
┌─────────────────────────────────────┐
│             DATABASE                │
│                                     │
│            PostgreSQL               │
│                                     │
│               Neon                  │
└─────────────────────────────────────┘
```

Essa separação permite que cada camada tenha uma responsabilidade bem definida.

---

# ✨ Funcionalidades

## Implementadas

- [x] Cadastro de transações
- [x] Registro de entradas
- [x] Registro de saídas
- [x] Listagem das transações
- [x] Resumo financeiro
- [x] Cálculo total de entradas
- [x] Cálculo total de saídas
- [x] Cálculo do saldo
- [x] Categorias de transação
- [x] Pesquisa por descrição
- [x] Pesquisa por categoria
- [x] API REST própria
- [x] Validação de dados
- [x] Persistência PostgreSQL
- [x] Integração com Prisma ORM
- [x] Busca de transação por ID
- [x] Atualização de transação pela API
- [x] Exclusão de transação pela API
- [x] Ordenação das transações por data
- [x] Persistência após recarregamento da aplicação
- [x] Banco PostgreSQL em produção
- [x] Back-end publicado
- [x] Front-end conectado à API de produção

---

# 🛠️ Tecnologias

## Front-end

- React 18
- TypeScript
- Vite
- Axios
- React Hook Form
- Zod
- Styled Components
- Radix UI
- Context API
- use-context-selector
- Phosphor React

## Back-end

- Node.js
- Express
- TypeScript
- Zod
- Prisma ORM
- PostgreSQL Driver (`pg`)
- Prisma PostgreSQL Adapter
- CORS
- TSX

## Banco de dados

- PostgreSQL
- Prisma Migrations

## Infraestrutura e deploy

- Git
- GitHub
- Vercel
- Render
- Neon

---

# 🖥️ Front-end

O Front-end é responsável pela experiência do usuário e pela apresentação dos dados.

A aplicação utiliza React com TypeScript e Vite.

A comunicação com a API é centralizada utilizando Axios.

Exemplo conceitual:

```ts
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3333',
})
```

Isso permite utilizar dois ambientes:

```text
Desenvolvimento
↓
http://localhost:3333
```

e:

```text
Produção
↓
VITE_API_URL
```

Assim, não é necessário alterar manualmente o código ao realizar o deploy.

---

# 🖥️ Back-end

A API foi desenvolvida com:

```text
Node.js
Express
TypeScript
Zod
Prisma
PostgreSQL
```

O servidor é responsável por:

- receber requisições HTTP;
- interpretar parâmetros;
- interpretar query strings;
- interpretar request bodies;
- validar os dados;
- executar operações no banco;
- tratar erros;
- devolver respostas HTTP;
- serializar os dados antes de enviá-los ao Front-end.

O servidor utiliza:

```ts
const PORT = Number(process.env.PORT) || 3333
```

Isso permite utilizar a porta `3333` durante o desenvolvimento e a porta definida automaticamente pelo ambiente de hospedagem em produção.

---

# 🗄️ Banco de dados

A aplicação utiliza PostgreSQL.

Durante o desenvolvimento foi utilizado um banco PostgreSQL local.

Em produção, o banco está hospedado no **Neon**.

A conexão é fornecida através da variável:

```env
DATABASE_URL=
```

Credenciais reais nunca devem ser armazenadas no Git.

---

# 🧬 Modelagem dos dados

O modelo atual é:

```prisma
model Transaction {
  id          Int             @id @default(autoincrement())
  description String
  price       Decimal
  category    String
  type        TransactionType
  createdAt   DateTime        @default(now())
}

enum TransactionType {
  income
  outcome
}
```

## Campos

### `id`

Identificador único da transação.

Utiliza incremento automático:

```text
1
2
3
4
...
```

### `description`

Descrição da movimentação financeira.

Exemplo:

```text
Desenvolvimento de website
```

### `price`

Valor monetário da transação.

O banco utiliza `Decimal`, apropriado para representar valores que precisam de precisão decimal.

### `category`

Categoria da transação.

Exemplo:

```text
Desenvolvimento
Aplicativo
Alimentação
Transporte
```

### `type`

Tipo da transação.

Valores permitidos:

```text
income
outcome
```

### `createdAt`

Data e horário da criação.

É preenchido automaticamente pelo PostgreSQL/Prisma.

---

# 🌐 API REST

A API possui operações CRUD para transações.

Base conceitual:

```text
/transactions
```

---

## GET `/transactions`

Retorna todas as transações.

```http
GET /transactions
```

Resposta:

```json
{
  "transactions": [
    {
      "id": 1,
      "description": "Desenvolvimento de website",
      "price": 3200,
      "category": "Desenvolvimento",
      "type": "income",
      "createdAt": "2026-09-23T18:00:00.000Z"
    }
  ]
}
```

As transações são retornadas da mais recente para a mais antiga.

---

## GET `/transactions?q=`

Permite pesquisar por descrição ou categoria.

```http
GET /transactions?q=website
```

A pesquisa é realizada no PostgreSQL através do Prisma.

Conceitualmente:

```text
query
  ↓
Express
  ↓
Zod
  ↓
Prisma
  ↓
PostgreSQL
```

A busca utiliza correspondência parcial e não diferencia maiúsculas de minúsculas.

---

## GET `/transactions/:id`

Busca uma transação específica.

```http
GET /transactions/1
```

Possíveis respostas:

```text
200 → transação encontrada
400 → ID inválido
404 → transação inexistente
500 → erro interno
```

---

## POST `/transactions`

Cria uma nova transação.

```http
POST /transactions
```

Body:

```json
{
  "description": "Desenvolvimento de aplicativo",
  "price": 1800,
  "category": "Aplicativo",
  "type": "income"
}
```

Resposta de sucesso:

```text
201 Created
```

---

## PATCH `/transactions/:id`

Atualiza parcialmente uma transação.

```http
PATCH /transactions/1
```

Exemplo:

```json
{
  "price": 3500
}
```

Como o schema de atualização é parcial, não é necessário enviar novamente todos os campos.

---

## DELETE `/transactions/:id`

Remove uma transação.

```http
DELETE /transactions/1
```

Resposta de sucesso:

```text
204 No Content
```

---

# 🛡️ Validação com Zod

Os dados recebidos pela API não são enviados diretamente para o banco.

Antes disso, são validados com Zod.

O schema de criação exige:

```ts
{
  description: string
  price: number positivo
  category: string
  type: 'income' | 'outcome'
}
```

Isso evita que dados incompatíveis sejam persistidos.

O fluxo é:

```text
Request
   ↓
Zod
   ↓
Dados válidos?
   │
   ├── NÃO → HTTP 400
   │
   └── SIM
        ↓
      Prisma
        ↓
    PostgreSQL
```

Também existem schemas específicos para:

- criação;
- atualização;
- parâmetros de rota;
- pesquisa.

---

# 🔷 Prisma ORM

O Prisma é responsável pela comunicação entre a API e o PostgreSQL.

Em vez de escrever SQL diretamente para cada operação, a aplicação utiliza métodos como:

```ts
prisma.transaction.findMany()
```

```ts
prisma.transaction.findUnique()
```

```ts
prisma.transaction.create()
```

```ts
prisma.transaction.update()
```

```ts
prisma.transaction.delete()
```

A arquitetura fica:

```text
Express
   ↓
Prisma Client
   ↓
PostgreSQL Adapter
   ↓
PostgreSQL
```

---

# 💵 Tratamento do tipo Decimal

Durante a integração do PostgreSQL foi identificado um problema importante.

O Prisma utiliza `Decimal` para o campo `price`.

Ao retornar os dados para o Front-end, os valores precisaram ser normalizados para `number`.

Sem essa normalização, operações no resumo financeiro poderiam produzir concatenação de strings em vez de soma numérica.

Foi criada uma serialização:

```ts
function serializeTransaction<T extends { price: unknown }>(
  transaction: T,
) {
  return {
    ...transaction,
    price: Number(transaction.price),
  }
}
```

Assim:

```text
Decimal do banco
      ↓
Number()
      ↓
JSON
      ↓
Front-end
      ↓
Cálculos financeiros
```

Esse ajuste resolveu a inconsistência encontrada no cálculo do Summary.

---

# 🔎 Pesquisa de transações

A pesquisa também foi migrada para a API real.

O Front-end envia:

```http
GET /transactions?q=termo
```

O Back-end recebe a query e utiliza Prisma:

```text
description contains query
OR
category contains query
```

com busca case-insensitive.

Isso significa que a filtragem acontece no banco de dados e não apenas no navegador.

---

# 💾 Persistência

Um dos principais objetivos da versão 2.0 foi substituir:

```text
JSON Server
   ↓
server.json
```

por:

```text
Prisma
   ↓
PostgreSQL
```

A persistência foi validada através do seguinte teste:

```text
Criar transação
       ↓
POST /transactions
       ↓
Express
       ↓
Prisma
       ↓
PostgreSQL
       ↓
Atualizar navegador
       ↓
GET /transactions
       ↓
Transação continua disponível
```

Isso confirmou que os dados não estavam apenas armazenados no estado do React, mas persistidos no banco PostgreSQL.

---

# 🚀 Deploy

A aplicação utiliza serviços independentes para cada camada.

## Front-end — Vercel

```text
React
TypeScript
Vite
    ↓
Vercel
```

A variável utilizada para localizar a API é:

```env
VITE_API_URL=
```

---

## Back-end — Render

```text
Node.js
Express
TypeScript
Prisma
    ↓
Render
```

Configuração utilizada:

```text
Root Directory:
server
```

Build:

```bash
npm install && npm run build
```

Start:

```bash
npm start
```

O script de produção executa:

```bash
node dist/server.js
```

---

## Database — Neon

```text
PostgreSQL
    ↓
Neon
```

O Render acessa o banco através de:

```env
DATABASE_URL=
```

---

# 🔐 Variáveis de ambiente

Nenhuma credencial real deve ser enviada ao GitHub.

## Front-end

Crie:

```env
VITE_API_URL=http://localhost:3333
```

Em produção, utilize a URL pública da API.

---

## Back-end

Dentro de `server`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
PORT=3333
```

O arquivo real:

```text
.env
```

não deve ser versionado.

Utilize:

```text
.env.example
```

apenas como documentação das variáveis necessárias.

---

# ⚙️ Como executar localmente

## Pré-requisitos

Tenha instalado:

- Git
- Node.js
- npm
- PostgreSQL

---

## 1. Clone o repositório

```bash
git clone https://github.com/lfbond/DTMoney-Ignite-02.git
```

Entre no projeto:

```bash
cd DTMoney-Ignite-02
```

---

## 2. Instale as dependências do Front-end

```bash
npm install
```

---

## 3. Instale as dependências do Back-end

```bash
cd server
npm install
```

Depois:

```bash
cd ..
```

---

## 4. Configure o Front-end

Crie o `.env` na raiz baseado no `.env.example`.

```env
VITE_API_URL=http://localhost:3333
```

---

## 5. Configure o Back-end

Crie:

```text
server/.env
```

e configure:

```env
DATABASE_URL="SUA_URL_POSTGRESQL"
PORT=3333
```

---

## 6. Execute as migrations

Dentro de `server`:

```bash
npx prisma migrate deploy --config prisma7.config.ts
```

Em um fluxo de desenvolvimento que envolva criação de novas migrations, utilize os comandos de desenvolvimento apropriados do Prisma.

---

## 7. Execute o Back-end

Na raiz do projeto:

```bash
npm run dev:server
```

ou diretamente:

```bash
cd server
npm run dev
```

API:

```text
http://localhost:3333
```

---

## 8. Execute o Front-end

Em outro terminal:

```bash
npm run dev
```

O Vite exibirá a URL local da aplicação.

---

# 🗃️ Migrations

O projeto utiliza Prisma Migrations para versionar alterações estruturais do banco.

O fluxo utilizado foi:

```text
schema.prisma
      ↓
Migration
      ↓
PostgreSQL
```

A migration inicial cria a estrutura necessária para `Transaction`.

Em produção, as migrations existentes são aplicadas com:

```bash
npx prisma migrate deploy --config prisma7.config.ts
```

Isso foi utilizado para preparar o PostgreSQL hospedado no Neon.

---

# 📁 Estrutura do projeto

Estrutura simplificada:

```text
DTMoney-Ignite-02/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── lib/
│   │   └── axios.ts
│   ├── pages/
│   ├── styles/
│   └── ...
│
├── server/
│   │
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── generated/
│   │   ├── lib/
│   │   │   └── prisma.ts
│   │   ├── routes/
│   │   │   └── transactions.ts
│   │   └── server.ts
│   │
│   ├── .env.example
│   ├── package.json
│   ├── prisma7.config.ts
│   └── tsconfig.json
│
├── .env.example
├── package.json
└── README.md
```

Essa organização mantém Front-end e Back-end no mesmo repositório, porém com responsabilidades separadas.

---

# 🔁 Fluxo de uma requisição

Exemplo: criação de uma transação.

```text
Usuário
   ↓
Modal de nova transação
   ↓
React Hook Form
   ↓
Context
   ↓
Axios
   ↓
POST /transactions
   ↓
Express Router
   ↓
Zod
   ↓
Prisma
   ↓
PostgreSQL
   ↓
Prisma
   ↓
Express
   ↓
JSON
   ↓
Axios
   ↓
React
   ↓
Interface atualizada
```

Esse fluxo representa uma das principais evoluções em relação ao projeto original.

---

# 🧩 Principais desafios enfrentados

A refatoração envolveu diversos problemas reais de integração.

## 1. Migração do JSON Server

O primeiro desafio foi remover a dependência da API simulada sem quebrar o Front-end existente.

Foi necessário preservar o contrato esperado pelos componentes enquanto a origem dos dados mudava completamente.

---

## 2. Configuração do Prisma

Foi necessário configurar:

- Prisma Client;
- PostgreSQL;
- migrations;
- geração do client;
- adapter PostgreSQL;
- variáveis de ambiente.

Também foram tratados problemas relacionados ao diretório de geração do Prisma Client e à configuração TypeScript.

---

## 3. Integração Front-end/API

Durante a integração, a resposta da API passou a possuir a estrutura:

```json
{
  "transactions": []
}
```

O Front-end precisava armazenar especificamente:

```ts
response.data.transactions
```

e não o objeto completo.

Esse detalhe gerou um erro de runtime semelhante a:

```text
transactions.map is not a function
```

A correção reforçou a importância de manter contratos claros entre Front-end e Back-end.

---

## 4. Decimal e cálculo do Summary

O campo `price` utiliza `Decimal` no banco.

A serialização inadequada provocou cálculos incorretos no resumo financeiro.

A solução foi converter explicitamente:

```ts
Number(transaction.price)
```

antes de devolver os dados ao cliente.

---

## 5. Pesquisa

A pesquisa, anteriormente ligada à API simulada, foi migrada para Prisma/PostgreSQL.

Isso exigiu interpretar a query string:

```text
?q=
```

e montar filtros através do ORM.

---

## 6. Ambiente local versus produção

O projeto passou a precisar lidar com configurações diferentes:

```text
LOCAL
Frontend → localhost:3333
Backend → PostgreSQL local
```

e:

```text
PRODUÇÃO
Vercel → Render → Neon
```

A solução foi utilizar variáveis de ambiente.

---

## 7. Deploy Full Stack

O deploy deixou de significar apenas publicar arquivos Front-end.

Foi necessário compreender e configurar separadamente:

```text
Front-end
Back-end
Database
Environment Variables
Build
Start
Migrations
```

Esse processo aproximou o projeto de um cenário real de desenvolvimento Full Stack.

---

# 🧠 Aprendizados

A evolução do DT Money permitiu praticar e consolidar conhecimentos em:

## Front-end

- React;
- TypeScript;
- componentização;
- Hooks;
- Context API;
- gerenciamento de estado;
- formulários;
- consumo de APIs;
- Axios;
- variáveis de ambiente;
- Styled Components.

## Back-end

- Node.js;
- Express;
- TypeScript no servidor;
- criação de REST APIs;
- routers;
- parâmetros;
- query strings;
- request body;
- códigos HTTP;
- tratamento de erros;
- serialização;
- CORS.

## Validação

- Zod;
- validação de body;
- validação de params;
- validação de query strings;
- schemas parciais para atualização.

## Banco de dados

- PostgreSQL;
- tabelas;
- schemas;
- migrations;
- tipos;
- enums;
- autoincrement;
- Decimal;
- persistência.

## ORM

- Prisma;
- Prisma Client;
- migrations;
- `findMany`;
- `findUnique`;
- `create`;
- `update`;
- `delete`;
- filtros;
- ordenação.

## DevOps / Deploy

- ambientes de desenvolvimento e produção;
- Vercel;
- Render;
- Neon;
- build de TypeScript;
- start de aplicação Node;
- environment variables;
- secrets;
- migrations em produção;
- integração entre serviços.

## Git/GitHub

- branches;
- commits incrementais;
- issues;
- evolução por etapas;
- documentação técnica;
- preparação para merge.

---

# 📈 Histórico de evolução

## 1. Projeto original

Desenvolvido durante os estudos da trilha Ignite ReactJS da Rocketseat.

Arquitetura:

```text
React
 ↓
JSON Server
```

---

## 2. Preparação Full Stack

Foi criada uma branch específica:

```text
refactor/fullstack-v2
```

O objetivo foi evoluir o projeto sem comprometer a versão existente na `main`.

---

## 3. Criação do Back-end

Foi adicionada uma aplicação Node.js + Express dentro de:

```text
/server
```

---

## 4. PostgreSQL + Prisma

O Prisma foi configurado como ORM e o PostgreSQL passou a ser o mecanismo de persistência.

---

## 5. API de transações

Foram implementadas operações:

```text
GET
GET por ID
POST
PATCH
DELETE
```

---

## 6. Integração Front-end

O Front-end deixou de consumir JSON Server e passou a utilizar a API Express.

---

## 7. Pesquisa

A pesquisa passou a ser processada pela API e pelo PostgreSQL.

---

## 8. Remoção do JSON Server

Após validar a nova arquitetura, a antiga persistência baseada em `server.json` deixou de fazer parte do fluxo da aplicação.

---

## 9. Preparação para produção

Foram adicionadas configurações de ambiente para permitir URLs diferentes entre desenvolvimento e produção.

---

## 10. PostgreSQL em produção

Foi criado um banco PostgreSQL no Neon.

As migrations existentes foram aplicadas através de:

```bash
npx prisma migrate deploy --config prisma7.config.ts
```

---

## 11. Back-end em produção

A API Node/Express foi publicada no Render e conectada ao PostgreSQL Neon.

Os endpoints de saúde e transações foram validados online.

---

## 12. Front-end em produção

O Front-end hospedado na Vercel recebeu:

```env
VITE_API_URL=
```

apontando para a API publicada.

---

## 13. Teste End-to-End

Foi criada uma transação através da interface publicada.

Depois do recarregamento completo da página, a transação permaneceu disponível.

Esse teste confirmou:

```text
Vercel
   ↓
React
   ↓
Axios
   ↓
Render
   ↓
Express
   ↓
Prisma
   ↓
Neon
   ↓
PostgreSQL
```

funcionando de ponta a ponta.

---

# 🗺️ Roadmap da refatoração

## Infraestrutura Full Stack

- [x] Criar Back-end Node.js
- [x] Configurar Express
- [x] Configurar TypeScript
- [x] Configurar Prisma
- [x] Configurar PostgreSQL
- [x] Criar migrations
- [x] Criar API REST
- [x] Implementar validação
- [x] Implementar CRUD
- [x] Implementar pesquisa
- [x] Integrar Front-end
- [x] Remover fluxo baseado em JSON Server
- [x] Configurar variáveis de ambiente
- [x] Criar PostgreSQL de produção
- [x] Publicar Back-end
- [x] Publicar Front-end
- [x] Validar persistência em produção

---

# 🔭 Próximas possibilidades

A versão atual conclui o objetivo principal da refatoração Full Stack.

Possíveis evoluções futuras incluem:

- autenticação;
- usuários;
- transações vinculadas a usuários;
- filtros por período;
- dashboard com gráficos;
- paginação;
- testes automatizados;
- tratamento centralizado de erros;
- documentação OpenAPI/Swagger;
- melhoria de responsividade;
- melhorias de acessibilidade.

Essas funcionalidades não fazem parte do escopo necessário para considerar a atual evolução Full Stack concluída.

---

# 🎓 Origem do projeto

O projeto foi desenvolvido originalmente durante meus estudos na trilha **Ignite ReactJS da Rocketseat**.

A versão original serviu como base de aprendizado de React e consumo de APIs.

A refatoração Full Stack foi realizada posteriormente como iniciativa de evolução técnica e construção de portfólio, adicionando uma API própria, banco PostgreSQL, ORM e infraestrutura de produção.

---

# 💡 Por que revisitar um projeto antigo?

Construir projetos novos é importante.

Mas também considero importante conseguir analisar código desenvolvido anteriormente e perguntar:

> O que eu faria diferente hoje?

O DT Money 2.0 nasceu dessa pergunta.

Em vez de descartar o projeto original, utilizei sua base para praticar:

```text
Análise
  ↓
Planejamento
  ↓
Issues
  ↓
Branch
  ↓
Implementação
  ↓
Debug
  ↓
Integração
  ↓
Testes
  ↓
Deploy
  ↓
Documentação
```

O resultado não registra apenas o estado atual da aplicação.

Ele registra também parte da minha evolução como desenvolvedor.

---

# 👨‍💻 Autor

**Luís Felipe Bond**

Desenvolvedor Full Stack JavaScript/TypeScript

Principais tecnologias:

```text
JavaScript
TypeScript
React
Node.js
Express
PostgreSQL
Prisma
```

GitHub: `lfbond`

Portfólio: `f1technology.com.br`

---

## ⭐ Considerações finais

O **DT Money 2.0** representa a evolução de um projeto educacional Front-end para uma aplicação Full Stack com persistência real e infraestrutura distribuída.

A arquitetura final utilizada é:

```text
React + TypeScript
        ↓
      Axios
        ↓
 Node.js + Express
        ↓
       Zod
        ↓
      Prisma
        ↓
   PostgreSQL
```

Em produção:

```text
Vercel
   ↓
Render
   ↓
Neon
```

Esse projeto faz parte do meu processo contínuo de evolução em desenvolvimento de software, com foco em compreender não apenas como escrever funcionalidades, mas também como integrar, persistir, testar, documentar e publicar uma aplicação completa.

---

**DT Money 2.0 — Full Stack refactor completed. 🚀**