import type { Response } from '../../shared/response.type';
import type { Recipe } from './recipe.model';

type RecipeResponse = Response<Recipe[]>;

export default function useGetRecipes(): RecipeResponse {
  return {
    data: [
      {
        id: 'R001',
        name: 'West Coast IPA',
        description:
          'A classic West Coast IPA with bold hop flavors and a crisp, dry finish. Features Cascade, Centennial, and Simcoe hops for a citrusy, piney profile.',
        dateAdded: new Date('2024-01-15'),
        lastBrewed: new Date('2024-03-20'),
        isPublic: true,
        style: 'American IPA',
        awards: ['Gold - 2023 State Fair', 'Best IPA - Local Competition'],
        timesBrewed: 12,
      },
      {
        id: 'R002',
        name: 'Belgian Wit',
        description:
          'Refreshing Belgian-style wheat beer with coriander and orange peel. Light, hazy, and perfect for summer brewing.',
        dateAdded: new Date('2024-02-10'),
        lastBrewed: new Date('2024-04-05'),
        isPublic: true,
        style: 'Witbier',
        awards: [],
        timesBrewed: 8,
      },
      {
        id: 'R003',
        name: 'Chocolate Stout',
        description:
          'Rich and creamy sweet stout with notes of dark chocolate and coffee. Brewed with cacao nibs and lactose for a smooth, dessert-like finish.',
        dateAdded: new Date('2024-03-05'),
        isPublic: false,
        style: 'Sweet Stout',
        awards: ['Silver - Regional Brew Fest'],
        timesBrewed: 5,
      },
      {
        id: 'R004',
        name: 'Summer Saison',
        description:
          'Farmhouse ale with fruity esters and peppery phenols. Dry, effervescent, and highly drinkable with a touch of spice.',
        dateAdded: new Date('2024-04-12'),
        lastBrewed: new Date('2024-06-15'),
        isPublic: true,
        style: 'Saison',
        awards: [],
        timesBrewed: 3,
      },
      {
        id: 'R005',
        name: 'New England IPA',
        description:
          'Juicy, hazy IPA with tropical fruit flavors. Loaded with Citra, Mosaic, and Galaxy hops for maximum fruit-forward character.',
        dateAdded: new Date('2025-11-20'),
        isPublic: true,
        style: 'New England IPA',
        awards: [],
        timesBrewed: 0,
      },
      {
        id: 'R006',
        name: 'Amber Ale',
        description:
          'Balanced malt-forward ale with caramel sweetness and subtle hop bitterness. A great everyday drinking beer.',
        dateAdded: new Date('2024-05-18'),
        lastBrewed: new Date('2024-10-02'),
        isPublic: true,
        style: 'American Amber Ale',
        awards: [],
        timesBrewed: 6,
      },
      {
        id: 'R007',
        name: 'Hefeweizen',
        description:
          'Traditional German wheat beer with banana and clove notes. Unfiltered and refreshing with a cloudy appearance.',
        dateAdded: new Date('2024-06-22'),
        lastBrewed: new Date('2024-08-14'),
        isPublic: false,
        style: 'Hefeweizen',
        awards: ['Bronze - Summer Beer Fest 2024'],
        timesBrewed: 4,
      },
      {
        id: 'R008',
        name: 'Imperial Stout',
        description:
          'Bold, high-alcohol stout with notes of roasted coffee, dark chocolate, and vanilla. Aged on oak chips for added complexity.',
        dateAdded: new Date('2025-12-01'),
        isPublic: false,
        style: 'Russian Imperial Stout',
        awards: [],
        timesBrewed: 0,
      },
      {
        id: 'R009',
        name: 'Pilsner',
        description:
          'Crisp, clean lager with noble hop character. Light-bodied with a dry finish and subtle floral notes.',
        dateAdded: new Date('2024-07-08'),
        lastBrewed: new Date('2024-11-20'),
        isPublic: true,
        style: 'German Pilsner',
        awards: ['Gold - State Championship 2024', 'Best Lager - Regional'],
        timesBrewed: 9,
      },
      {
        id: 'R010',
        name: 'Sour Cherry Ale',
        description:
          'Tart and funky sour ale with fresh cherry additions. Barrel-aged for 6 months with wild yeast and lactobacillus.',
        dateAdded: new Date('2024-03-30'),
        lastBrewed: new Date('2024-09-12'),
        isPublic: true,
        style: 'American Wild Ale',
        awards: ['Silver - Sour Beer Competition'],
        timesBrewed: 2,
      },
      {
        id: 'R011',
        name: 'Oatmeal Porter',
        description:
          'Smooth and creamy porter with chocolate and coffee notes. Oats add a silky mouthfeel and subtle sweetness.',
        dateAdded: new Date('2024-08-15'),
        lastBrewed: new Date('2025-01-03'),
        isPublic: true,
        style: 'Oatmeal Porter',
        awards: [],
        timesBrewed: 7,
      },
      {
        id: 'R012',
        name: 'Experimental Hop Blend',
        description:
          'Testing new hop varieties with a pale malt base. Experimental recipe to evaluate hop flavors and aromas.',
        dateAdded: new Date('2026-01-05'),
        isPublic: false,
        style: 'Pale Ale',
        awards: [],
        timesBrewed: 0,
      },
    ],
    isLoading: false,
    error: null,
  };
}
