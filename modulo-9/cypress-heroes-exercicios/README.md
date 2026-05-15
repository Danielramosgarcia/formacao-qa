# Cypress Heroes — QA Automation Project

Projeto de automação End-to-End (E2E) utilizando Cypress com foco na validação de funcionalidades da aplicação Cypress Heroes Demo Application.

O objetivo deste projeto é praticar:

* Automação de testes E2E
* Organização com Page Objects
* Estruturação de testes Cypress
* Validação de fluxos críticos
* Controle de permissões
* Criação e limpeza de dados de teste

## Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Prisma
* Page Object Model (POM)

## Estrutura do Projeto

```plaintext
client/
├── cypress/
│   ├── e2e/
│   │   ├── fixtures/
│   │   │   ├── userData.json
│   │   │   └── avatar.jpg
│   │   │
│   │   ├── pages/
│   │   │   ├── loginPage.js
│   │   │   ├── homePage.js
│   │   │   └── createHeroPage.js
│   │   │
│   │   └── ui/
│   │       ├── login.cy.js
│   │       ├── heroesList.cy.js
│   │       ├── permissionControl.cy.js
│   │       └── createHero.cy.js
│   │
│   └── support/
│       └── data.ts
│
└── cypress.config.ts
```

## Casos de Teste Automatizados

| Funcionalidade        | Arquivo                          |
| --------------------- | -------------------------------- |
| Login                 | cypress/e2e/ui/login.cy.js       |
| Listagem de Heróis    | cypress/e2e/ui/heroesList.cy.js |
| Controle de Permissão | cypress/e2e/ui/permissionControl.cy.js |
| Criação de Herói      | cypress/e2e/ui/createHero.cy.js  |

## Page Objects

| Página           | Arquivo                             |
| ---------------- | ----------------------------------- |
| Login            | cypress/e2e/pages/loginPage.js      |
| Home             | cypress/e2e/pages/homePage.js       |
| Criação de Herói | cypress/e2e/pages/createHeroPage.js |

## Funcionalidades Automatizadas

### Login

* Login com credenciais válidas
* Validação de login inválido
* Verificação de autenticação

### Listagem de Heróis

* Verificação de carregamento da lista
* Validação de cards renderizados
* Assertions de quantidade

### Criação de Herói

* Preenchimento de formulário
* Seleção de poderes
* Upload de imagem
* Criação de herói
* Validação de exibição na listagem
* Limpeza de massa de dados com cy.task()

### Controle de Permissão

* Validação de permissões de administrador
* Validação de restrições para usuário comum
* Verificação de elementos ocultos na UI

---

# Como executar o projeto

## Instalar dependências

```bash
npm install
```

---

## Configurar ambiente

```bash
npm run setup
```

---

## Subir aplicação

```bash
npm run dev
```

Aplicação disponível em:

```plaintext
http://localhost:3000
```

---


## Executando o Cypress

## Abrir interface gráfica

Dentro da pasta client:

```bash
npx cypress open
```

---

## Executar em modo headless

```bash
npx cypress run
```

---

## Usuários Utilizados nos Testes

Os usuários utilizados estão configurados no seed da aplicação.

## Usuário comum

```plaintext
Email: test@test.com
Senha: test123
```

## Usuário administrador

```plaintext
Email: admin@test.com
Senha: test123
```

---

## Conceitos Praticados Durante os Exercícios

* Automação E2E
* Page Object Model
* Assertions
* Fluxos positivos e negativos
* Upload de arquivos
* Select múltiplo
* Hooks (beforeEach / afterEach)
* Organização de testes
* Estruturação de projeto
* Seletores CSS
* Limpeza de massa de dados
* Integração Cypress + Prisma

---

## Resultado

Os exercícios permitiram praticar a construção de uma suíte E2E organizada, reutilizável e próxima de cenários reais encontrados em projetos de QA Automation.
