import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reprovado',
  templateUrl: './reprovado.component.html',
  styleUrls: ['./reprovado.component.css'],
})
export class ReprovadoComponent implements OnInit {
  image: string = '/assets/images/reprovado.png';

  constructor() {}

  ngOnInit(): void {}
}
