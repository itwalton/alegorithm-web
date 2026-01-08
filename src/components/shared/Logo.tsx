import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Logo() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        position: 'relative',
      }}
    >
      <svg
        width="40"
        height="48"
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Beer glass outline */}
        <path
          d="M12 8 L10 42 L30 42 L28 8 Z"
          stroke={theme.palette.primary.main}
          strokeWidth="2"
          fill="none"
          style={{
            filter: `drop-shadow(0 0 4px ${theme.palette.primary.main})`,
          }}
        />

        {/* Beer liquid with gradient */}
        <defs>
          <linearGradient id="beerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={theme.palette.secondary.main}
              stopOpacity="0.8"
            />
            <stop
              offset="50%"
              stopColor={theme.palette.primary.main}
              stopOpacity="0.6"
            />
            <stop
              offset="100%"
              stopColor={theme.palette.secondary.main}
              stopOpacity="0.9"
            />
          </linearGradient>
        </defs>

        {/* Liquid inside glass */}
        <path
          d="M11.2 22 L10.8 40 L29.2 40 L28.8 22 Z"
          fill="url(#beerGradient)"
          style={{
            filter: `drop-shadow(0 0 6px ${theme.palette.secondary.main})`,
          }}
        />

        {/* Foam on top */}
        <ellipse
          cx="20"
          cy="20"
          rx="8"
          ry="3"
          fill={theme.palette.background.paper}
          stroke={theme.palette.primary.main}
          strokeWidth="1"
          style={{
            filter: `drop-shadow(0 0 3px ${theme.palette.primary.main})`,
          }}
        />

        {/* Bubbles */}
        <circle
          cx="16"
          cy="32"
          r="1.5"
          fill={theme.palette.secondary.main}
          opacity="0.6"
        />
        <circle
          cx="22"
          cy="28"
          r="1"
          fill={theme.palette.secondary.main}
          opacity="0.5"
        />
        <circle
          cx="18"
          cy="35"
          r="1"
          fill={theme.palette.primary.main}
          opacity="0.4"
        />

        {/* Glass handle */}
        <path
          d="M30 18 Q35 24 30 30"
          stroke={theme.palette.primary.main}
          strokeWidth="2"
          fill="none"
          style={{
            filter: `drop-shadow(0 0 3px ${theme.palette.primary.main})`,
          }}
        />
      </svg>

      <Box sx={{ position: 'relative' }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700,
            position: 'relative',
            pb: 0.5,
          }}
        >
          lagerithm.ai
        </Typography>

        {/* Fluid underline */}
        <svg
          width="100%"
          height="8"
          viewBox="0 0 120 8"
          style={{
            position: 'absolute',
            bottom: -2,
            left: 0,
          }}
        >
          <defs>
            <linearGradient
              id="fluidGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor={theme.palette.secondary.main}
                stopOpacity="0.8"
              />
              <stop
                offset="50%"
                stopColor={theme.palette.primary.main}
                stopOpacity="0.9"
              />
              <stop
                offset="100%"
                stopColor={theme.palette.secondary.main}
                stopOpacity="0.8"
              />
            </linearGradient>
          </defs>

          {/* Wavy fluid underline */}
          <path
            d="M0,4 Q15,1 30,4 T60,4 T90,4 T120,4"
            stroke="url(#fluidGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 4px ${theme.palette.primary.main})`,
            }}
          />

          {/* Drips */}
          <circle
            cx="20"
            cy="6"
            r="1"
            fill={theme.palette.secondary.main}
            opacity="0.7"
          />
          <circle
            cx="60"
            cy="6"
            r="1"
            fill={theme.palette.primary.main}
            opacity="0.6"
          />
          <circle
            cx="100"
            cy="6"
            r="1"
            fill={theme.palette.secondary.main}
            opacity="0.7"
          />
        </svg>
      </Box>
    </Box>
  );
}
