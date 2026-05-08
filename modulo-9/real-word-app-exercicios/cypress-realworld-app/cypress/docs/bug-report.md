# docs/bug-report.md

```markdown
# Bug Report — Insufficient Funds Validation

## Summary

The application allows users to complete transactions with an amount greater than the available account balance.

---

# Environment

- Application: Cypress Real World App
- Test Type: End-to-End (E2E)
- Automation Tool: Cypress
- OS: Ubuntu (WSL)

---

# Preconditions

- User must be authenticated
- User account balance must be lower than the transaction amount

---

# Steps to Reproduce

1. Login with a valid user
2. Access the "New Transaction" page
3. Select a contact
4. Enter an amount greater than the available balance
5. Click on "Pay"

---

# Expected Result

The system should block the transaction and display an insufficient funds message.

---

# Actual Result

The transaction is completed successfully even when the user does not have sufficient balance.

---

# Severity

Critical

The application allows users to complete financial transactions without sufficient balance, which may cause financial inconsistency and business rule violations.

---

# Evidence

## Application State Before Transaction

![Before Transaction](../cypress/screenshots/before-transaction.png)

---

## Transaction Successfully Completed With Insufficient Funds

![Bug Evidence](../cypress/screenshots/insufficient-funds-bug.png)

---

# Automation Scenario

Automated scenario available at:

```plaintext
cypress/tests/ui/sendMoney.spec.js