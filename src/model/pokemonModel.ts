export class Pokemon {
  name: string;
  image: string;
  types: string[] = [];

  constructor(name: string, image: string, types: string[] = []) {
    this.name = name;
    this.image = image;
    this.types = types;
  }
}
