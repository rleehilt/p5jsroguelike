class MapGenerator{
    constructor(map, numRooms,minRoomWidth, maxRoomWidth, minRoomHeight, maxRoomHeight){      
        this.map = map;
        this.numRooms  = numRooms;
        this.miRoomWidth = minRoomWidth;
        this.maRoomWidth = maxRoomWidth;        
        this.miRoomHeight= minRoomHeight;
        this.maRoomHeight = maxRoomHeight;
    }
    
    buildRooms(){
       
        for(var i = 0; i<this.numRooms; i++){
          var rw = floor(random(this.miRoomWidth,this.maRoomWidth));
          var rh= floor(random(this.miRoomHeight, this.maRoomHeight));
          var rx = floor(random(2,(this.map.width-1)-rw));
          var ry = floor(random(2, (this.map.height-1)-rw))
          var r = new Room(rx,ry,rw,rh)     
           this.carveRoom(r);
        }
    }

    carveRoom(room){
      //console.log(room);
       
        for(var x = room.x;x< room.x + room.width;  x++)
        {
          
          for(var y=room.y; y<room.y + room.height; y++ )
          {
            var current =this.map.cells[cellAt(x,y)]         
            current.walls.NORTH = false;
            current.walls.SOUTH = false;
            current.walls.EAST = false;
            current.walls.WEST = false;
          }

              
        }


      }

    }