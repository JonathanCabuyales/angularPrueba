import { Component, OnInit, ViewChild } from '@angular/core';

//librerai toast uso
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ViewChild(ToastContainerDirective, { static: true })
  // toastContainer!: ToastContainerDirective;

  constructor(
    private _toast: ToastrService
  ) { }

  ngOnInit(): void {
    // this._toast.overlayContainer = this.toastContainer;
  }

  mostarToast(){
    // this._toast.success('in div');
    this._toast.success('Hola', 'funciona', {
      closeButton: true,
      timeOut: 1500,
      easeTime: 200,
      easing: 'linear',
      progressAnimation: 'decreasing',
      progressBar: true,
      toastClass: 'ngx-toastr',
    });
  }

}
