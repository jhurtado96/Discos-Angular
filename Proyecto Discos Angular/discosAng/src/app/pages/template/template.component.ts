import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {
    this.buildForm();
  }

  public register()
  {
    const cd = this.formulario.value;
    console.log(cd);
  }

  private buildForm()
  {
    this.formulario = this.formBuilder.group
    ({
      id: [, Validators.required],
      titulo: [,Validators.required],
      interprete: [,Validators.required],
      anyoPublicacion: [,Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
