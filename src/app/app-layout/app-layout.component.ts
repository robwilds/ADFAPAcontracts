import { Component, OnInit } from '@angular/core';
import { TranslationService, AuthenticationService} from '@alfresco/adf-core';
import { PeopleApi } from '@alfresco/js-api';

@Component({
  selector: 'app-root',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit{

  userName: string = null;
  userFullName: string = null;
  userImage: any;

constructor (private authService: AuthenticationService) {
}

ngOnInit(): void {
    
  this.userName = this.authService.getEcmUsername();
  // this.userImage = this.authService.peopleApi.getAvatarImage('-me-');
  this.userImage = "";
  console.log("profile pic url ",this.userImage);
}
}
