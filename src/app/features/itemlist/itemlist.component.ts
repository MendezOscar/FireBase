import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion/conexion.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  items: any;

  constructor(private conexionService: ConexionService) { 
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.conexionService.itemList().subscribe(data =>{
      this.items = data;
    });
  }

  deletItem(id: number) {

  }
}
