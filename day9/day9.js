import { LightningElement,track} from 'lwc';

export default class Day9 extends LightningElement {
    @track product = {
        name : 'Apple',
        price : 120,
        stock : 20
    }
     isShow;


    handleChange(event){
        if(event.target.name=='numStock'){
            //this.product.stock = event.target.value;
            if(this.product.stock>=event.target.value){
               this.isShow=true;
            }
            if(this.product.stock==0){
                this.isShow=false;

            }
        }

           
        }  
    }