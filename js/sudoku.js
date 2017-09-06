
function Grid (rowCount, columnCount){
  this.gameboard = new Array();
  this.rowCount = rowCount;
  this.columnCount = columnCount;
}

Grid.prototype.buildGrid = function(){
  for (var i = 0; i = this.rowCount; i++) {
    this.gameboard[i] = new Array();
    for (var j = 0; j = this.columnCount; j++) {
      this.gameboard[i][j] = 0;
    }
  }
}

Grid.prototype.populateGrid = function(){
  for(var i=0; i<this.rowCount; i++){
    this.gameboard[i] = i+1;
    for(var j=0; j<this.columnCount; j++){
      this.gameboard[i][j] = j+1;
    }
  }
}


function Block(x,y,blockIndex) {
  this.x = x;
  this.y =y;
  this.blockIndex = blockIndex;
  this.value = 0;
}

function grid(rowCount, columnCount){
  var gameboard = [];
  var blockIndex = 0;
  for (var i = 1; i <= rowCount; i++) {
    for (var j = 1; j <= columnCount; j++) {
      var rowDecimal = i / 3;
      var colDecimal = j / 3;
      if((colDecimal > 0 && colDecimal <= 1) && (rowDecimal > 0 && rowDecimal <= 1)){
        blockIndex = 1;
      }else if((colDecimal > 0 && colDecimal <= 1) && (rowDecimal > 1 && rowDecimal <= 2)){
        blockIndex = 4;
      }else if((colDecimal > 0 && colDecimal <= 1) && (rowDecimal > 2 && rowDecimal <= 3)){
        blockIndex = 7;
      }else if((colDecimal > 1 && colDecimal <= 2) && (rowDecimal > 0 && rowDecimal <= 1)){
        blockIndex = 2;
      }else if((colDecimal > 1 && colDecimal <= 2) && (rowDecimal > 1 && rowDecimal <= 2)){
        blockIndex = 5;
      }else if((colDecimal > 1 && colDecimal <= 2) && (rowDecimal > 2 && rowDecimal <= 3)){
        blockIndex = 8;
      }else if((colDecimal > 2 && colDecimal <= 3) && (rowDecimal > 0 && rowDecimal <= 1)){
        blockIndex = 3;
      }else if((colDecimal > 2 && colDecimal <= 3) && (rowDecimal > 1 && rowDecimal <= 2)){
        blockIndex = 6;
      }else if((colDecimal > 2 && colDecimal <= 3) && (rowDecimal > 2 && rowDecimal <= 3)){
        blockIndex = 9;
      }
        newBlock = new Block(i,j,blockIndex)
        gameboard.push(newBlock);
      // (Math.floor(Math.random() *9) + 1))
    }
  }
  return gameboard;
}

function createBlockIndexArrays(gameboard){
for(var i=1 ; i=9 ; i++){
  blockIndex = 
  for(var j=0 ; j<gameboard.length ; j++){
    if(j.blockIndex === i){

    }
  }
}
}

function Grid (rowCount, columnCount){
  this.gameboard = [];
  (function() {
    for(var i = 0; i = rowCount; i++) {
    this.gameboard[i].push(new Array());
      for (var j = 0; j = columnCount; j++) {
        this.gameboard[i][j].push(new Array());
      }
    }
  })();
}
