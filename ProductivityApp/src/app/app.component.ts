import { Component } from '@angular/core';
import { Activity } from './activity';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    activities:Activity[] = [new Activity('Video Games'), new Activity('Homework'), new Activity('Sleep')];
    //this.activities.push(new Activity("Video Games"));
    //this.activities.push(new Activity("Homework"));
    name:string;
    calc():void {
        let totalTime:number = 0;
        for (let obj of this.activities) {
            obj.totalTime += (obj.fime[0]*3600) + (obj.fime[1]*60) + obj.fime[2];
            totalTime += obj.totalTime;
            //totalTime += obj.time;
        }
        console.log(totalTime);
        for (let obj of this.activities) {
            obj.percentage = (obj.totalTime/totalTime)*100;
            if((obj.percentage - Math.floor(obj.percentage)) >= .5) {
                obj.percentage = Math.ceil(obj.percentage);
            }
            else {
                obj.percentage = Math.floor(obj.percentage);
            }
        }
    }
    add():void {
        this.activities.push(new Activity(this.name));
    }
}
