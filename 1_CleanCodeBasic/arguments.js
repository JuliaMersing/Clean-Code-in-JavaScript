//Tip 9. Reduce number of arguments

function draw(element, config) {
  element.style.width = config.width;
  element.style.height = config.height;
  element.style.backgroundColor = config.backgroundColor;
  elemnt.style.color = config.color;

  return element;
}

draw(document.document.querySelector("#whatever"), {
  width: 240,
  height: 300,
  backgroundColor: "red",
  color: "green",
  margin: 14,
  padding: {
    paddingLeft: 20,
  },
});
