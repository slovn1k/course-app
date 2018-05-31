import {Component, OnInit} from '@angular/core';
import {RecipieModel} from '../recipie.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    // here we are declaring an array of type RecipieModel
    recipies: RecipieModel[] = [
        new RecipieModel('A test', 'Testing',
            'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg'),
        new RecipieModel('Second test', 'Second description',
            'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
