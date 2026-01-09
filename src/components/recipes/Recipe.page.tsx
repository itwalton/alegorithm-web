import {
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MdAdd } from 'react-icons/md';
import useGetRecipes from './useGetRecipes';
import type { Recipe } from './recipe.model';
import { useState } from 'react';
import { PiPrinterDuotone } from 'react-icons/pi';

export default function RecipePage() {
  const theme = useTheme();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>();

  const { data: recipes } = useGetRecipes();
  if (recipes.length > 0 && !selectedRecipe) {
    setSelectedRecipe(recipes[0]);
  }

  // Find the most popular recipe (highest timesBrewed)
  const maxBrews = Math.max(...recipes.map((r) => r.timesBrewed));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 164px)',
        overflow: 'hidden',
      }}
    >
      {/* Header - Fixed at top */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          flexShrink: 0,
        }}
      >
        <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
          Recipes
        </Typography>
        <Button variant="contained" color="primary" startIcon={<MdAdd />}>
          Add Recipe
        </Button>
      </Box>

      {/* Two Column Layout */}
      <Box sx={{ display: 'flex', gap: 3, flex: 1, minHeight: 0 }}>
        {/* Left Column - Scrollable Recipe List */}
        <Box
          sx={{
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            flexShrink: 0,
            gap: 1,
            pr: 0.5,
          }}
        >
          {recipes.map((recipe) => {
            const isNew = !recipe.lastBrewed;
            const isAwardWinning = recipe.awards.length > 0;
            const isMostPopular = recipe.timesBrewed === maxBrews;

            return (
              <Card
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
                sx={{
                  '&:hover': { cursor: 'pointer' },
                  overflow: 'visible',
                }}
              >
                <CardContent sx={{ padding: '0 !important' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      padding: 2,
                      borderRadius: 4,
                      border:
                        selectedRecipe?.id === recipe.id
                          ? `1px solid ${theme.palette.primary.main}`
                          : `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Typography variant="h6">{recipe.name}</Typography>
                        <Chip
                          label={recipe.isPublic ? 'Public' : 'Private'}
                          color={recipe.isPublic ? 'success' : 'default'}
                          size="small"
                        />
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          mb: 2,
                          gap: 2,
                          flexWrap: 'wrap',
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          <strong>Style:</strong> {recipe.style}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          <strong>Brewed:</strong> {recipe.timesBrewed}x
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1.5, fontSize: '0.875rem' }}
                    >
                      {recipe.description}
                    </Typography>

                    {/* Badges */}
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 0.5,
                        mb: 1,
                        flexWrap: 'wrap',
                      }}
                    >
                      {isAwardWinning && (
                        <Chip
                          label="Award-Winning"
                          size="small"
                          sx={{
                            bgcolor: theme.palette.warning.main,
                            color: theme.palette.getContrastText(
                              theme.palette.warning.main
                            ),
                            fontWeight: 600,
                          }}
                        />
                      )}
                      {isNew && (
                        <Chip
                          label="New"
                          size="small"
                          sx={{
                            bgcolor: theme.palette.info.main,
                            color: theme.palette.getContrastText(
                              theme.palette.info.main
                            ),
                            fontWeight: 600,
                          }}
                        />
                      )}
                      {isMostPopular && (
                        <Chip
                          label="Most Popular"
                          size="small"
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.getContrastText(
                              theme.palette.primary.main
                            ),
                            fontWeight: 600,
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Right Column - Details/Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            overflowY: 'auto',
            pr: 1,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
              {selectedRecipe ? selectedRecipe.name : ''}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="contained" color="primary" startIcon={<MdAdd />}>
                Edit
              </Button>

              <IconButton size="large" color="primary">
                <PiPrinterDuotone />
              </IconButton>
            </Box>
          </Box>

          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="body1">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
          <Typography variant="body1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
          <Typography variant="body1">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit.
          </Typography>
          <Typography variant="body1">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </Typography>
          <Typography variant="body1">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus.
          </Typography>
          <Typography variant="body1">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
