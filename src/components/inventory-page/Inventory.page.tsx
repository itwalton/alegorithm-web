import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GiWheat, GiHops } from 'react-icons/gi';
import { MdScience } from 'react-icons/md';
import FermentableInventoryTable from './fermentable-inventory/FermentableInventoryTable';
import HopInventoryTable from './hop-inventory/HopInventoryTable';
import ChemicalInventoryTable from './chemical-inventory/ChemicalInventoryTable';

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

  const renderTable = () => {
    switch (selectedCategory) {
      case InventoryCategory.fermentables:
        return <FermentableInventoryTable />
      case InventoryCategory.hops:
        return <HopInventoryTable />
      case InventoryCategory.chemicals:
        return <ChemicalInventoryTable />
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
