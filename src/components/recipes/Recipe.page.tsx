import { Typography, Box, Card, CardContent, Chip, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MdAdd } from 'react-icons/md';
import { type Recipe } from './recipe.model';

const mockData: Recipe[] = [
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
];

export default function RecipePage() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.primary.main }}
        >
          Recipes
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<MdAdd />}
          sx={{ textTransform: 'none' }}
        >
          Add Recipe
        </Button>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Manage your brewing recipes and track awards.
      </Typography>

      <Grid container spacing={3}>
        {mockData.map((recipe) => (
          <Grid size={4} key={recipe.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{ color: theme.palette.primary.main }}
                >
                  {recipe.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {recipe.description}
                </Typography>

                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.primary">
                    <strong>Style:</strong> {recipe.style}
                  </Typography>
                </Box>

                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.primary">
                    <strong>Times Brewed:</strong> {recipe.timesBrewed}
                  </Typography>
                </Box>

                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.primary">
                    <strong>Last Brewed:</strong>{' '}
                    {recipe.lastBrewed
                      ? recipe.lastBrewed.toLocaleDateString()
                      : 'Never'}
                  </Typography>
                </Box>

                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.primary">
                    <strong>Date Added:</strong>{' '}
                    {recipe.dateAdded.toLocaleDateString()}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={recipe.isPublic ? 'Public' : 'Private'}
                    color={recipe.isPublic ? 'success' : 'default'}
                    size="small"
                  />
                </Box>

                {recipe.awards.length > 0 && (
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ mb: 1 }}
                    >
                      <strong>Awards:</strong>
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {recipe.awards.map((award, index) => (
                        <Chip
                          key={index}
                          label={award}
                          size="small"
                          color="primary"
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
