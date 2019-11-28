import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  item: Observable<Item>;

  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.geItems();
  }

  itemList(){
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  geItems(){
    this.itemsCollection = this.afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  deteleItem(item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item}`);
    this.itemDoc.delete();
  }

  editItem(item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item}`);
    this.itemDoc.update(item);
  }
}
