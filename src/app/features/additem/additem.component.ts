import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion/conexion.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  item: any = {
    name: ''
  }
  constructor(private conexionService: ConexionService) { }

  ngOnInit() {
  }

  addItem() {
    this.conexionService.addItem(this.item);
    this.item.name = '';
  }

}
