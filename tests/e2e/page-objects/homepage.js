module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    app: {
      selector: '#app'
    },
    logoImage: {
      selector: '.logo'
    },
    tagLine: {
      selector: '.tagline'
    }
  }
}
