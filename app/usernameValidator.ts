import { Control } from 'angular2/common';

export class UsernameValidator {
    static usernameCannotHaveSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainspace: true };
        }
        return null;
    }
}