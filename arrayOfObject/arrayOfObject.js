import { LightningElement} from 'lwc';

export default class ArrayOfObject extends LightningElement {
    
    filteredSalary;
    
   employees=[
    {
        Name:'Sanjay',
        Salary:20000,
        Position:'Developer'
    },
    {
        Name:'Sujan',
        Salary:40000,
        Position :'Associate Developer'
    },
    {
        Name:'darshan',
        Salary:20000,
        Position:'Lead'
    }
]

handleChange(event){
    if(event.target.name=='numSalary'){
   
  this.filteredSalary=this.employees.filter(emp=>emp.Salary>parseInt(event.target.value))
   
    }


}
}