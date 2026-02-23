export enum ItemCategory {
  FISH = 'Fish & Invertebrates',
  PLANT = 'Plants',
  DECOR = 'Decorations',
  EQUIPMENT = 'Equipment' // Filtration, Bubblers
}

export type MovementType = 'swim' | 'sway' | 'float' | 'crawl' | 'none';

export interface AquariumItem {
  id: string; // unique instance id
  typeId: string; // type of item (e.g., 'clownfish')
  category: ItemCategory;
  emoji: string;
  name: string;
  x: number;
  y: number;
  z: number; // z-index for depth layering
  scale: number;
  rotation: number;
  isFlipped?: boolean;
  movement: MovementType;
  // Random offsets for animation to make each item look unique
  animDuration: number;
  animDelay: number;
}

export interface ItemDefinition {
  id: string;
  emoji: string;
  name: string;
  category: ItemCategory;
  defaultScale: number;
  movement: MovementType;
}

export interface TankSettings {
  lighting: 'day' | 'sunset' | 'night';
  filtrationOn: boolean;
  bubbleColor: string;
}