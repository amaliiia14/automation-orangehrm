class loginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  }

  enterUsername(username) {
    cy.get('input[placeholder="Username"]').type(username)
  }

  enterPassword(password) {
    cy.get('input[placeholder="Password"]').type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  assertionLogin() {
    cy.url().should('include','/dashboard')
  }

  errorMessage() {
    return cy.get('div[role="alert"]').should('contain','Invalid credentials')
  }

  requiredMessage() {
    return cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('include.text','Required')
  }

  interceptSummary() {
    cy.intercept(
      'GET', 
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary'
    ). as('actionSummary')
  }

  waitSummary() {
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)
  }

  interceptMessage() {
    cy.intercept(
      'GET', 
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages'
    ). as('messages')
  }

  waitMessage() {
    cy.wait('@messages').its('response.statusCode').should('eq', 304)
  }
}

export default new loginPage()