import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { ListType, TodoItem } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todo = [];
  process = [];
  done = [];

  aSub: Subscription = new Subscription();
  todos: TodoItem[] = [];
  listTypeEnum = ListType;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    return this.authService.getTodosList().subscribe(({ todos }) => {
      this.todos = todos;
      this.todo = this.getList(ListType.ToDo);
      this.process = this.getList(ListType.InProcess);
      this.done = this.getList(ListType.Done);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public getList(type: ListType): TodoItem[] {
    return this.todos.filter((item) => item.list === type);
  }
}
