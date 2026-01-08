import { Box, IconButton, Menu, MenuItem, Tooltip, Typography, Divider, Checkbox, ListItemText, Grid } from "@mui/material";
import { BiCog } from "react-icons/bi";
import { theme } from "../../../../theme/theme";
import { useState } from "react";
import type { Widget } from "./widgets.model";

export type WidgetProps = {
  widgets: Widget[];
  onToggleWidget: (id: string, visible: boolean) => void;
}

export default function Widgets({ widgets, onToggleWidget }: WidgetProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <Tooltip title="Widget Settings">
          <IconButton
            color="inherit"
            aria-label="settings"
            onClick={handleMenuOpen}
            sx={{
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <BiCog />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem disabled>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Show/Hide Widgets
            </Typography>
          </MenuItem>

          <Divider />

          {widgets.map((widget, index) => (
            <MenuItem onClick={() => onToggleWidget(widget.id, !widget.visible)} key={index}>
              <Checkbox checked={widget.visible} />
              <ListItemText primary={widget.label} />
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {widgets.map(widget => widget.visible && (
          <Grid size={4} key={widget.id}>
            {widget.component}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}