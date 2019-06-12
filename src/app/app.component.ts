import {ChangeDetectorRef, Component, OnInit, OnDestroy, AfterViewChecked} from '@angular/core';
import { LoaderService } from '@core/services/loader.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {
  public showLoader: boolean = false;
  public destroyEvent = new Subject();

  constructor(
    private loaderService: LoaderService,
    private router: Router,
    private detector: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.loaderService.loaderInfo.pipe(takeUntil(this.destroyEvent)).subscribe(loader => this.showLoader = loader.show);
  }

  ngOnDestroy() {
    this.destroyEvent.next();
    this.destroyEvent.complete();
  }

  ngAfterViewChecked() {
    this.detector.detectChanges();
  }
}
