import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Exercise } from './../exercise.model';
import { TrainingService } from './../training.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Observable<any>;


  constructor(private trainingservice: TrainingService, 
              private db: AngularFirestore) { }

  ngOnInit() {
    this.exercises = this.db.collection('availableExercises').valueChanges();
  }

  onStartTraining(form: NgForm) {
    const formdata = form.value;
    console.log(formdata.exercise)
    this.trainingservice.startTraining(formdata.exercise);
  }

}
