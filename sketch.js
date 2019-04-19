let generator;
let map;
let cols = 40;
let rows = 40;
function setup() {
  createCanvas(600, 600);
  var rms = floor(random(25, 40))
  console.log(rms)
  map = new Map(rows, cols, (width-1)/rows,rms);
  map.fill();

  
  generator= new MapGenerator(map, rms, 4,6,4,6)
  generator.buildRooms();
  }

function draw() {
  background(0);
    
  for (let i = 0; i<map.width; i++){
    for (let j = 0; j<map.height; j++){
     map.cells[cellAt(i,j)].show(map);
      
    }
  
  }
}

