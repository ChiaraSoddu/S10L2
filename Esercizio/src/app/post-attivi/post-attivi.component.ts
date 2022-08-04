import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  constructor() { }

  ngOnInit(){

    let f = fetch('../../assets/db.json')
    f.then((response)=> {
    return response.json();
    }).then(
      function(result) {
          console.log(result.posts);
          posts = result.users

          posts.forEach((e)=>{})
      })
  }

}
