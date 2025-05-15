import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class InputService {
    private inputs: { [key: string]: string } = {
        userName: '',
        email: '',
        password: '',
        phoneNumber: ''
    };

    setInput(key: string, value: string) {
        this.inputs[key] = value;
    }

    getInput(key: string): string {
        return this.inputs[key];
    }

    getAllInputs(): { [key: string]: string } {
        return this.inputs;
    }

    validateEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@example\.com$/;
        return emailPattern.test(this.inputs["emailInput"]);
    }
}