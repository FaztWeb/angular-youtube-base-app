import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { log } from 'util';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: any){
    console.log(this.sanitizer.bypassSecurityTrustResourceUrl(url))
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
