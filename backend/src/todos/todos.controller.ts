import { Controller, Get, Param } from '@nestjs/common';
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
}
