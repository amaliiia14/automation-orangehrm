import loginPage from "../support/loginPage";
import loginData from "../fixtures/loginData.json";

describe('Verifikasi proses login website OrangeHRM', () => {
  it('TC_001 - Login dengan username dan password valid', () => {
    loginPage.visit()
    loginPage.enterUsername(loginData.validUsername)
    loginPage.enterPassword(loginData.validPassword)
    loginPage.interceptSummary()
    loginPage.clickLogin()
    loginPage.assertionLogin()
    loginPage.waitSummary() 
  })

  it('TC_002 - Login dengan username dan password yang belum terdaftar', () => {
    loginPage.visit()
    loginPage.enterUsername(loginData.usernameNotRegistered)
    loginPage.enterPassword(loginData.passwordNotRegistered)
    loginPage.interceptMessage()
    loginPage.clickLogin()
    loginPage.errorMessage()
    loginPage.waitMessage()
  })

  it('TC_003 - Login dengan username menggunakan huruf kecil dan password valid', () => {
    loginPage.visit()
    loginPage.enterUsername(loginData.lowercaseUsername)
    loginPage.enterPassword(loginData.validPassword)
    loginPage.interceptMessage()
    loginPage.clickLogin()
    loginPage.errorMessage()
    loginPage.waitMessage()
  })

  it('TC_004 - Login dengan username valid dan password menggunakan huruf besar', () => {
    loginPage.visit()
    loginPage.enterUsername(loginData.validUsername)
    loginPage.enterPassword(loginData.uppercasePassword)
    loginPage.interceptMessage()
    loginPage.clickLogin()
    loginPage.errorMessage()
    loginPage.waitMessage()
  })

  it('TC_005 - Login dengan invalid username dan valid password', () => {
    loginPage.visit()
    loginPage.enterUsername(loginData.invalidUsername)
    loginPage.enterPassword(loginData.validPassword)
    loginPage.interceptMessage()
    loginPage.clickLogin()
    loginPage.errorMessage()
    loginPage.waitMessage()
  })

  it('TC_006 - Login dengan valid username dan invalid password', () => {
    loginPage.visit()
    loginPage.enterUsername(loginData.validUsername)
    loginPage.enterPassword(loginData.invalidPassword)
    loginPage.interceptMessage()
    loginPage.clickLogin()
    loginPage.errorMessage()
    loginPage.waitMessage()
  })

  it('TC_012 - Login dengan memberikan spasi di awal dan di akhir pada inputan field username', () => {
    loginPage.visit()
    loginPage.enterUsername(loginData.leadingTrailingUsernamme)
    loginPage.enterPassword(loginData.validPassword)
    loginPage.interceptMessage()
    loginPage.clickLogin()
    loginPage.errorMessage()
    loginPage.waitMessage()
  })

  it('TC_013 - Login dengan memberikan spasi di awal dan di akhir pada inputan field password', () => {
    loginPage.visit()
    loginPage.enterUsername(loginData.validUsername)
    loginPage.enterPassword(loginData.leadingTrailingPassword)
    loginPage.interceptMessage()
    loginPage.clickLogin()
    loginPage.errorMessage()
    loginPage.waitMessage()
  })
})