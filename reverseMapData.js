/* IMPORT */
const fs = require("fs");

/* File name we want to reverse*/
const fileName = "TaiwanMap4";

/* Read the map file we want to reverse the coordinates */
const mapData = JSON.parse(fs.readFileSync(fileName + ".json"));

/* check num of coordinate group in one feature */
const lengths = mapData.features.map((feature, index) => {
  return feature.geometry.coordinates.length;
});
console.log(lengths);

/* Reverse the coordinates in a feature */
function reverseCoordinate(coordinates) {
  return coordinates.reverse();
}

function isClockwise(points) {
  var n = points.length;
  var sum = 0;
  for (var i = 0; i < n - 1; i++) {
    sum += points[i][0] * points[i + 1][1] - points[i][1] * points[i + 1][0];
  }
  sum += points[n - 1][0] * points[0][1] - points[n - 1][1] * points[0][0];
  return sum > 0;
}

var times = 0;

mapDataReverse = mapData;
mapDataReverse.features.map((feature, index) => {
  const coordinatesGroup = feature.geometry.coordinates;
  coordinatesGroup.map((coordinates, key) => {
    // console.log(isClockwise(coordinates));
    if (!isClockwise(coordinates)) {
      // console.log(isClockwise(coordinates));
      coordinates = reverseCoordinate(coordinates);
    }
    console.log(feature.properties.area + " => " + isClockwise(coordinates));
  });
  times = times + 1;
});

console.log("times = " + times);

/* Write the reverse data to mapReverse.json file*/
fs.writeFileSync(fileName + "Reverse.json", JSON.stringify(mapDataReverse));
