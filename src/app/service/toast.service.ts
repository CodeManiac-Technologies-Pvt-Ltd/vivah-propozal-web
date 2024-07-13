import { Injectable } from '@angular/core';

declare var Toast:any;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  success(title: string) {
    Toast.fire({
      type:'success',
      title:title
    })
  }
  error(title: string) {
    Toast.fire({
      type: 'error',
      title: title
    })
  }
}
