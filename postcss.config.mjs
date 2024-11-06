/**
 * @type {import('postcss-load-config').Config & import('tailwindcss').Config & import('autoprefixer').Options & import('cssnano').Options}
 */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};

export default config;
