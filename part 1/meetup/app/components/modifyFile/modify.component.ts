import { Component } from '@angular/core';
import { ModifyService} from './modify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'modify',
    templateUrl: './app/components/modifyFile/modify.component.html',
    providers: [ModifyService]
})
export class ModifyComponent{
    public email: string;
    public text: string;

    constructor(private router: Router, private modifyService: ModifyService){
        this.email = "";
        this.text = "";
    }

    public modify(){
        this.modifyService.modify(this.email, this.text)
        .subscribe(response => {
            alert("Done!");            
        })
    }
}