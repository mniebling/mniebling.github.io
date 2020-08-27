module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('css')

  eleventyConfig.addFilter('snakeCase', function (value) {
    return value.toLowerCase().replace(/\s/g, '-')
  })

  return {
    dir: {
      includes: 'includes',
      input: '.',
      layouts: 'layouts',
      output: 'dist',
    },
  }
}
