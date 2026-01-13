export class Pet {
    constructor(name){
        this.name=name;
        this.hunger=0;
        this.happiness=0;

}


feed(){
this.hunger= Math.max(0,this.hunger-15);
this.happiness = Math.min(100,this.happiness+5);
return `${this.name} is full and happy!`;
}



play(){
this.happiness = Math.min(100,this.happiness+20);
this.hunger= Math.max(0,this.hunger+10);
return `${this.name} loved playing with you!`;

}

getStatus() {
  
  if (this.hunger >= 85 || this.happiness < 20) {
    return "Very Sad!";
  }

  
  if (this.hunger >= 70 || this.happiness < 40) {
    return "Sad";
  }

  
  if (this.hunger >= 40 || this.happiness < 70) {
    return "Feeling Meh...";
  }

  
  return "Doing Great!";
}
}
