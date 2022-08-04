import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  classeProp = 'verde'

  arrClassi = ["rosso", "bold"]

  isBald = false
  constructor() { }

  fontSize = 16

  isVisible = true

  styleObj = {'font-size': this.fontSize + 'px', 'color' : 'blue'}
  //attenzione che il valore lo ottiene all'inizio della vita del component.
  //se fontSize cambia non cambia automaticamente anche styleObj
  ngOnInit(): void {
  }


arr = ['a', 'b', 'c', 'd', 'e', 'f']
}
