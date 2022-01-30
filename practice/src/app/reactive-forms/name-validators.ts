import { AbstractControl, ValidationErrors } from '@angular/forms';
enum CourseActionType {
    ADD_ITEM = '[COURSE] Add Course',
  }
export class NameValidators {
    readonly type = CourseActionType.ADD_ITEM;
    saud='sa'
    yo()
    {console.log("ahs",CourseActionType.ADD_ITEM)
        console.log(this.type)
    }
  //this custom validator uses 'validatorFn' interface which tells whats the actual shape of this custom validatom have
  // u can see 'validatorFn' from Angular docs,
  // 'ValidationErrors' also avaible on Angular docs with type: ValidationErrors (it contain key value pairs), value can be a object
//   static means u should not create instance of this class to call this method (u can do it directly)
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

//   Async validations 
// this custom validaion check if email already exist on DB or not
static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null>{
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(control.value === 'saud')
            if (control.value === 'saud') {
                resolve( { shouldBeUnique: true }) 
              }
             else resolve(null);
        },2000 )
    })
   
}

}
