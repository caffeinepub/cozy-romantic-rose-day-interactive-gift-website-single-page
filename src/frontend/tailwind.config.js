import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                rose: {
                    50: 'oklch(0.97 0.015 15)',
                    100: 'oklch(0.95 0.03 15)',
                    200: 'oklch(0.90 0.05 15)',
                    300: 'oklch(0.80 0.10 15)',
                    400: 'oklch(0.70 0.15 15)',
                    500: 'oklch(0.60 0.18 15)',
                    600: 'oklch(0.50 0.18 15)',
                    700: 'oklch(0.40 0.16 15)',
                    800: 'oklch(0.30 0.12 15)',
                    900: 'oklch(0.25 0.08 15)',
                },
                pink: {
                    50: 'oklch(0.97 0.02 340)',
                    100: 'oklch(0.94 0.04 340)',
                    200: 'oklch(0.88 0.08 340)',
                    300: 'oklch(0.78 0.12 340)',
                    400: 'oklch(0.68 0.16 340)',
                    500: 'oklch(0.58 0.18 340)',
                    600: 'oklch(0.48 0.18 340)',
                    700: 'oklch(0.38 0.15 340)',
                    800: 'oklch(0.30 0.12 340)',
                    900: 'oklch(0.25 0.08 340)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)',
                '3xl': 'calc(var(--radius) + 12px)',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(244, 63, 94, 0.05)',
                soft: '0 4px 20px rgba(244, 63, 94, 0.1)',
                glow: '0 0 20px rgba(244, 63, 94, 0.3)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '10%, 30%': { transform: 'scale(1.1)' },
                    '20%, 40%': { transform: 'scale(1)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                heartbeat: 'heartbeat 1.5s ease-in-out infinite',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
