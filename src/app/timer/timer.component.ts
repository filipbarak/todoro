import {Component, OnInit} from '@angular/core';
import {TimerService} from '../timer.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {take, map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {CustomTimerDialogComponent} from '../custom-timer-dialog/custom-timer-dialog.component';


@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    countDown: any;
    customCount;
    count = 1500;
    time;
    isTimerPaused = false;

    constructor(public dialog: MatDialog, private timerService: TimerService) {
    }

    ngOnInit() {
    }

    initTimer() {
        this.countDown = Observable.timer(0, 1000)
            .pipe(
                take(this.count),
                map(() => --this.count)
            )
            .subscribe(ticks => {
                this.time = this.formatTime(ticks);
            });
    }

    resetTimer() {
        if (this.countDown) {
            this.countDown.unsubscribe();
        }
        this.count = this.customCount ? this.customCount : 1500;
        this.time = this.formatTime(this.count);
    }

    pauseTimer() {
        this.isTimerPaused = !this.isTimerPaused;
        if (this.isTimerPaused && this.countDown) {
            this.countDown.unsubscribe();
        } else {
            this.initTimer();
        }
    }

    formatTime(time) {
        // Hours, minutes and seconds
        const hrs = ~~(time / 3600);
        const mins = ~~((time % 3600) / 60);
        const secs = time % 60;
        let ret = '';

        if (hrs > 0) {
            ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
        }

        ret += '' + mins + ':' + (secs < 10 ? '0' : '');
        ret += '' + secs;
        return ret;
    }

    openCustomTimerDialog(): void {
        const dialogRef = this.dialog.open(CustomTimerDialogComponent, {
            width: '500px',
            data: {
                width: '500px',
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.customCount = result;
            result ? this.count = result : this.count = 1500;
            this.time = this.formatTime(this.count);
        });
    }
}
