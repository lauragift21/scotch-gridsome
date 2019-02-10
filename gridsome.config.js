// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Fancy Random Profile',
  siteUrl: '',
  siteDescription: 'A directory listing of random humans profile',
  plugins: [
    {
      use: '@gridsome/source-faker',
      options: {
        numNode: 50
      }
    }
  ]
}