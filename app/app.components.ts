import { Component } from '@angular/core';
import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Players inventory';

    private capacity: number = 50;
    private backpack: any = [
        {
            title: 'bow',
            position: '0px -432px'
        },
        {
            title: 'arrows',
            position: '-108px -432px'
        },
        {
            title: 'mantle',
            position: '-162px -486px'
        },
        {
            title: 'pants',
            position: '-216px -486px'
        },
        {
            title: 'boot',
            position: '-270px -486px'
        },
        {
            title: 'gloves',
            position: '-324px -486px'
        },
        {
            title: 'sword',
            position: '-324px -540px'
        },
        {
            title: 'armorHard',
            position: '0px -540px'
        },
        {
            title: 'pantsHard',
            position: '-54px -540px'
        },
        {
            title: 'bootHard',
            position: '-108px -540px'
        },
        {
            title: 'glovesHard',
            position: '-216px -540px'
        },
        {
            title: 'shield',
            position: '-270px -540px'
        }
    ];

    constructor() {
        const diff = this.capacity - this.backpack.length;
        for(let i=0; i<diff; i++) {
            this.backpack.push({});
        }
    }

    private attributes: any = {
        strenght: '100%',
        dexterity: '100%',
        intelligence: '100%',
        vitality: '100%',
        armor: '100%',
        damage: '100%'
    };
 }