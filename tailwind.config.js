/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import typographyPlugin from '@tailwindcss/typography'
export default {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.zinc.700'),
            hr: {
              borderColor: theme('colors.zinc.100'),
              marginTop: '3em',
              marginBottom: '3em'
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em'
            },
            h2: {
              marginBottom: `${16 / 24}em`
            },
            h3: {
              marginTop: '2.4em',
              lineHeight: '1.4'
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em'
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.zinc.500'),
              fontWeight: 500
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1]
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1]
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1]
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)'
            },
            'h2 code, h3 code': {
              font: 'inherit'
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: 0
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em'
            },
            'ul > li::before': {
              content: '""',
              width: '0.75em',
              height: '0.125em',
              position: 'absolute',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: '999px',
              backgroundColor: theme('colors.zinc.300')
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.purple.600')}`
            },
            'a:hover': {
              borderBottomWidth: '2px'
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit'
            },
            strong: {
              color: theme('colors.zinc.900'),
              fontWeight: theme('fontWeight.semibold')
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit'
            },
            kbd: {
              background: theme('colors.zinc.100'),
              borderWidth: '1px',
              borderColor: theme('colors.zinc.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.zinc.700'),
              fontWeight: 500,
              fontSize: '0.875em',
              fontVariantLigatures: 'none',
              borderRadius: '4px',
              margin: '0 1px'
            },
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none'
            },
            pre: {
              color: theme('colors.zinc.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%'
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight
            },
            thead: {
              color: theme('colors.zinc.700'),
              borderBottomColor: theme('colors.zinc.200')
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold')
            },
            'tbody tr': {
              borderBottomColor: theme('colors.zinc.100')
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px'
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0]
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic'
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.zinc.400'),
            'h1, h2, h3, h4, thead th': {
              color: theme('colors.zinc.200')
            },
            'h2 small, h3 small, h4 small': {
              color: theme('colors.zinc.400')
            },
            kbd: {
              background: theme('colors.zinc.700'),
              borderColor: theme('colors.zinc.600'),
              color: theme('colors.zinc.200')
            },
            code: {
              color: theme('colors.zinc.200')
            },
            hr: {
              borderColor: theme('colors.zinc.200'),
              opacity: '0.05'
            },
            pre: {
              boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)'
            },
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.purple.500')
            },
            strong: {
              color: theme('colors.zinc.200')
            },
            thead: {
              color: theme('colors.zinc.300'),
              borderBottomColor: 'rgb(148 163 184 / 0.2)'
            },
            'tbody tr': {
              borderBottomColor: 'rgb(148 163 184 / 0.1)'
            },
            blockQuote: {
              color: theme('colors.white')
            }
          }
        }
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [typographyPlugin]
}
