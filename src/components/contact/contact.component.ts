import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  nameController;
  emailController;
  messageController;

  constructor(){

  }
  private buildForm() {
    // this.ticketForm = this.formBuilder.group( {
    //   type: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
    //   currency: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
    //   price: this.formBuilder.control(null, [Validators.required, Validators.pattern(this.NUMBER_PATTERN)])
    // });
    // this.priceController = this.ticketForm.get('price');
    // this.currencyController = this.ticketForm.get('currency');
    // this.typeController = this.ticketForm.get('type');
  }

}
