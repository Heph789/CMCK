import { Observable } from 'rxjs/Rx';
export class Activity {
    name:string;
    totalTime:number = 0;
    fime:number[] = [0, 0, 0];
    percentage:number;
    private interval;
    start():void {
        /*let foo = function () {
            this.fime[2] += 1;
            if(this.fime[2] > 60) {
                this.fime[1] += 1;
                this.fime[2] = 0;
            }
        };*/
        this.interval = setInterval(()=> {
            this.fime[2] += 1;
            if(this.fime[2] > 60) {
                this.fime[1] += 1;
                this.fime[2] = 0;
            }
        }, 1000);
    }
    /*private do():void {
        this.fime[2] += 1;
        if(this.fime[2] > 60) {
            this.fime[1] += 1;
            this.fime[2] = 0;
        }
    }*/
    stop():void {
        clearInterval(this.interval);
    }
    reset():void {
        this.totalTime = 0;
        this.fime[0] = 0;
        this.fime[1] = 0;
        this.fime[2] = 0;
        this.percentage = 0;
    }
    constructor(name:string) {
        this.name = name;
    }
}
