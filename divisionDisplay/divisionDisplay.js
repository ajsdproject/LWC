import { LightningElement } from 'lwc';

export default class DivisionDisplay extends LightningElement {
    style;
    message='Welcome';

    handleClick(event){
        if(event.target.name=='red'){
            this.style='redStyle';
        }
        else if(event.target.name=='blue'){
            this.style='blueStyle';
        }

    }
}