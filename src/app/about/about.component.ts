import { Component, OnInit } from '@angular/core';
import {AboutService} from './about-service.service'
import {Subscription} from 'rxjs';
import { BusyModule, BusyDirective } from 'angular2-busy';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {

  dataflowVersionInfo;
  busy: Subscription;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    console.log('init');
    this.getVersionInfo();
  }

  getVersionInfo(): void {
    this.busy = this.aboutService.getAboutInfo().subscribe(
      data => {
        console.log('>>>>>>>>>>>', data);
        this.dataflowVersionInfo = data;
      }
    );
  }
}
