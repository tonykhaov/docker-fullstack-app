import { Injectable } from '@nestjs/common';
import { todoBuilder, Todo } from './todo.model';

const todos = todoBuilder.buildList(10);

@Injectable()
export class TodosService {
  findAll(): Array<Todo> {
    return todos;
  }
  findOne(id: string): Todo {
    return todos.find((todo) => todo.id === id);
  }
}
