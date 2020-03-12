module.exports = {
  'home page renders elements': function (browser) {
    const homePage = browser.page.HomePage()

    homePage
      .navigate()
      .waitForElementVisible('@app', 500)
      .assert.visible('@logoImage')

    browser.end()
  }
}
