import { Component } from '@angular/core';
import { StorageService } from '@alfresco/adf-core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private storageService:StorageService){}

  setDefaultTheme(){
    var theme = '{"primary":"#2196f3","accent":"#ff9800","name":"ECM Blue Orange","href":"adf-blue-orange.css","isDark":false}';
    this.storageService.setItem("docs-theme-storage-current", theme);
    //this.styleManager.setStyle('theme',JSON.parse(theme).href);
    this.setStyle('theme',JSON.parse(theme).href);
    console.log('*** THEME SET ***');
}
setStyle(key: string, href: string) {

  const linkEl = document.createElement('link');

  linkEl.setAttribute('rel', 'stylesheet');

  linkEl.setAttribute('type', 'text/css');

  linkEl.setAttribute('href', href);



  linkEl.classList.add(this.getClassNameForKey(key));

  document.head.appendChild(linkEl);

  return linkEl;

}



getClassNameForKey(key: string) {

  return `style-manager-${key}`;

}

}
