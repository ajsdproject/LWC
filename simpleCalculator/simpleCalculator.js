import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
   no1;
   no2;
   input1;
   input2;
   result;

   handleChange(event){
    if(event.target.name==='input1'){
        this.no1=event.target.value;
    }
    else if(event.target.name==='input2'){
        this.no2=event.target.value;
    }   
   }
   handleClick(event){
    if(event.target.name=='btnadd'){
        this.result=parseInt(this.no1)+parseInt(this.no2);
    }
     else if(event.target.name=='btnsub'){
        this.result=parseInt(this.no1)-parseInt(this.no2);

    }
    else if(event.target.name=='btnmul'){
        this.result=parseInt(this.no1)*parseInt(this.no2);
    }
    else if(event.target.name=='btndiv'){
        this.result=parseInt(this.no1)/parseInt(this.no2);
    }
    
    }
    handleClear(event){
if(event.target.name=='btnclr'){
    this.result='';
}
    }

 
}