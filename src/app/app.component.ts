import { Component, ViewEncapsulation } from '@angular/core';
import { TranslationService, AuthenticationService } from '@alfresco/adf-core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(public datepipe: DatePipe,translationService: TranslationService,
              private authService: AuthenticationService,
              private router: Router) {
    translationService.use('en');
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
