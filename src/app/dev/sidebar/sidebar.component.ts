
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PetList, Pet } from '../pet/pet';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Auth1Service } from '../services/auth1.service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';


import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { list, pet } from '../pet/pet';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  appUrl = environment.apiUrl;
  userPk: number;
  iconSize: number = 1;

  pets: Pet[];
  position = 'before';
  constructor(
    private http: HttpClient,
    private auth: Auth1Service, ) {}



  list: any;
  appUrl: string = 'http://wooltari-test-server-dev.ap-northeast-2.elasticbeanstalk.com/profile/3/pets/';
  // pets: pet[];


  ngOnInit() {
    this.getPetList();
  }


  getPetList() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Token ${this.auth.getToken()}`);
    this.http.get<PetList>(`${this.appUrl}/profile/${this.auth.getUserPk()}/pets/`, { observe: 'response' })
      .subscribe(res => {
        this.pets = res.body.pets;
        console.log(this.pets);
        this.getPetPk();
        this.minPetPk();
        console.log('[min]', this.minPetPk())
      });
  }
  getPetPk(): number {
    return 
  }

  minPetPk(): number {
    return Math.min(...(this.pets.map((pet) => pet.pk)))
  }
  // toggleComplete(id: number) {
  //   // this.todos.forEach(todo => {
  //   //   todo = todo.id === id ? Object.assign(todo, { completed: !todo.completed }) : todo;
  //   // });
  //   this.todos = this.todos.map(todo => {
  //     return todo.id === id ? Object.assign(todo, { completed: !todo.completed }) : todo;
  //   });
  // }
  // getCSSClasses(flag: number) {
  //   let cssClasses;
  //   let petPk = this.pets.map(pet => pet.pk)

  //   if (flag == ) {
  //     cssClasses = {
  //       'one': true, 'two': true
  //     }
  //   }
  //   else {
  //     cssClasses = {
  //       'two': true, 'four': false
  //     }
  //   }
  //   return cssClasses;
  // }


  getPetList() {
    // this.http.get<list>(this.appUrl)
    //   .subscribe(list => {
    //     this.list = list;
    //     this.pets = this.list.pets;
    //     console.log(this.pets);
    //   },
    //   err => console.log(err.status, err.url),
    //   () => console.log('Done'));
  }

}