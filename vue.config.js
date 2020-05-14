
  module.exports = {
    devServer: {
      proxy: {
        "/route": {
          target: "https://5ebc630aec34e90016191800.mockapi.io/api/v1/",
        //  target: "http://localhost/blogApi/public/",
        }
      }
    },

  }