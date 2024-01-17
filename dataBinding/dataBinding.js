import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    employees=[
        {
            Id:101,
            Name:'John',
            Salary:50000
        },
        {
            Id:102,
            Name:'Krish',
            Salary:30000
        },
        {
            Id:103,
            Name:'Joseph',
            Salary:20000
        }
    ]

    handleSelect(event){
        const empno=event.target.dataset.empno;
        const empname=event.target.dataset.empname;
        alert(`code=${empno} and Name:${empname}`);

    }

    handleClear(event){
        const empno = event.target.dataset.empno;
       // this.template.querySelector("lightning-input[data-empno='empno']").value="";
       this.template.querySelector(`lightning-input[data-empno='${empno}']`).value="";

    }

    handleClearFirst(){
this.template.querySelector("lightning-input[data-empno='101']").value='';
    }

    handleClearAll(){
       /* a = Array.from(this.template.querySelector("lightning-input"));
        a.forEach(element => {
            element.value='';
        });*/

        Array.from(this.template.querySelectorAll("lightning-input")).forEach(e=>e.value="")


    }
    
    
 


}