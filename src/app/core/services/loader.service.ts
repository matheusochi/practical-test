import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loaderInfo: Subject<{ show: boolean }> = new Subject();

  public showLoader(): void {
    this.loaderInfo.next({ show: true });
  }

  public hideLoader(): void {
    this.loaderInfo.next({ show: false });
  }
}
