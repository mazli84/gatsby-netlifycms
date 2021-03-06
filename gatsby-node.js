const rucksack = require('rucksack-css');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const cssnested = require('postcss-nested');
const atImport = require('postcss-import');
const Shell  = require ('child_process');

exports.modifyWebpackConfig = function (config) {
  config.merge({
    postcss: [
      atImport(),
      cssnested,
      lost(),
      rucksack(),
      cssnext({
        browsers: ['>1%', 'last 2 versions']
      }),
    ],
  });

  return config;
};

exports.postBuild = function(pages, callback) {
  Shell.execSync("cp -r assets/* public/");
  callback();
};


