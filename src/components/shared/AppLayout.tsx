import { useState, type ReactNode } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
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
import {
  MdOutlineInventory,
  MdLogout,
  MdMenuBook,
  MdCalendarToday,
  MdBarChart,
} from 'react-icons/md';
import { HiMenu, HiCog } from 'react-icons/hi';
import { Link, useLocation } from '@tanstack/react-router';
import Logo from './Logo';

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
    { label: 'Analytics', path: '/', icon: <MdBarChart /> },
    { label: 'Inventory', path: '/inventory', icon: <MdOutlineInventory /> },
    { label: 'Recipes', path: '/recipes', icon: <MdMenuBook /> },
    { label: 'BatchTrak', path: '/batchtrak', icon: <MdCalendarToday /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Logo />
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
                    fontSize: item.indent ? '1rem' : '1.125rem',
                    color: item.color || 'inherit',
                    lineHeight: 1.2,
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
          width: '100%',
          zIndex: theme.zIndex.drawer + 1,
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

          <Logo />

          <Box sx={{ flexGrow: 1 }} />
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
