import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidators } from './name-validators';
@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
// abstractControl (abstract control is abstract class from which FormControl, FormGroup inherts proprties and methods)
export class ReactiveFormsComponent {

// FORM BUILDER EXAMPLE (SHORTER syntax FOR ALL BELOW STUFF THAT WE WRITE)
constructor(fb: FormBuilder)
{
  fb.group({
    nameB:['',Validators.required],
    accountB: fb.group({
      nameB: [],
      emaiB:[]
    }),
    topicsB: fb.array([])
  })
}

  form = new FormGroup({
    // nested form group
    account: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', []),
    }),

    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      [
        Validators.required, //send reference of fn
        Validators.minLength(3), //minLenght returns fn and send this fn as reference
        NameValidators.cannotContainSpace, //send reference of fn
      ],
      NameValidators.shouldBeUnique //async form validation
    ),
  });
  // FORM ARRAY EXAMPLE
  formArr = new FormGroup({
    topics: new FormArray([]),
  });
  get getTopics() {
    return (this.formArr.get('topics') as FormArray);
  }
  addTopic(topic: HTMLInputElement) {
    (this.formArr.get('topics') as FormArray).push(
      new FormControl(topic.value)
    );
    topic.value = '';
  }
  removeTopic(topic: FormControl | AbstractControl) {
   let index =   this.getTopics.controls.indexOf(topic as FormControl)
   this.getTopics.removeAt(index)
  }
  get name() {
    return this.form.get('name');
  }
  login() {
    let isValid = false;
    if (!isValid) {
      //abstractConrol have method setError to log errors

      //for particlar form control
      // this.email.setErrors

      //for form group
      this.form.setErrors({
        invalidLogin: true,
      });
    }
  }
}
