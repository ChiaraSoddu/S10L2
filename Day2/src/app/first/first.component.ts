import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  testo = "Questo testo arriva dalla classe"

  isDisabled = true

  inputValue = "testo"

  constructor() { }//Lo usiamo rincipalmente per ricevere in parametri gli oggetti e servizi di angular

  ngOnInit(): void {
    // è qui che vogliamo andare a impostare la logica del sito
    // punto di partenza, metodo eseguito all'inizializzazione del component
  }

  cambiaTesto(){
    this.testo = "L'event binder della view ha modificato la proprietà nel model, il property binding ha aggiornato la view"
  }

  reset(){
    this.inputValue = 'testo'
  }
}


//////////////    DATA BINDING
/*

*/
