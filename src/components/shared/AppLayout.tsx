import { useState, type ReactNode } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
} from '@mui/material';
import { GiWheat, GiHops } from 'react-icons/gi';
import { MdScience, MdInventory, MdLogout, MdMenuBook } from 'react-icons/md';
import { HiMenu, HiHome, HiCog } from 'react-icons/hi';
import { Link, useLocation } from '@tanstack/react-router';

const drawerWidth = 240;

interface NavItem {
  label: string;
  path: string;
  icon: ReactNode;
  indent?: boolean;
  color?: string;
}

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: 'Overview', path: '/', icon: <HiHome /> },
    { label: 'Recipes', path: '/recipes', icon: <MdMenuBook /> },
    { label: 'Inventory', path: '/inventory', icon: <MdInventory /> },
    {
      label: 'Fermentables',
      path: '/inventory/fermentables',
      icon: <GiWheat />,
      indent: true,
      color: theme.palette.secondary.main,
    },
    {
      label: 'Hops',
      path: '/inventory/hops',
      icon: <GiHops />,
      indent: true,
      color: theme.palette.primary.main,
    },
    {
      label: 'Chemicals',
      path: '/inventory/materials',
      icon: <MdScience />,
      indent: true,
      color: theme.palette.info.main,
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Alegorithm
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              onClick={() => isMobile && setMobileOpen(false)}
              sx={{
                pl: item.indent ? 4 : 2,
                '&:hover': item.color
                  ? {
                      backgroundColor: `${item.color}20`,
                      color: item.color,
                      '& .MuiListItemIcon-root': {
                        color: item.color,
                      },
                    }
                  : {},
                '&.Mui-selected': item.color
                  ? {
                      backgroundColor: `${item.color}30`,
                      color: item.color,
                      '& .MuiListItemIcon-root': {
                        color: item.color,
                      },
                      '&:hover': {
                        backgroundColor: `${item.color}40`,
                      },
                    }
                  : {},
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: item.indent ? 36 : 56,
                  color: item.color || 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& .MuiTypography-root': {
                    fontSize: item.indent ? '0.875rem' : '1rem',
                    color: item.color || 'inherit',
                    lineHeight: 1,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <HiMenu />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: theme.palette.background.paper,
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
                boxShadow: `0 0 15px ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  textShadow: `0 0 10px ${theme.palette.primary.main}`,
                }}
              >
                A
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Settings">
              <IconButton
                color="inherit"
                aria-label="settings"
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <HiCog />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton
                color="inherit"
                aria-label="logout"
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <MdLogout />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
