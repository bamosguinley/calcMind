import { Component } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent {
 operator:string[]=["+","-","*","/"];
 firstMember:number=0;
 secondMember:number=0;
 currentOperator:string='';
 currentResult:number=0;
 userInput!:string;
 countFind:number=0;
 opertionInterval:any;
time:number=10;
oparationNumber:number=10;
ngOnInit(){
  this.currentOperator=this.operator[Math.floor(Math.random()*this.operator.length)];
  this.firstMember= Math.floor(Math.random()*9)
  this.secondMember= Math.floor(Math.random()*9)
  switch(this.currentOperator){
    case '-':
    if (this.firstMember<this.secondMember) {
      this.createOperation();
    }
    break;
   case '*':
    if (this.firstMember===0 && this.secondMember===0) {
      this.createOperation();
    }
    break;
    case'/':
    if (this.secondMember===0 || this.firstMember===0 || (this.firstMember/this.secondMember)%2!==0) {
      this.createOperation();
    }
 }
if (this.oparationNumber>0) {
  this.opertionInterval=setInterval(()=>{
  this.time--;
  if (this.time==0) {
    this.time=10;
    this.showResult()
  }
  if (this.oparationNumber<=0) {
    clearInterval(this.opertionInterval);
  }
  },1000)
}else{
  clearInterval(this.opertionInterval);
}
this.oparationNumber--
}
 createOperation(){
  this.currentOperator=this.operator[Math.floor(Math.random()*this.operator.length)];
  this.firstMember= Math.floor(Math.random()*9)
  this.secondMember= Math.floor(Math.random()*9)

  console.log(this.firstMember+this.currentOperator+ this.secondMember);
  
 }
 makeOperation(){
  switch(this.currentOperator){
    case '+':
      this.currentResult=this.firstMember+this.secondMember; 
      break;
    case '-':
    this.currentResult=this.firstMember-this.secondMember ;
    break;
    case '*': 
    this.currentResult=this.firstMember*this.secondMember ;
    break;
    case '/':
      this.currentResult=this.firstMember/this.secondMember ;
      break;
      default: 
      console.log("error");
 }
}
showResult(){
this.makeOperation();
if (this.oparationNumber>0) {
  if (this.currentResult==parseInt(this.userInput)) {
    this.countFind++;
    this.userInput='';
    this.time=10;
    this.createOperation();
  } else{
    this.countFind=this.countFind
    this.userInput='';
    this.createOperation();
  }
  this.oparationNumber--;
  this.time=10;
}
}}