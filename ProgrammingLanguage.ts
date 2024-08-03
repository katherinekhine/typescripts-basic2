import { Entity } from "./Entity";

export class ProgrammingLanguage extends Entity {
  constructor(id: string, name: string, public paradigm: string) {
    super(id, name);
  }

  getDescription(): string {
    return `Programming Language: ${this.name}, Paradigm: ${this.paradigm}`;
  }
}
