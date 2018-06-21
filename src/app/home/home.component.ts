import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, keyframes, query, stagger, transition } from '@angular/animations'
// import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [


    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35%)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))]), { optional: true })

        // query(':leave', stagger('300ms', [
        //   animate('.6s ease-in', keyframes([
        //     style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        //     style({ opacity: .5, transform: 'translateY(35%)', offset: .3 }),
        //     style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 })
        //   ]))]), { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add an item";
  goalText: string = "My first life goal";

  goals = ['My first goal', 'My second goal', 'My third goal'];

  constructor( /*private _data: DataService*/ ) { }

  ngOnInit() {
    // this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    // this._data.changeGoal(this.goals);
  }

  addItems() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    // this._data.changeGoal(this.goals);
  }

  removeItem(i: number) {
    this.goals.splice(i, 1);
    this.itemCount=this.goals.length;
    // this._data.changeGoal(this.goals);
  }
}
