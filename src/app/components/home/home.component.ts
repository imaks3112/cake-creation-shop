import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images: any[] = [
    {
      previewImageSrc:'../../../assets/img/cake_creation_21.jpg',
      thumbnailImageSrc:'../../../assets/img/cake_creation_22.jpg',
      alt: 'Cascading Style Sheet',
      title: 'cake',
    },
    {
      previewImageSrc:'../../../assets/img/cake_creation_22.jpg',
      thumbnailImageSrc:'../../../assets/img/cake_creation_22.jpg',
      alt: 'Angular for Front end',
      title: 'cake',
    },
    {
      previewImageSrc:'../../../assets/img/cake_creation_23.jpg',
      thumbnailImageSrc:'../../../assets/img/cake_creation_22.jpg',
      alt: 'Java Programming Language',
      title: 'cake',
    },
    {
      previewImageSrc:'../../../assets/img/cake_creation_24.jpg',
      thumbnailImageSrc:'../../../assets/img/cake_creation_22.jpg',
      alt: 'HyperText Markup Language',
      title: 'cake',
    },
  ];
}
