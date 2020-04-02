import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
import { descripcion } from '../../interfaces/descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:descripcion;
  id:string;

  constructor(private route:ActivatedRoute,
              public productoService:ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros =>{

      console.log(parametros['id']);
      this.productoService.getProductos(parametros['id'])
          .subscribe((producto:descripcion) => {
            this.id=parametros['id'];
            this.producto=producto; 
          });
        
    })
  }

}
