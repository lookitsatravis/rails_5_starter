const { environment } = require('@rails/webpacker')
const webpack = require('webpack');
const vue =  require('./loaders/vue')
const pkg = require('../../package.json');
const childProcess = require('child_process')

const commitSha = process.env.HEROKU_TEST_RUN_COMMIT_VERSION || process.env.SOURCE_VERSION || childProcess.execSync('git rev-parse --short HEAD');

environment.loaders.append('vue', vue)
environment.plugins.append('DefinePlugin', new webpack.DefinePlugin({
  'process.env.VERSION': JSON.stringify(`${pkg.name}-${pkg.version}-${commitSha.toString().substring(0, 7).trim()}`),
  'process.env.APP_ENV': process.env.RAILS_ENV ? `'${process.env.RAILS_ENV}'` : "'development'",
}));

module.exports = environment
