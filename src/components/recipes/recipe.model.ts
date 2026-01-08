export interface Recipe {
  id: string;
  name: string;
  description: string;
  dateAdded: Date;
  lastBrewed?: Date;
  isPublic: boolean;
  style: string;
  awards: string[];
  timesBrewed: number;
}
