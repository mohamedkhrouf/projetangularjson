import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
src = ['../../assets/home/uploads/slider-01.jpg', '../../assets/home/uploads/slider-02.jpg' , '../../assets/home/uploads/slider-03.jpg'];
a = '../../assets/home/uploads/slider-01.jpg';
i = 0 ;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
  }

  // tslint:disable-next-line:typedef
  funcA() {
    if ( this.i < 2) {
      this.i++;
      this.a = this.src[this.i];
      console.log(this.i);
    }
    else {
      this.i = 0 ;
      this.a = this.src[this.i];
    }
  }
  // tslint:disable-next-line:typedef
  funcB() {
    if ( this.i > 0 ) {
      this.i--;
      this.a = this.src[this.i];
    }else{
      this.i = 2 ;
      this.a = this.src[this.i];
    }
  }
}
