import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        n8n: {
          DEFAULT: '#ff6d5a',
          hover: '#e05543',
          dark: '#c43d2c',
          light: '#ff8a7a',
        },
        brand: {
          dark: '#0f172a',
          surface: '#1e293b',
          sidebar: '#161b26',
          border: '#334155',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.300'),
            maxWidth: 'none',
            h1: {
              color: theme('colors.slate.100'),
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              color: theme('colors.n8n.DEFAULT'),
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.slate.800'),
              paddingBottom: '0.5rem',
            },
            h3: {
              color: theme('colors.sky.400'),
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: theme('colors.slate.200'),
              fontWeight: '600',
            },
            strong: {
              color: theme('colors.slate.100'),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.sky.400'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.sky.300'),
                textDecoration: 'underline',
              },
            },
            code: {
              color: theme('colors.sky.300'),
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
              paddingLeft: '0.375rem',
              paddingRight: '0.375rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#0b1120',
              borderColor: theme('colors.slate.800'),
              borderWidth: '1px',
              borderRadius: '0.75rem',
              color: theme('colors.slate.200'),
            },
            table: {
              width: '100%',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              backgroundColor: theme('colors.slate.800'),
            },
            thead: {
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.slate.700'),
            },
            'th, td': {
              padding: '0.75rem 1rem',
              borderColor: theme('colors.slate.700'),
            },
            th: {
              color: theme('colors.sky.400'),
              fontWeight: '600',
            },
            blockquote: {
              color: theme('colors.slate.300'),
              borderLeftColor: theme('colors.n8n.DEFAULT'),
              borderLeftWidth: '4px',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              padding: '1rem 1.25rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              fontStyle: 'normal',
            },
            ul: {
              listStyleType: 'disc',
            },
            ol: {
              listStyleType: 'decimal',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
