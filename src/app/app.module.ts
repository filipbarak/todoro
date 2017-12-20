import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';

import {SimpleNotificationsModule} from 'angular2-notifications';



import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {DialogComponent} from './dialog/dialog.component';
import {TimerComponent} from './timer/timer.component';
import {CustomTimerDialogComponent} from './custom-timer-dialog/custom-timer-dialog.component';

import {TimerService} from './shared/timer.service';
import {UtilService} from './shared/util.service';


@NgModule({
    declarations: [
        AppComponent,
        TodoComponent,
        DialogComponent,
        TimerComponent,
        CustomTimerDialogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatDialogModule,
        MatCardModule,
        MatButtonToggleModule,
        SimpleNotificationsModule.forRoot(),
        MatTooltipModule
    ],
    entryComponents: [
        DialogComponent,
        CustomTimerDialogComponent
    ],
    providers: [TimerService, UtilService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
