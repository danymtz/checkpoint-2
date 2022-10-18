import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

  image: number = 0;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  nextImage(){
    if (this.image < this.data.short_screenshots.length-1)
      this.image++;
    else
    this.image = 0;
  }

  previousImage(){
    if (this.image > 0)
      this.image--;
    else
    this.image =  this.data.short_screenshots.length-1;
  }

}
