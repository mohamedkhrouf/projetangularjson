import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Plat} from '../model/plat';
import {PlatService} from '../shared/plat.service';
class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {

  plat: Plat;
  private selectedFile: ImageSnippet;
  constructor(private platService: PlatService, private service: ActivatedRoute) { }
  platsList: Plat[];
  ngOnInit(): void {
    this.plat = new Plat();
    this.platService.getPlatById(this.service.snapshot.params.id).subscribe( plat => this.plat = plat);
    this.platService.getAllPlats().subscribe(platsList => this.platsList = platsList);
  }
  // tslint:disable-next-line:typedef
  save(imageInput: any){
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.plat.image = this.selectedFile.src;
      this.selectedFile.pending = true;

    });
    this.platService.putPlat(this.plat).subscribe(
      plat => this.plat = plat,
      error1 => {
        console.error('error updating plat');
      }
    );
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
}
