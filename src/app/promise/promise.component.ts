import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  result1:any;
  result2:any;
  promise:any;

  dell = {
    brand:'Dell',
    storage:"2TB",
    color:"black"
  }

  ngOnInit(): void {


    // let promise = new Promise((resolve,reject) => {
    //   setTimeout(() => {
    //     resolve("Data Received");
    //   }, 3000);
    // })

    // async function GetData(){

    //   let response = await promise;
    //   console.log(response);
    // }

    // GetData();

    this.result1 = document.getElementById("result1");
    this.result2 = document.getElementById("result2");

    const dell = {

    }
    this.promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.dell);
      },3000);
    })
  
  }

  fetch1(){
    this.result1.innerText = "fetching Data";

    this.promise.then((res: any) =>{
      console.log(res);
      this.result1.innerText = JSON.stringify(res);
    })
    
  }

  async fetch2(){

    this.result2.innerText = "Fetching Data"

    let res = await this.promise;
    
    this.result2.innerText = JSON.stringify(res);

  
  }

  fetch3(){
  
  }



}
