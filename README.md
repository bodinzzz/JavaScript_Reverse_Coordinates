# JavaScript_Reverse_Coordinates

## Overview
This is a small project written in JavaScript that aims to help with the usage of GeoJson maps in React-Simple-Map. When using React-Simple-Map, the GeoJson files used for the maps must have clockwise coordinates to be displayed properly. However, when using GeoJson files generated from MapShaper, the coordinates may not be in the correct order. This is where this project comes in handy.

By using `reverseCoordinates`, you can convert the coordinates of a single area of a GeoJson file to clockwise order. Additionally, by using `reverseMapData`, you can convert an entire GeoJson file to clockwise order with ease. The project can be run in Node.js by executing `node reverseCoordinates.js` or `node reverseMapData.js` in the command line.
