import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toast: MatSnackBar) {}

  customToast(infoMessage: string, duration?: number): void {
    this.toast.open(infoMessage, 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: duration ? duration : 2500
    });
  }
}
