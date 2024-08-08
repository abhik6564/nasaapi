// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  imageUrl: string = '';
  errorMessage: string = '';

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.nasaApiService.getApod().subscribe(
      (data) => {
        this.imageUrl = data.hdurl; // Use 'hdurl' if you want the high-definition image
        console.log('API Image URL:', this.imageUrl);
      },
      (error) => {
        console.error('Error fetching APOD data', error);
        this.errorMessage = 'Failed to load image. Please try again later.';
      }
    );
  }
}
