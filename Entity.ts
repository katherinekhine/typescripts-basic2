export abstract class Entity {
  constructor(public id: string, public name: string) {}

  abstract getDescription(): string;

  displayInfo(): void {
    console.log(this.getDescription());
  }
}
