import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-last-item',
  standalone: true,
  imports: [],
  templateUrl: './last-item.component.html',
  styleUrl: './last-item.component.scss'
})
export class LastItemComponent  {

  @Input() headline!: string;


}
