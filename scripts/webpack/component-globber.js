const {lstatSync, readdirSync} = require('fs');
const {basename, join, resolve} = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory);

function getPackages() {
  const components = [];
  const directories = getDirectories(resolve(__dirname, '../../test/screenshot'));
  directories.forEach((directory) => {
    components.push(basename(directory));
  });

  return components.filter((component) => component !== 'images');
}

function getComponents() {
  return getPackages().concat([
    // manually add sub-components
    'text-field/icon',
    'text-field/helper-text',
  ]);
}

module.exports = {getComponents};