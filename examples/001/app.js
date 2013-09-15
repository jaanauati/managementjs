

globalData = {'one':'ONE'};

if (require('managementjs')()) {
  process.exit();
} else {
  console.log('running app.');
}
