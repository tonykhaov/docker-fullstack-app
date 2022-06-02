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
  delete(id: string): string {
    todos.splice(
      todos.findIndex((todo) => todo.id === id),
      1,
    );
    return `Todo with id ${id} has been successfully deleted`;
  }
}
