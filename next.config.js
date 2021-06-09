const withTM = require('next-transpile-modules')([
  '@ladifire-opensource/stylex'
]);
const withStylex = require('@ladifire-opensource/stylex-nextjs-plugin');

module.exports = withStylex({
  inject: true // for nextjs, we must inject style to head
})(withTM());
