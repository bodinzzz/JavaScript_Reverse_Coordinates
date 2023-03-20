/* Reverse the coordinates in a feature */
function reverseCoordinate(coordinates) {
  return coordinates.reverse();
}

const coordinates = [
  [120.48042300000009, 26.382641000000092],
  [120.47680700000012, 26.36846900000006],
  [120.48597000000007, 26.365971000000116],
  [120.485138, 26.35458000000017],
  [120.51068900000007, 26.36764000000005],
  [120.50653100000011, 26.373472000000106],
  [120.48042300000009, 26.382641000000092],
];

const coordinatesReverse = reverseCoordinate(coordinates);

console.log(coordinatesReverse);
