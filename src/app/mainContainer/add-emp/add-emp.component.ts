import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup, FormBuilder} from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BestEmployeesService } from '../best-employees/best-employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  employeeForm: FormGroup;

   constructor(private formbuilder:FormBuilder, private bestEmpService: BestEmployeesService){
    this.createEmployeeForm();
   }

   createEmployeeForm(){
    this.employeeForm=this.formbuilder.group({
      id:[this.generateARandomId(),Validators.required],
      name:["",Validators.required],
      phone_number:["", [Validators.required]],
      designation:["",Validators.required],
      gender: ["",Validators.required],
    })

    this.employeeForm.get("name").valueChanges.subscribe(value=>{});
  }

  ngOnInit(): void {}
 

handleSubmit(event: MouseEvent) {
  event.preventDefault();
  if(!this.employeeForm.invalid){
   console.log('Invalid name value');
   return;
 }
 this.bestEmpService.addItem({
   ...this.employeeForm.value,
 });

 this.employeeForm.reset();

}



 generateARandomId(min: number = 1000, max: number = 9999) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
 }

}
