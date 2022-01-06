const stubby = require('stubby');
const yaml = require('js-yaml');
const fs = require('fs');

const mockService = new stubby.Stubby();
const STUB_FILENAME = 'configStubs.yml';

function getDataFromYamlFile(fileName) {
  let fileData;
  if (fileName === null) {
    return [];
  }

  try {
    fileData = (fs.readFileSync(fileName, 'utf8')).trim();
  } catch (e) {
    console.warn(`File ${fileName} could not be found. Ignoring...`);
    return [];
  }

  try {
    return yaml.load(fileData);
  } catch (e) {
    console.warn(`Couldn't parse ${fileName} due to syntax errors:`);
    console.log(e.message);
    process.exit(0);
  }
  return [];
}

function checkConfigFileForEndpointsToEncrypt(configFileName) {
  const configFilePath = `${__dirname}/${configFileName}`
  return getDataFromYamlFile(configFilePath);
}

const stubData = checkConfigFileForEndpointsToEncrypt(STUB_FILENAME);

const options = {
  data: stubData,
  stubs: 3200,
  admin: 8893,
  quiet: false,
  datadir: 'src/stubs',
}

mockService.start(options);

process.on('SIGHUP', () => {
  mockService.delete(() => {
    mockService.start(options);
  });
});