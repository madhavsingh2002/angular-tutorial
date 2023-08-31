import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  presentDate = new Date();
  // Build-in-Pipes 
  // Build-in-Pipes | Async
  timeChange!: Observable<string>;
  // Build-in-Pipes | Currency Pipe
  price:number =20000
  ngOnInit() {
    this.timeChange = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }
}
