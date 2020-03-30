import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../service/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  gestion: number = new Date().getFullYear();
  constructor(public infoPaginaService:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
