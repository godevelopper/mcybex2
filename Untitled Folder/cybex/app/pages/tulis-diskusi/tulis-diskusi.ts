import {Page, NavController, Loading, Storage, SqlStorage, Toast} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from 'angular2/http';
import { bootstrap } from "angular2/platform/browser";
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl } from 'angular2/common';

@Page({
  templateUrl: 'build/pages/tulis-diskusi/tulis-diskusi.html',
})
export class TulisDiskusiPage {
  isi_diskusi: string;
  judul_diskusi: string;
  response: any;
  creds: string;
  
  constructor(public http: Http, public nav: NavController) {
    
  }
  
  kirim(http: Http){
      this.creds = JSON.stringify({isi_diskusi: this.isi_diskusi, judul_diskusi: this.judul_diskusi});
      this.http.post("http://210.16.120.17/api/tulis_diskusi.php", this.creds)
          .subscribe(data => {          
                  this.response = data._body;
      });
  }
}
