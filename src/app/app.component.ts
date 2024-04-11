import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Ability } from '../model/abilityModel';
import { Pokemon } from '../model/pokemonModel';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  termoBuscado: string = '';

  hidden: boolean = true;

  pokedex = [
    new Pokemon('Bulbasaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', ['planta', 'veneno'], [new Ability('Overgrow', 'planta'), new Ability('Absorb', 'planta'), new Ability('Tackle', 'normal'), new Ability('Vine Whip', 'planta')], 25.5, 0.50),
    new Pokemon('Ivysaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png', ['planta', 'veneno'], [new Ability('Overgrow', 'planta'), new Ability('Mega Absorb', 'planta'), new Ability('Tackle', 'normal'), new Ability('Vine Whip', 'planta')], 47, 0.90),
    new Pokemon('Venusaur', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', ['planta', 'veneno'], [new Ability('Poison Powder', 'veneno'), new Ability('Mega Absorb', 'planta'), new Ability('Solar Power', 'planta'), new Ability('Vine Whip', 'planta')], 100, 1.20),
    new Pokemon('Charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', ['fogo'], [new Ability('Ember', 'fogo'), new Ability('Scratch', 'normal'), new Ability('Smokescreen', 'normal'), new Ability('Growl', 'normal')], 18.7, 0.60),
    new Pokemon('Charmeleon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png', ['fogo'], [new Ability('Ember', 'fogo'), new Ability('Scratch', 'normal'), new Ability('Flame Wheel', 'fogo'), new Ability('Growl', 'normal')], 41.9, 1.10),
    new Pokemon('Charizard', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', ['fogo', 'voador'], [new Ability('Flamethrower', 'fogo'), new Ability('Fly', 'voador'), new Ability('Flame Wheel', 'fogo'), new Ability('Wing Attack', 'voador')], 93.5, 2.01),
    new Pokemon('Squirtle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', ['agua'], [new Ability('Bubble', 'agua'), new Ability('Tackle', 'normal'), new Ability('Water Gun', 'agua'), new Ability('Withdraw', 'agua')], 19.8, 0.50),
    new Pokemon('Wartortle', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', ['agua'], [new Ability('Water Pulse', 'agua'), new Ability('Tackle', 'normal'), new Ability('Water Gun', 'agua'), new Ability('Withdraw', 'agua')], 49.6, 1.00),
    new Pokemon('Blastoise', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png', ['agua'], [new Ability('Water Pulse', 'agua'), new Ability('Surf', 'normal'), new Ability('Water Gun', 'agua'), new Ability('Withdraw', 'agua')], 125.5, 1.83),
    new Pokemon('Caterpie', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png', ['inseto'], [new Ability('Tackle', 'normal'), new Ability('String Shot', 'inseto'), new Ability('Bug Bite', 'inseto'), new Ability('Growl', 'normal')], 2.9, 0.30),
    new Pokemon('Metapod', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png', ['inseto'], [new Ability('Tackle', 'normal'), new Ability('String Shot', 'inseto'), new Ability('Bug Bite', 'inseto'), new Ability('Harden', 'inseto')], 9.9, 0.80),
    new Pokemon('Butterfree', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png', ['inseto', 'voador'], [new Ability('Stun Spore', 'inseto'), new Ability('String Shot', 'inseto'), new Ability('Bug Bite', 'inseto'), new Ability('Gust', 'voador')], 32.0, 1.10),
  ]

  nomeModal: string = '';
  imgModal: string = '';
  tiposModal: string[] = [];
  habilidadesModal: Ability[] = [];
  pesoModal: number = 0;
  alturaModal: number = 0;

  modal (nome: string, img: string, tipos: string[], abilities: Ability[], weight: number, height: number) {
    console.log("oi")
    this.hidden = !this.hidden;
    this.nomeModal = nome;
    this.imgModal = img;
    this.tiposModal = tipos;
    this.habilidadesModal = abilities;
    this.pesoModal = weight;
    this.alturaModal = height;

    console.log(this.habilidadesModal);
  }
  close() {
    this.hidden = !this.hidden
  }
}
