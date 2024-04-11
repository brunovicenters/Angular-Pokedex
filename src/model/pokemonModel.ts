import { Ability } from './abilityModel';

export class Pokemon {
  name: string;
  image: string;
  types: string[] = [];
  abilities: Ability[] = [];
  weight: number = 0;
  height: number = 0;

  constructor(name: string, image: string, types: string[] = [], abilities: Ability[] = [], weight: number = 0, height: number = 0) {
    this.name = name;
    this.image = image;
    this.types = types;
    this.abilities = abilities;
    this.weight = weight;
    this.height = height;
  }
}
