import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

type SnackbarTypes = 'info' | 'error';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public showSnackbar(text: string, type: SnackbarTypes = 'info'): void {
    const config = { duration: 2500, panelClass: `snackbar-${type}` };
    Promise.resolve().then(() => this.snackBar.open(text, null, config));
  }
}
