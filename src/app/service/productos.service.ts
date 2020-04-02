import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true;
  productos: ProductoInterface[] =[];
  filtrados:ProductoInterface[]=[];

  constructor(private http:HttpClient) { 

    this.cargarProductos();

  }

  private cargarProductos(){

    return new Promise((resolve , reject)=>{
      this.http.get('https://angular-practicas.firebaseio.com/productos_idx.json')
          .subscribe((resp:ProductoInterface[])=>{
      this.productos = resp;
      this.cargando = false;
      resolve();
      //console.log(this.productos);
      /*setTimeout(() => {
        this.cargando = false;
      }, 2000);*/
      })

    })

    
  }

  public getProductos(id:string){
    return this.http.get('https://angular-practicas.firebaseio.com/productos/'+id+'.json') 
  }

  public buscarProductos(termino: string){
    if(this.productos.length===0){
      this.cargarProductos().then(()=>{
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino:string){
    this.filtrados=[];
    this.productos.forEach(prod =>{
      if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){
        this.filtrados.push(prod);
      }
    })
  }
}
