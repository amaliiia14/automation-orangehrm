class recruitmenPage {
  recruitment(){
    cy.contains('Recruitment').click()
  }

  clickAdd(){
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
  }

  enterFullname(fullname){
    cy.get('.orangehrm-firstname').type(fullname)
  }

  enterMiddlename(middlename){
    cy.get('.orangehrm-middlename').type(middlename)
  }

  enterLastname(lastname){
    cy.get('.orangehrm-lastname').type(lastname)
  }

  enterEmail(email){
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(email)
  }

  verifyFormatEmail(){
    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('contain', 'Expected format: admin@example.com')
  }

  clikSave(){
    cy.get('.orangehrm-left-space').click()
  }

  invalidFormatResume(resume){
    cy.get('.oxd-file-input').selectFile(resume, { force: true })
    cy.get('div[class="orangehrm-file-input"] span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
    .should('contain', 'File type not allowed')
  }

  invalidFileSize(resume){
    cy.get('.oxd-file-input').selectFile(resume, { force: true })
    cy.get('div[class="orangehrm-file-input"] span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
    .should('contain', 'Attachment Size Exceeded')
  }

  addCandidateSucces(){
    cy.get('#oxd-toaster_1').should('be.visible')
    .and('contain', 'Successfully Saved')
    cy.url().should('include', '/recruitment/addCandidate/')
  }

  deleteCandidate(){
    cy.contains('.oxd-table-row--with-border', 'Test Delete Candidate').find('button').last().click()
    cy.get('.orangehrm-dialog-popup').should('be.visible')
    cy.get('.orangehrm-dialog-popup').find('.oxd-button--label-danger').click()
  }

  deleteSucces(){
    cy.get('#oxd-toaster_1').should('be.visible').and('contain', 'Successfully Deleted')
  }

  clickVacancies(){
    cy.get('li[class="oxd-topbar-body-nav-tab"]').should('contain', 'Vacancies').click()
  }

  enterVacancyName(vacancyname){
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(vacancyname)
  }

  selectJobtitle(jobTitle){
    cy.get('.oxd-select-text--arrow').click()
    cy.contains(jobTitle).click()
  }

  enterHiringManager(hiringmanager){
    cy.get('input[placeholder="Type for hints..."]').type(hiringmanager)
    cy.get('.oxd-autocomplete-dropdown')
    cy.contains(hiringmanager).click()
  }

  errorRequired(){
    cy.get('.oxd-input-field-error-message').should('include.text', 'Required')
  }

  editVacancies(hiringmanager){
    cy.contains('.oxd-table-row--with-border', 'test').find('.oxd-table-cell-action-space').eq(1).click()
    cy.url().should('include', '/recruitment/addJobVacancy/')
    cy.get('input[placeholder="Type for hints..."]').clear().type(hiringmanager)
    cy.get('.oxd-autocomplete-dropdown').contains(hiringmanager).click()
  }

  editSucces(){
    cy.get('#oxd-toaster_1').should('be.visible').and('contain', 'Successfully Saved')
    cy.url().should('include', '/recruitment/addJobVacancy/')
  }

  interceptAddCandidate() {
    cy.intercept(
      'POST',
      '**/api/v2/recruitment/candidates'
    ).as('addCandidate')
  }

  waitAddCandidate() {
    cy.wait('@addCandidate').its('response.statusCode').should('eq', 200)
  }

  interceptDeleteCandidate() {
    cy.intercept(
      'DELETE',
      '**/api/v2/recruitment/candidates'
    ).as('deleteCandidate')
  }

  waitDeleteCandidate() {
    cy.wait('@deleteCandidate').its('response.statusCode').should('eq', 200)
  }

  interceptAddVacancy() {
    cy.intercept(
      'POST',
      '**/api/v2/recruitment/vacancies'
    ).as('addVacancy')
  }

  waitAddVacancy() {
    cy.wait('@addVacancy').its('response.statusCode').should('eq', 200)
  }

  interceptEditVacancy() {
    cy.intercept(
      'PUT',
      '**/api/v2/recruitment/vacancies/*'
    ).as('editVacancy')
  }

  waitEditVacancy() {
    cy.wait('@editVacancy').its('response.statusCode').should('eq', 200)
  }
}

export default new recruitmenPage()