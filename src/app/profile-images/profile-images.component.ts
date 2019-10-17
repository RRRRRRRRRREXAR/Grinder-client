import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ImageModel } from '../models/ImageModel';



class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-profile-images',
  templateUrl: './profile-images.component.html',
  styleUrls: ['./profile-images.component.css']
})
export class ProfileImagesComponent implements OnInit {

  constructor(private imageService: ImageService) { }
  selectedFile: ImageSnippet;
  images: any;
  ngOnInit() {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
    })
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }
  deleteImage(id:string){
    this.imageService.deleteImage(id).subscribe(data=>{
      this.images=this.images.filter(img=>img.id!=id);
    });
  }
}
