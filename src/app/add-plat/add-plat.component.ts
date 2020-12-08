import { Component, OnInit } from '@angular/core';

import {Plat} from '../model/plat';

import {PlatService} from '../shared/plat.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  plat: Plat;

  platForm: FormGroup;
  private selectedFile: ImageSnippet;
  constructor( private platService: PlatService, private router: Router) { }
  ngOnInit(): void {
    this.plat = new Plat();
    this.platForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      category: new FormControl('', [Validators.required])
    });
  }
  // tslint:disable-next-line:typedef
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(file);
      console.log(reader);
      this.plat.image = this.selectedFile.src;
      this.selectedFile.pending = true;

    });

    reader.readAsDataURL(file);
  }
  // tslint:disable-next-line:typedef
    add(imageInput: any){
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.plat.image = this.selectedFile.src;
      this.selectedFile.pending = true;

    });
    // touche app
    Object.assign(this.plat, this.platForm.value);
    console.log(this.plat.category);
    this.platService.postPlat(this.plat).subscribe(plat => this.plat = plat);
    // @ts-ignore
    this.router.navigate(['/menu']);
    // touche app

  }


// tslint:disable-next-line:typedef
get name() {
  return this.platForm.get('name');
}
  // tslint:disable-next-line:typedef
  get description() {
    return this.platForm.get('description');
  }
  // tslint:disable-next-line:typedef
  get price() {
    return this.platForm.get('price');
  }
  // tslint:disable-next-line:typedef
  get category() {
    return this.platForm.get('category');
  }
  // tslint:disable-next-line:typedef
  get image() {
    return this.platForm.get('image');
  }


}
