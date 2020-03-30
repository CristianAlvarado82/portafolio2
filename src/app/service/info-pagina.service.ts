import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:InfoPagina={};
  cargada=true;
  equipo: any[] =[]; 

  constructor(private http: HttpClient) { 
  console.log('creado servicio info');
  this.cargarInfo();
  this.cargarEquipo();

  }

  private cargarInfo(){
    //leer el archivo json
    this.http.get('assets/data/data-paginas.json')
        .subscribe((resp: InfoPagina) => {
          this.cargada=true;
          this.info=resp;
          console.log(resp.twitter);
          console.log(resp['facebook']);
        });
  }

  private cargarEquipo(){
    this.http.get('https://angular-practicas.firebaseio.com/equipo.json')
        .subscribe((resp:any[]) => {
          this.equipo=resp;
          console.log(resp);
        });
  }
}
