import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loading=false;
  users:Utilisateur[]=[];
  constructor(private userService:UtilisateurService) { }

  ngOnInit() {
    /*this.loading=true;
    this.userService.findAll().pipe(first()).subscribe(users=>{
      this.loading=false;
      this.users=users;
    });*/
  }
}


