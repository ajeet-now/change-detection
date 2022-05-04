import { Component, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    const source = of('alok','ashok','aman');

    source
    .pipe(toArray())
    .subscribe(res =>{
      console.log("debug 100",res);
    })



  }

}
