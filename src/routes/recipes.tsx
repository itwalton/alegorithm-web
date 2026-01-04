import { createFileRoute } from '@tanstack/react-router';

import RecipePage from '../components/recipes/Recipe.page';

export const Route = createFileRoute('/recipes')({
  component: RecipePage,
});
