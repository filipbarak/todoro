import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-custom-timer-dialog',
  templateUrl: './custom-timer-dialog.component.html',
  styleUrls: ['./custom-timer-dialog.component.css']
})
export class CustomTimerDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<CustomTimerDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    saveTime(minutes, seconds, name) {
      let time = Number(minutes.value * 60) + Number(seconds.value);
      return [time, name.value];
    }
}
