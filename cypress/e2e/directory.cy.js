import loginPage from "../support/loginPage";
import loginData from "../fixtures/loginData.json";
import directoryPage from "../support/directoryPage";
import directoryData from "../fixtures/directoryData.json";

describe('Verifikasi fungsi pencarian data pada menu directory website OrangeHRM', () => {

  beforeEach(() => {
    loginPage.visit()
    loginPage.enterUsername(loginData.validUsername)
    loginPage.enterPassword(loginData.validPassword)
    loginPage.clickLogin()
    loginPage.assertionLogin()
  })

  it('TC_001 - Search dengan Employee Name, Job Title, dan Location yang terdaftar', () => {
    directoryPage.directory()         
    directoryPage.enterEmployeename(directoryData.validEmployename)
    directoryPage.selectJobtitle(directoryData.jobTitle.jobTitle1)
    directoryPage.selectLocation(directoryData.location.location1)
    directoryPage.interceptSearchDirectory()
    directoryPage.clickSearch()
    directoryPage.waitSearchDirectory()
    directoryPage.verifyValidData()
  })

  it('TC_003 - Search dengan hanya menginputkan Employee name yang ada dalam daftar karyawan', () => {
    directoryPage.directory()
    directoryPage.enterEmployeename(directoryData.validEmployename)
    directoryPage.interceptSearchByEmployee()
    directoryPage.clickSearch()
    directoryPage.waitSearchByEmployee()
    directoryPage.verifyValidEmployeename()
  })

  it('TC_004 - Search dengan hanya memilih job title yang terdaftar', () => {
    directoryPage.directory()
    directoryPage.selectJobtitle(directoryData.jobTitle.jobTitle1)
    directoryPage.interceptSearchByJobTitle()
    directoryPage.clickSearch()
    directoryPage.waitSearchByJobTitle()
    directoryPage.verifywithJobtitle()
  })

  it('TC_005 - Search dengan hanya memilih location yang terdaftar', () => {
    directoryPage.directory()
    directoryPage.selectLocation(directoryData.location.location1)
    directoryPage.interceptSearchByLocation()
    directoryPage.clickSearch()
    directoryPage.waitSearchByLocation()
    directoryPage.verifywithLocation()
  })

  it('TC_006 - Search dengan nama karyawan yang tidak ada dalam daftar', () => {
    directoryPage.directory() 
    directoryPage.interceptSearchInvalidEmployee()        
    directoryPage.enterInvalidEmployeename(directoryData.invalidEmployename)
    directoryPage.waitSearchInvalidEmployee()
  })

  it('TC_007 - Search dengan nama karyawan yang terdaftar, job title-nya tidak sesuai, dan location sesuai', () => {
    directoryPage.directory()
    directoryPage.enterEmployeename(directoryData.validEmployename)
    directoryPage.selectJobtitle(directoryData.jobTitle.jobTitle2)
    directoryPage.selectLocation(directoryData.location.location1)
    directoryPage.interceptMismatchFilter()
    directoryPage.clickSearch()
    directoryPage.waitMismatchFilter()
    directoryPage.verifyEmployeLocationMismatchjob()
  })

  it('TC_011 - Search dengan hanya memilih job title dan location yang valid', () => {
    directoryPage.directory()
    directoryPage.selectJobtitle(directoryData.jobTitle.jobTitle1)
    directoryPage.selectLocation(directoryData.location.location1)
    directoryPage.interceptJoblocation()
    directoryPage.clickSearch()
    directoryPage.waitJoblocation()
    directoryPage.verifyJoblocation()
  })

  it('TC_012 - Melakukan reset pada pencarian', () => {
    directoryPage.directory()
    directoryPage.enterEmployeename(directoryData.validEmployename)
    directoryPage.selectJobtitle(directoryData.jobTitle.jobTitle1)
    directoryPage.selectLocation(directoryData.location.location1)
    directoryPage.interceptResetDirectory()
    directoryPage.clickSearch()
    directoryPage.clickReset()
    directoryPage.waitResetDirectory()
    directoryPage.verifyResetFilter()
  })
})