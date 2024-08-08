// src/app/api-data/api-data.component.ts
import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data',
  standalone: true,
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
  imports:[CommonModule]
})
export class ApiDataComponent implements OnInit {
  apodData: any;
  errorMessage: string = '';

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    console.log('ApiDataComponent initialized');
    this.nasaApiService.getApod().subscribe(
      (data) => {
        this.apodData = data;
        console.log('API Data:', data);
      },
      (error) => {
        console.error('Error fetching APOD data', error);
        this.errorMessage = 'Failed to load data. Please try again later.';
      }
    );
  }
}
