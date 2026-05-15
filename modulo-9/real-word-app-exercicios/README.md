# Cypress Real World App — QA Automation Project

Projeto de automação End-to-End (E2E) utilizando Cypress com foco na validação de funcionalidades críticas do Cypress Real World App.

O objetivo deste projeto é praticar:

- Automação de testes E2E
- Organização com Page Objects
- Estruturação de testes Cypress
- Validação de fluxos críticos
- Identificação e documentação de bugs

---

# Tecnologias Utilizadas

- Cypress
- JavaScript
- Page Objects Pattern

---

# Estrutura do Projeto

```plaintext
cypress/
├── fixtures/
│   └── userData.json
│
├── pages/
│   ├── homePage.js
│   ├── loginPage.js
│   ├── menuPage.js
│   ├── signUpPage.js
│   └── transactionPage.js
│
├── screenshotsProject/
│   ├── before-transaction.jpeg
│   └── insufficient-funds-bug.jpeg
│ 
└── tests/
    └── ui/
        ├── login.spec.js
        ├── registration.spec.js
        ├── sendMoney.spec.js
        └── transactionHistory.spec.js
```        
---

# Casos de Teste Automatizados

| Funcionalidade | Arquivo |
|---|---|
| Login | `cypress/tests/ui/login.spec.js` |
| Registro de Usuário | `cypress/tests/ui/registration.spec.js` |
| Envio de Dinheiro | `cypress/tests/ui/sendMoney.spec.js` |
| Histórico de Transações | `cypress/tests/ui/transactionHistory.spec.js` |

---

# Page Objects

| Página | Arquivo |
|---|---|
| Login | `cypress/pages/loginPage.js`  |
| Menu | `cypress/pages/menuPage.js`  |
| Registro | `cypress/pages/signUpPage.js`  |
| Transações | `cypress/pages/transactionPage.js`  |
| Home | `cypress/pages/homePage.js` |

---

# Funcionalidades Automatizadas

## Login

- Login com credenciais válidas
- Validação de login inválido

## Registro de Usuário

- Cadastro com dados válidos
- Validação de campos inválidos

## Envio de Dinheiro

- Transferência entre usuários
- Validação de conclusão de transação
- Identificação de bug de saldo insuficiente

## Histórico de Transações

- Visualização de transações realizadas
- Validação de histórico vazio para novo usuário

---

# Como Executar o Projeto

## Instalar dependências
```bash
npm install
```

## Executar todos os testes
```bash
npx cypress run
```

## Executar apenas testes UI
```bash
npx cypress run --spec "cypress/tests/ui/*.spec.js"
```

## Abrir Cypress em modo visual
```bash
npx cypress open
```

---

# Bug Encontrado

Durante os testes automatizados foi identificado um bug relacionado à validação de saldo insuficiente.

[Visualizar Bug Report](cypress-realworld-app/cypress/docs/bug-report.md)

## Evidências

| Tipo | Link |
|---|---|
| Before Transaction | [Visualizar](./cypress-realworld-app/cypress/screenshotsProject/before-transaction.jpeg) |
| Bug Screenshot | [Visualizar](./cypress-realworld-app/cypress/screenshotsProject/insufficient-funds-bug.jpeg) |

---

# Conceitos Praticados Durante os Exercícios

* Automação E2E
* Page Object Model
* Assertions
* Fluxos positivos e negativos
* Validação de autenticação
* Manipulação de formulários
* Navegação entre páginas
* Estruturação de testes Cypress
* Organização de Page Objects
* Seletores CSS
* Hooks (beforeEach / afterEach)
* Massa de dados com fixtures
* Validação de transações financeiras
* Testes de histórico de transações
* Identificação e documentação de bugs
* Captura de evidências
* Estruturação de suíte de testes
* Reutilização de código
* Boas práticas de automação

---

# Resultado

Os exercícios permitiram praticar a construção de uma suíte E2E organizada, reutilizável e próxima de cenários reais encontrados em projetos de QA Automation.

Além da automação dos fluxos principais da aplicação, o projeto também possibilitou experiência prática com identificação de bugs, validação de regras de negócio e organização de testes utilizando o padrão Page Object Model.