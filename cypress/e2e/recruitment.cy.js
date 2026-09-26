import loginPage from "../support/loginPage";
import loginData from "../fixtures/loginData.json";
import recruitmentPage from "../support/recruitmentPage";
import recruitmentData from "../fixtures/recruitmentData.json";

describe('Verifikasi proses alur perekrutan pada menu Recruitment pada website OrangeHRM', () => {

  beforeEach(() => {
    loginPage.visit()
    loginPage.enterUsername(loginData.validUsername)
    loginPage.enterPassword(loginData.validPassword)
    loginPage.clickLogin()
    loginPage.assertionLogin()
  })

  it('TC_001 - Menambahkan kandidat baru dengan mengisi semua field mandatory dengan data valid', () => {
    recruitmentPage.recruitment()
    recruitmentPage.clickAdd()
    recruitmentPage.enterFullname(recruitmentData.firstName)
    recruitmentPage.enterMiddlename(recruitmentData.middleName)
    recruitmentPage.enterLastname(recruitmentData.lastName)
    recruitmentPage.enterEmail(recruitmentData.validEmail)
    recruitmentPage.interceptAddCandidate()
    recruitmentPage.clikSave()
    recruitmentPage.waitAddCandidate()
    recruitmentPage.addCandidateSucces()
  })

  it('TC_003 - Menambahkan kandidat baru dengan menginputkan email menggunakan format yang salah', () => {
    recruitmentPage.recruitment()
    recruitmentPage.clickAdd()
    recruitmentPage.enterFullname(recruitmentData.firstName)
    recruitmentPage.enterMiddlename(recruitmentData.middleName)
    recruitmentPage.enterLastname(recruitmentData.lastName)
    recruitmentPage.enterEmail(recruitmentData.invalidEmail)
    recruitmentPage.clikSave()
    recruitmentPage.verifyFormatEmail()
  })

  it('TC_004 - Menambahkan kandidat baru dengan upload resume menggunakan format yang salah', () => {
    recruitmentPage.recruitment()
    recruitmentPage.clickAdd()
    recruitmentPage.enterFullname(recruitmentData.firstName)
    recruitmentPage.enterMiddlename(recruitmentData.middleName)
    recruitmentPage.enterLastname(recruitmentData.lastName)
    recruitmentPage.enterEmail(recruitmentData.validEmail)
    recruitmentPage.invalidFormatResume('cypress/files/' + recruitmentData.document.invalidFormat)
  })

  it('TC_005 - Menambahkan kandidat baru dengan upload resume berukuran lebih dari 1 MB', () => {
    recruitmentPage.recruitment()
    recruitmentPage.clickAdd()
    recruitmentPage.enterFullname(recruitmentData.firstName)
    recruitmentPage.enterMiddlename(recruitmentData.middleName)
    recruitmentPage.enterLastname(recruitmentData.lastName)
    recruitmentPage.enterEmail(recruitmentData.validEmail)
    recruitmentPage.invalidFileSize('cypress/files/' + recruitmentData.document.invalidSize)
  })

  it('TC_008 - Menghapus data kandidat menggunakan ikon trash', () => {
    recruitmentPage.recruitment()
    recruitmentPage.interceptDeleteCandidate()
    recruitmentPage.deleteCandidate()
    recruitmentPage.waitDeleteCandidate()
    recruitmentPage.deleteSucces()
  })

  it('TC_010 - Menambahkan lowongan pekerjaan dengan mengisi semua field mandatory dengan data valid', () => {
    recruitmentPage.recruitment()
    recruitmentPage.clickVacancies()
    recruitmentPage.clickAdd()
    recruitmentPage.enterVacancyName(recruitmentData.vacancyName)
    recruitmentPage.selectJobtitle(recruitmentData.jobTitle)
    recruitmentPage.enterHiringManager(recruitmentData.hiringManager)
    recruitmentPage.interceptAddVacancy()
    recruitmentPage.clikSave()
    recruitmentPage.waitAddVacancy
    cy.url().should('include', '/recruitment/addJobVacancy/')
  })

  it('TC_011 - Menambah lowongan pekerjaan tanpa mengisi field Hiring Manager', () => {
    recruitmentPage.recruitment()
    recruitmentPage.clickVacancies()
    recruitmentPage.clickAdd()
    recruitmentPage.enterVacancyName(recruitmentData.vacancyName)
    recruitmentPage.selectJobtitle(recruitmentData.jobTitle)
    recruitmentPage.clikSave()
    recruitmentPage.errorRequired()
  })

  it('TC_013 - Mengedit data lowongan pekerjaan menggunakan ikon edit', () => {
    recruitmentPage.recruitment()
    recruitmentPage.clickVacancies()
    recruitmentPage.editVacancies(recruitmentData.hiringManager)
    recruitmentPage.interceptEditVacancy()
    recruitmentPage.clikSave()
    recruitmentPage.waitEditVacancy()
    recruitmentPage.editSucces()
  })
})










