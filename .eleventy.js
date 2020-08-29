const markdownIt = require("markdown-it")
const { outdent } = require("outdent")


module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('images')

  eleventyConfig.addFilter('snakeCase', function (value) {
    return value.toLowerCase()
      .replace(/\s/g, '-')
      .replace(/'/g, '')
  })

  let md = new markdownIt()

  eleventyConfig.addPairedShortcode('review', function (body, ...args) {

    // Insert a newline before `body` so that markdown adds a `p` tag around the
    // first paragraph of the contents.
    const content = md.renderInline('\n' + body)

    const title = args[0]
    const hot = !!args.find(arg => arg === 'hot')

    let spotifyUrl = args.find(arg => arg.startsWith('spotify:'))
    if (spotifyUrl) spotifyUrl = spotifyUrl.replace('spotify:', '')

    // https://www.11ty.dev/docs/languages/markdown/#there-are-extra-and-in-my-output
    // https://github.com/cspotcode/outdent#gotchas
    return (outdent`
      <div class="review">
        <div class="review-title">
          <span>${ title }</span>
          ${ hot ? '<span class="review-hot">Highly recommended!</span>' : '' }
        </div>
        <div class="review-body">${ content }</div>
        <div class="review-links">
          ${ spotifyUrl ? `<a class="review-link-spotify" href="${ spotifyUrl }" target="_blank">Spotify</a>` : '' }
        </div>
      </div>`
    )
  })

  return {
    dir: {
      includes: 'includes',
      input: '.',
      layouts: 'layouts',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  }
}
