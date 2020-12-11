import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{
  student1 : Student = new Student(1, "manju", 30);
  student2 : Student = new Student(2, "rohit", 50);
  student3 : Student = new Student(3, "cde", 80);
  
}
