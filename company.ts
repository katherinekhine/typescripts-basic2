import { Entity } from "./Entity";
import { Developer } from "./developer";

export class Company extends Entity {
  constructor(id: string, public name: string, public employees: Developer[]) {
    super(id, name);
  }

  getDescription(): string {
    return `Company: ${this.name}, Number of employees: ${this.employees.length}`;
  }

  displayEmployees(): void {
    this.employees.forEach((emp) => emp.displayInfo());
  }
}
