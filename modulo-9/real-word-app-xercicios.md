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
- Faker
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
├── screenshots/
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

[Visualizar Bug Report](./docs/bug-report.md)

## Evidências

| Tipo | Link |
|---|---|
| Before Transaction | [Visualizar ](./cypress/screenshots/before-transaction.png) |
| Bug Screenshot | [Visualizar ](./cypress/screenshots/insufficient-funds-bug.png) |