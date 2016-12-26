import { Component } from '@angular/core';
import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2Do';

    private todoList: any = [{
        title: 'Купить продукты',
        state: true,
        date: new Date(),
        id: '1'
    }, {
        title: 'Убрать хату',
        state: false,
        date: new Date(),
        id: '2'
    }, {
        title: 'Чета еще...',
        state: true,
        date: new Date(),
        id: '3'
        }
    ];

    private deleteTodo(todo: any) {
        console.log(todo);
        this.todoList = this.todoList.filter((item: any) => item.id !== todo.id);
    }
 }