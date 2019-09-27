import { Component, OnInit } from '@angular/core';


import { ShareService } from 'src/app/share.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public price: Observable<any[]>;
  constructor(private shareService: ShareService) { }

  ngOnInit() {
    this.price = this.getPrice('/share')
  }
  getPrice(path){
    return this.shareService.getPrice(path);
  }

}
