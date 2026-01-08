import { useState } from 'react';
import {
  Grid,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GiWheat, GiHops } from 'react-icons/gi';
import { MdScience } from 'react-icons/md';
import FermentablesChart from './fermentables-inventory/charts/InventoryOnHandTimeseriesChart';
import AromaHopsChart from './hops-inventory/charts/AromaHopsDonutChart';
import WaterChemicalsWarnings from './chemicals-inventory/charts/WaterChemicalsWarningsList';
import FermentablesInventoryTable from './fermentables-inventory/FermentablesInventoryTable';
import HopsInventoryTable from './hops-inventory/HopsInventoryTable';
import ChemicalsInventoryTable from './chemicals-inventory/ChemicalsInventoryTable';

const InventoryCategory = {
  fermentables: "fermentables",
  hops: "hops",
  chemicals: "chemicals",
} as const;

export default function InventoryPage() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] =
    useState<typeof InventoryCategory[keyof typeof InventoryCategory]>(InventoryCategory.fermentables);

  const categories = [
    {
      id: InventoryCategory.fermentables,
      label: 'Fermentables',
      icon: <GiWheat size={20} />,
      color: theme.palette.secondary.main,
    },
    {
      id: InventoryCategory.hops,
      label: 'Hops',
      icon: <GiHops size={20} />,
      color: theme.palette.primary.main,
    },
    {
      id: InventoryCategory.chemicals,
      label: 'Chemicals',
      icon: <MdScience size={20} />,
      color: theme.palette.info.main,
    },
  ];

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  )!;

  const renderTable = () => {
    switch (selectedCategory) {
      case InventoryCategory.fermentables:
        return <FermentablesInventoryTable />
      case InventoryCategory.hops:
        return <HopsInventoryTable />
      case InventoryCategory.chemicals:
        return <ChemicalsInventoryTable />
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Inventory</Typography>

      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        {categories.map((category) => (
          <Button
            fullWidth
            key={category.id}
            variant={selectedCategory === category.id ? 'contained' : 'outlined'}
            onClick={() => setSelectedCategory(category.id)}
            startIcon={category.icon}
            sx={{
              fontSize: '1.2rem',
              borderColor: category.color,
              color:
                selectedCategory === category.id
                  ? theme.palette.getContrastText(category.color)
                  : category.color,
              backgroundColor:
                selectedCategory === category.id ? category.color : 'transparent',
              '&:hover': {
                borderColor: category.color,
                backgroundColor:
                  selectedCategory === category.id
                    ? category.color
                    : `${category.color}20`,
              },
            }}
          >
            {category.label}
          </Button>
        ))}
      </Box>

      <Box>
        {renderTable()}
      </Box>
    </Box>
  );
}
