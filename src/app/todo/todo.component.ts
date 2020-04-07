import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
import {TimerService} from '../shared/timer.service';


@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todoValue = '';
    description = 'Some Desc..'
    constructor(public dialog: MatDialog, private timerService: TimerService) {
    }

    addTodoro(input, description): void {
        this.timerService.todoros.push({
            todo: this.todoValue,
            description: description
        });
        this.todoValue = '';
        input.blur();
    }

    setPlaceholder(): string {
        return this.timerService.todoros.length > 0 ? 'Add another item' : 'Start by adding an item';
    }

    openDialog(input): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '500px',
            data: { description: this.description,
                    title: this.todoValue}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.description = result;
            this.addTodoro(input, result);
        });
    }

    deleteTodoro(array, index): void {
        array.splice(index, 1);
    }

}
