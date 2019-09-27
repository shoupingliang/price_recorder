import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private basePath = '/shares';
  public items: any;
  public item: any;

  constructor(private db: AngularFireDatabase) {
   }


  addPrice(data){
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log('Success');
    
  }
  getPrice(path){
    return this.db.list(path).valueChanges();
  }
}
