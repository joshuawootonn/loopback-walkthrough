
process.env.NODE_ENV = 'development';

const server = require('../server');
const chalk = require('chalk');
const models = server.models;
const async = require('async');
var ds = server.dataSources.db;
const data = require('./data-to-seed');

const deleteDataFromModel = (ele, cb) => {
  models[ele].destroyAll(err => {
    if (err) {
      return console.log(chalk.bgRed(ele + ' : ' + err));
    } else {
      console.log(chalk.white('Deleted ' + ele));
    }
    cb();
  });
};
const seedDataForModel = (ele, cb) => {
  models[ele].create(data[ele], (err, records) => {
    if (err) {
      return console.log(chalk.bgRed(ele + ' : ' + err));
    } else {
      console.log(chalk.white('Created ' + ele));
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
  } else {
    console.log(chalk.bgGreen('Deleted All'));

    async.eachSeries(modelNamesReverse, seedDataForModel, err => {
      if (err) {
        console.log(err);
        ds.disconnect();
      } else {
        console.log(chalk.bgGreen('Created All'));
        ds.disconnect();
      }
    });
  }
});
