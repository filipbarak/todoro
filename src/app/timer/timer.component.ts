import {Component, OnInit} from '@angular/core';
import {TimerService} from '../shared/timer.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {take, map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {CustomTimerDialogComponent} from '../custom-timer-dialog/custom-timer-dialog.component';
import {UtilService} from '../shared/util.service';


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
    activeFont = 'bungee';
    selectedIndex = 1;
    fonts = ['bungee', 'sketch', 'monoton', 'scp', 'vt', 'zsh'];
    timerName = '';

    constructor(public dialog: MatDialog,
                private timerService: TimerService,
                private utilService: UtilService) {
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
        this.isTimerPaused = false;
    }

    resetTimer() {
        if (this.countDown) {
            this.countDown.unsubscribe();
        }
        this.count = this.customCount ? this.customCount : 1500;
        this.time = this.formatTime(this.count);
        this.isTimerPaused = true;
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
            this.customCount = result[0];
            result[0] ? this.count = result[0] : this.count = 1500;
            this.time = this.formatTime(this.count);
            this.utilService.successNotification('Success!', `Custom timer of ${this.time} added.`);
            this.timerName = result[1];
        });
    }

    changeFont() {
        this.activeFont = this.fonts[this.selectedIndex];
        this.selectedIndex++;
        this.selectedIndex = this.selectedIndex === this.fonts.length ? 0 : this.selectedIndex;
    }
}
