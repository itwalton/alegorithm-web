export interface Recipe {
  id: string;
  name: string;
  dateAdded: Date;
  lastBrewed?: Date;
  isPublic: boolean;
  style: string;
  awards: string[];
}
