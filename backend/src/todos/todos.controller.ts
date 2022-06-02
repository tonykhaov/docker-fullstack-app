import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Todo } from './todo.model';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): Array<Todo> {
    return this.todosService.findAll();
  }

  @Get(':id')
  getTodo(@Param('id') id: string): Todo {
    return this.todosService.findOne(id);
  }

  @Post()
  createTodo(@Body() todo: Omit<Todo, 'id'>): Todo {
    return this.todosService.create(todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): string {
    return this.todosService.delete(id);
  }
}
