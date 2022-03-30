import { Component, OnInit } from '@angular/core';
// import { MatSliderModule } from '@angular/material/slider';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {

  registro!: FormGroup;
  

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.registro = this._fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direc: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.registro.value);
    
  }

}
