import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  user : Utilisateur=new Utilisateur();
  constructor(private userService:UtilisateurService, private router:Router) { }

  ngOnInit(): void {
  }

  public save(){
    this.userService.saveUtilisateur(this.user).subscribe(()=>{this.user=new Utilisateur;
      this.router.navigateByUrl("/home");}
    )
  }

}
