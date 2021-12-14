//Tip 11. Avoid Callbacks, use promises instead

function getSensorAData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        min: 8,
        max: 118,
      });
    }, 2000);
  });
}

function getSensorBData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        temp: 78,
        value: 26,
      });
    }, 500);
  });
}

function getSensorCData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        min: 14,
        max: 92,
        temp: 64,
        value: 12,
      });
    }, 2000);
  });
}

function combineSensorData() {
  Promise.all(getSensorAData(), getSensorBData(), getSensorCData()).then(
    (results) => {
      let getSensorAData = results[0];
      let getSensorBData = results[1];
      let getSensorCData = results[2];
    }
  );
}
