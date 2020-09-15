import { Exercise } from './../exercise.model';
import { TrainingService } from './../training.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {

  displayedColumns = ['date', 'name', 'calories', 'duration', 'state'];

  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort, { static:true }) sort: MatSort;

  @ViewChild(MatPaginator, { static:true }) paginator: MatPaginator;


  constructor(private trainingService: TrainingService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercise();
    this.dataSource.paginator = this.paginator;
  }

  onFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
