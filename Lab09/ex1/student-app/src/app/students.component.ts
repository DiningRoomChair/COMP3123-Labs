import {Component} from '@angular/core';

@Component({
    selector: 'students',
    template: `<h2>{{getTitle()}} {{getCurrentDate()}}</h2>`
})

export class StudentsComponent {
    title = 'My List of Students';

    getTitle(){
        return this.title;
    }
    getCurrentDate = function(){
        return new Date();
    }
}