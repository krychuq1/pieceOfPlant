import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  nameController;
  emailController;
  messageControler;
  EMAIL_PATTERN = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
  messageController;
  isProcessing: boolean;
  isSent: boolean;
  constructor(private formBuilder : FormBuilder){
    this.buildForm();
    this.isProcessing = false;
    this.isSent = false;
  }
  private buildForm() {
    this.contactForm = this.formBuilder.group( {
      name: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      email: this.formBuilder.control(null, [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]),
      message : this.formBuilder.control(null, [Validators.required, Validators.minLength(10)])
    });
    this.nameController = this.contactForm.get('name');
    this.emailController = this.contactForm.get('email');
    this.messageControler = this.contactForm.get('message');
  }

  public onSubmitForm(){
    //mock //todo add mailer in future
    this.isProcessing = true;
    setTimeout(()=>{
      this.isProcessing = false;
      this.isSent = true;
      setTimeout(()=>{
        this.isSent = false;
        this.contactForm.reset();
      },1500);
    },1500);
    let data ={
      name : this.nameController.value,
      from : this.emailController.value,
      message : this.messageControler.value,
    };

  }
}
