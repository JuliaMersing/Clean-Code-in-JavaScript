/* function draw(element, config) {
  config.width = config.width || 200;
  config.height = config.height || 200;
  config.margin = config.margin || 28;
  config.padding = config.padding || 14;
  console.log(config);
}

draw(null, { margin: 100, padding: 50 }); */

function draw(element, config) {
  let defaults = {
    width: 200,
    height: 200,
    margin: 28,
    padding: 14,
  };
  config = {
    ...defaults,
    ...config,
  };
  console.log(config);
}

draw(null, { margin: 100, padding: 50 });
