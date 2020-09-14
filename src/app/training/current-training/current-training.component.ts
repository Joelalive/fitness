import { StopTrainingComponent } from './../stop-training/stop-training.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter<void>();

  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

    this.startOrResetTimer();

  }

  startOrResetTimer() {
    this.timer = setInterval(()=> {
      this.progress = this.progress + 5;
      if(this.progress >= 100) {
        clearInterval(this.timer);
      }
    },2000);
  }

  onStop() {
    const dialogRef = this.dialog.open(StopTrainingComponent, {data: {
      progress: this.progress
    } });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if(result) {
          this.trainingExit.emit();
        } else {
          this.startOrResetTimer();
        }
      }
    );
    clearInterval(this.timer);
  }

}
