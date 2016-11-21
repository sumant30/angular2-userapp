import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { UsernameValidator } from './usernameValidator';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {

    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([Validators.required,UsernameValidator.usernameCannotHaveSpace])],
            password: ['', Validators.required]
        });
    }


    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required),
    // });

    signup() {
        console.log(this.form.value);
    }
}