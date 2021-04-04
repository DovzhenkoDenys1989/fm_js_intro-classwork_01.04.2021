/*
new Ladder(); - ЛЕСТИНИЦА
value - та ступенька на который сейчас
up() - поднимает вас на одну ступеньку
down() - опускает на одну
showStep() - показывает на какой вы ступеньке

Сделать это возможным:
ladder.up().up().down().showStep();

*/
function Ladder(value){
  this.value = 0;
  
  }
  
  Ladder.prototype = new LadderPrototype();
  function LadderPrototype() {
    this.up = function up(){
      this.value++;
      return this;
   }
  
   this.up = function down(){
     this.value--;
     return this;
   }
  
   this.showStep = function showStep(){
   return this.value;
   }
  }
  
  const ladder = new Ladder(5);
  
  //ladder.up();
  //ladder.up();
  //ladder.down();
  //ladder.showStep();
  
  ladder.up().up().down().showStep();