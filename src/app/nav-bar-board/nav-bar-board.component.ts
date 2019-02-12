import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-board',
  templateUrl: './nav-bar-board.component.html',
  styleUrls: ['./nav-bar-board.component.scss']
})
export class NavBarBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  image;

  changeListener($event) : void {
  this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
