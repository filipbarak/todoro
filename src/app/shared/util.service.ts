import {Injectable} from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable()
export class UtilService {

    constructor(private notifService: NotificationsService) {
    }

    options = {
        timeOut: 2000,
        showProgressBar: true
    };

    successNotification(title, content?) {
        this.notifService.success(title, content);
    }

    errorNotification(title, content?) {
        this.notifService.error(title, content);
    }

}
