import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { todoBuilder, Todo } from './todo.model';

@Injectable()
export class TodosService {
  // replace this by a real backend.
  private readonly todos: Todo[] = todoBuilder.buildList(1);

  findAll(): Array<Todo> {
    return this.todos;
  }
  findOne(id: string): Todo {
    return this.todos.find((todo) => todo.id === id);
  }
  delete(id: string): string {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === id),
      1,
    );
    return `Todo with id ${id} has been successfully deleted`;
  }
  create(todo: Omit<Todo, 'id'>): Todo {
    if (todo.title.length < 1) {
      throw new Error('Title is required');
    }
    if (typeof todo.completed !== 'boolean') {
      todo.completed = false;
    }
    const todoWithId: Todo = { ...todo, id: faker.datatype.uuid() };
    this.todos.push(todoWithId);
    return todoWithId;
  }
  update(id: string, todo: Omit<Todo, 'id'>): Todo {
    const todoToUpdate = this.todos.find((todo) => todo.id === id);
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.completed) {
      todoToUpdate.completed = todo.completed;
    }
    return todoToUpdate;
  }
}
