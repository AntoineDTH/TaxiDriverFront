import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { VehiculeService } from 'src/app/service/vehicule.service';

@Component({
  selector: 'app-chauffeurs',
  templateUrl: './chauffeurs.component.html',
  styleUrls: ['./chauffeurs.component.scss']
})
export class ChauffeursComponent implements OnInit {
  chauffeurs:any=null;
  constructor(private userService:UtilisateurService,private vehiculeService:VehiculeService) { }

  ngOnInit(): void {
  }

  public tri(){
    this.userService.triChauffeur().subscribe(data=>{this.chauffeurs=data});
  }


}
