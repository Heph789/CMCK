import { Component } from '@angular/core';
import { Activity } from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    activities:Activity[] = [new Activity('Video Games'), new Activity('Homework')];
    //this.activities.push(new Activity("Video Games"));
    //this.activities.push(new Activity("Homework"));
    calc():void {
        var totalTime:number;
        for (let obj of this.activities) {
            totalTime += obj.time;
            console.log(totalTime);
        }
        console.log(totalTime);
        for (let obj of this.activities) {
            obj.percentage = obj.time/totalTime;
        }
    }
}
