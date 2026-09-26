class directoryPage {
  directory(){
    cy.contains("Directory").click()
  }

  enterEmployeename(employename){
    cy.get('.oxd-autocomplete-text-input').type(employename)
    cy.get('.oxd-autocomplete-dropdown')
    cy.contains(employename).click()
  }

  enterInvalidEmployeename(employename){
    cy.get('.oxd-autocomplete-text-input').type(employename)
    cy.get('.oxd-autocomplete-dropdown').should('contain', 'No Records Found')
  }

  selectJobtitle(jobTitle){
    cy.get('div[class="oxd-table-filter-area"]').click()
    cy.contains(jobTitle).click()
  }

  selectLocation(location){
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)').click()
    cy.contains(location).click()
  }

  clickSearch(){
    cy.get('button[type="submit"]').click()
  }

  clickReset(){
    cy.get('button[type="reset"]').click()
  }

  verifyValidData(){
    cy.get('.orangehrm-directory-card:visible').should('contain', 'Rebecca')
  }

  verifyValidEmployeename(){
    cy.get('.orangehrm-directory-card:visible').should('contain', 'Rebecca')
  }

  verifywithJobtitle(){
    cy.get('.orangehrm-directory-card:visible').should('contain', 'QA Engineer')
  }

  verifywithLocation(){
    cy.get('.orangehrm-directory-card:visible').should('contain', 'Texas R&D')
  }

  verifyEmployeLocationMismatchjob(){
    cy.get('.oxd-toast-container.oxd-toast-container--bottom').should('contain', 'No Records Found')
  }

  verifyJoblocation(){
    cy.get('.orangehrm-directory-card:visible').should('contain', 'Texas R&D')
  }

  verifyResetFilter(){
    cy.get('.oxd-autocomplete-text-input').should('have.value', '')
    cy.get('.oxd-select-text-input').eq(0).should('contain', 'Select')
    cy.get('.oxd-select-text-input').eq(1).should('contain', 'Select')
  }

  interceptSearchDirectory() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees*'
    ).as('searchDirectory')
  }

  waitSearchDirectory() {
    cy.wait('@searchDirectory').its('response.statusCode').should('eq', 200)
  }

  interceptSearchByEmployee() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees*'
    ).as('searchByEmployee')
  }

  waitSearchByEmployee() {
    cy.wait('@searchByEmployee').its('response.statusCode').should('eq', 200)
  }

  interceptSearchByJobTitle() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees*'
    ).as('searchByJobTitle')
  }

  waitSearchByJobTitle() {
    cy.wait('@searchByJobTitle').its('response.statusCode').should('eq', 200)
  }

  interceptSearchByLocation() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees*'
    ).as('searchByLocation')
  }

  waitSearchByLocation() {
    cy.wait('@searchByLocation').its('response.statusCode').should('eq', 200)
  }

  interceptSearchInvalidEmployee() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees*'
    ).as('searchInvalidEmployee')
  }

  waitSearchInvalidEmployee() {
    cy.wait('@searchInvalidEmployee').its('response.statusCode').should('eq', 200)
  }

  interceptMismatchFilter() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees*'
    ).as('mismatchFilter')
  }

  waitMismatchFilter() {
    cy.wait('@mismatchFilter').its('response.statusCode').should('eq', 200)
  }

  interceptJoblocation() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees*'
    ).as('joblocation')
  }

  waitJoblocation() {
    cy.wait('@joblocation').its('response.statusCode').should('eq', 200)
  }

  interceptResetDirectory() {
    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees*'
    ).as('resetDirectory')
  }

  waitResetDirectory() {
    cy.wait('@resetDirectory').its('response.statusCode').should('eq', 200)
  }
}

export default new directoryPage()