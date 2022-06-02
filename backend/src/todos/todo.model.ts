import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const todoBuilder = Factory.define<Todo>((factory) => {
  return {
    id: String(factory.sequence),
    title: faker.lorem.sentence(),
    completed: faker.datatype.boolean(),
  };
});

export type { Todo };
export { todoBuilder };
