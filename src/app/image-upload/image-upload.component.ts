import {Component} from '@angular/core';
import {ImageService} from '../shared/image.service';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.scss']
})
export class ImageUploadComponent {

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService){}

  // tslint:disable-next-line:typedef
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  // tslint:disable-next-line:typedef
  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  // tslint:disable-next-line:typedef
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(file);
      console.log(reader);
      console.log(this.selectedFile.src);
      this.selectedFile.pending = true;

    });

    reader.readAsDataURL(file);
  }
}
