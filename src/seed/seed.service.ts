import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {

  private readonly pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) {}
  
  async executeSeed() {
    //De esta manera podemos insertar datos en la base de datos

    const { data } = await this.axios.get<PokeResponse>(this.pokemonUrl)

    const pokemonToInsert: {name: string, no: number}[] = [];

    data.results.forEach(async({name, url}) => {

      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      // const pokemon = await this.pokemonModel.create({name, no});
      pokemonToInsert.push({name, no});

    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
