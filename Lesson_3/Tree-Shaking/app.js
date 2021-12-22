import { Person } from './person';
import { chechIfAdult, greet } from './utilities'; //We import just 2 function from utilities

let p = new Person ("John", "Smith", 29);

chechIfAdult(p);
greet(p);