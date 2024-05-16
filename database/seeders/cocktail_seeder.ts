import Cocktail from '#models/cocktail'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cocktail.createMany([
      {
        userId: 1,
        name: 'Mojito',
        description: 'A mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink.',
        imgPath: 'https://via.placeholder.com/150',
        status: true,
      },
      {
        userId: 2,
        name: 'Margarita',
        description: 'A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.',
        imgPath: 'https://via.placeholder.com/150',
        status: true,
      },
      {
        userId: 1,
        name: 'Piña Colada',
        description: 'The piña colada is a sweet cocktail made with rum, coconut cream or coconut milk, and pineapple juice, usually served either blended or shaken with ice. It may be garnished with either a pineapple wedge, maraschino cherry, or both.',
        imgPath: 'https://via.placeholder.com/150',
        status: false,
      },
      {
        userId: 1,
        name: 'Cosmopolitan',
        description: 'A cosmopolitan, or informally a cosmo, is a cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice.',
        imgPath: 'https://via.placeholder.com/150',
        status: true,
      }
    ])
  }
}