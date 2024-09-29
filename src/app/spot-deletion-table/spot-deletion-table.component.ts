import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spot-deletion-table',
  templateUrl: './spot-deletion-table.component.html',
  styleUrls: ['./spot-deletion-table.component.css']
})
export class SpotDeletionTableComponent implements OnInit {
  spots: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8081/api/spots').subscribe((data: any) => {
      this.spots = data;
    });
  }
}
