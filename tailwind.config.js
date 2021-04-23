module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: [
      './vendor/symfony/twig-bridge/Resources/views/Form/tailwind_2_layout.html.twig',
      './templates/**/*.html.twig',
      './assets/**/*.css',
      './assets/**/*.js',
      './assets/**/*.vue',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
