 class Map{
     constructor (_width, _height, scale, numRooms){
     this.width = _width;
     this.height = _height;
     this.cells = [];
     this.scale = scale;
     this.numRooms = numRooms;
       
     }
     
    
   fill(){
         
       for(let i = 0; i<this.width; i++){
         
         for(let j = 0; j< this.height; j++){
           
           this.cells.push(new Cell(i,j, true, true));
           
         }
       
       }
     } 
 
   carveRoom(room){

   }
 }
