import { LightningElement,wire} from 'lwc';

import insertContact from '@salesforce/apex/LWCImperativeApexDML.insertContact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ParentComponent extends LightningElement {
    LastName;
    MobilePhone;
    handleChange(event){
        if(event.target.name=="LastName")
        {
this.LastName = event.target.value;
        }
        if(event.target.name=="MobilePhone")
        {
this.MobilePhone = event.target.value;
        }
    }

    handleCreate(event){
        insertContact({LastName : this.LastName,MobilePhone : this.MobilePhone})
        .then(response=>{
            console.log(response)
           this.dispatchEvent(new ShowToastEvent({
            title:'Record Created successfully',
            message : response,
            variant:'success'
           }))
            
          

        })
        .catch(error=>{
            console.log(error)
            this.dispatchEvent(new ShowToastEvent({
                title:'Record Can not be created',
                message : response,
                variant:'error'
        }))

    })
}  
}   
    