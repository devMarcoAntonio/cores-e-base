import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
  
    constructor() {

  }
  

  reset() {
    this.minhacor,
    this.cordefundo = '';
      
    };
    
  minhacor = '#0000FF';
  cordefundo = '#FFFF00';

 
 
  hexatorgb() {
    
    this.minhacor = '#000000';
    this.cordefundo = '#FF0000';
   }
   hexatorgb2(){

    this.minhacor = '#000000';
    this.cordefundo = '#00FF00';
   }
   hexatorgb3(){

    this.minhacor = '#000000';
    this.cordefundo = '#0000FF';
   }
   hexatorgb4(){

    this.minhacor = '#000000';
    this.cordefundo = '#FFFF00';
   }
   hexatorgb5(){

    this.minhacor = '#000000';
    this.cordefundo = '#CCEEFF';
   }
   
  }
  