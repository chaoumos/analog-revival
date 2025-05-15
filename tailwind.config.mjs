/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ...],
        'serif': ['ui-serif', 'Georgia', ...],
        'mono': ['ui-monospace', 'SFMono-Regular', ...],
        'display': ['Oswald', ...],
        'body': ['Open Sans', ...],
      },
      colors: {
        'analog-light': '#f0e7db',
        'analog-dark': '#332927',
        'analog-accent': '#a67b5b',
      }
    },
  },
  plugins: [],
}