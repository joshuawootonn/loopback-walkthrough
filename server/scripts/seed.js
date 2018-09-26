const server = require('../server');
const chalk = require('chalk');
const models = server.models;
const async = require('async');
var ds = server.dataSources.db;
const data = require('./dummy-data');

const deleteDataFromModel = (modelName, cb) => {
  models[modelName].destroyAll(err => {
    if (err) {
      return console.log(chalk.bgRed(modelName + ' : ' + err));
    } else {
      console.log(chalk.white('Deleted ' + modelName));
    }
    cb();
  });
};

const seedDataForModel = (modelName, cb) => {
  models[modelName].create(data[modelName], (err, records) => {
    if (err) {
      return console.log(chalk.bgRed(modelName + ' : ' + err));      
    } else {
      console.log(chalk.white('Created ' + modelName));
    }
    cb();
  });
};

const modelNames = [
  'student',
  'subject',
  'locker',
  'class',
  'enrollment',
  'teacher'  
];
const modelNamesReverse = modelNames.reverse();

async.eachSeries(modelNames, deleteDataFromModel, err => {
  if (err) {
    console.log(err);
    ds.disconnect();
    throw(err);
  } else {
    console.log(chalk.bgGreen('Deleted All'));
    async.eachSeries(modelNamesReverse, seedDataForModel, err => {
      if (err) {
        console.log(err);
        ds.disconnect();
        throw(err);
      } else {
        console.log(chalk.bgGreen('Created All'));
        ds.disconnect();
      }
    });
  }
});
