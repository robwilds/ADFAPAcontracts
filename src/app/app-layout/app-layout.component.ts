import { Component, OnInit } from '@angular/core';
import { TranslationService, AuthenticationService } from '@alfresco/adf-core';

@Component({
  selector: 'app-root',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit{

  userName: string = null;

constructor (private authService: AuthenticationService) {


}

ngOnInit(): void {
    
  this.userName = this.authService.getEcmUsername();
}
}
