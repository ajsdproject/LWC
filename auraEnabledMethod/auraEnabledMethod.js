import { LightningElement,wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerVS.getAccountList';

export default class AuraEnabledMethod extends LightningElement {
    value ;
    accountList;

    get options() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Cold', value: 'Cold' },
            { label: 'Warm', value: 'Warm' },
        ];
    }
    handleChange(event) {
        this.value = event.detail.value;
    }
    @wire (getAccountList,{Rating:'$value'})
    getAccountbasedOnRating({data,error}){
        if(data){
            this.accountList=data;
            console.log(data);
        }
        if(error){
            console.log(error);
        }
    }

}
