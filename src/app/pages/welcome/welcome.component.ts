import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  numbers = signal<number[]>([]);

  ngOnInit() {
    let n: number[] = []
    for (let i = 1; i < 100; i++) {
      n = [...n, i]
    }
    this.numbers.set(n);
  }

}
