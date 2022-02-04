import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  forms!: FormGroup;

  rankList: string[] = ['CIVIL','LOUVETEAU','LOUP','LOUPAGUERRI','LOUPVETERAN','SERGENT']

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  saveCharacter() {
  console.log(this.forms.getRawValue())
  }

  redirectToHomePage() {

  }

  private initForm() {
    this.forms = this.formBuilder.group({
      fullName: new FormControl('',Validators.required),
      nickName: new FormControl('',Validators.required),
      age: new FormControl(null, Validators.required),
      rank: new FormControl('', Validators.required),
    });
  }
}
