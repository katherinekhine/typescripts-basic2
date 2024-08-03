import { Entity } from "./Entity";
import { ProgrammingLanguage } from "./ProgrammingLanguage";

export class Developer extends Entity {
  constructor(id: string, name: string, public favLang: ProgrammingLanguage) {
    super(id, name);
  }

  getDescription(): string {
    return `Developer: ${this.name}, FavLang: ${this.favLang.name}`;
  }

  displayFavLang(): void {
    this.favLang.displayInfo(); //notice
  }
}
