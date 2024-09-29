import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spot-deletion-row',
  templateUrl: './spot-deletion-row.component.html',
  styleUrls: ['./spot-deletion-row.component.css']
})
export class SpotDeletionComponent {
  @Input() spot: any; // Define 'spot' as an input property to accept data from parent component
}
