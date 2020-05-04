console.info('Loading plugin: tag-review\n')


hexo.extend.tag.register('review', (args, content) => {

  const body = hexo.render.renderSync({ text: content, engine: 'markdown' })

  const title = args[0]
  const spotifyUrl = args.find(arg => arg.startsWith('spotify:')).replace('spotify:', '')
  const hot = !!args.find(arg => arg === 'hot')

  return (
    `<div class="review">
      <div class="review-title">
        <span>${ title }</span>
        ${ hot ? '<span class="review-hot">Highly recommended!</span>' : '' }
      </div>
      <div class="review-body">${ body }</div>
      <div class="review-links">
        <a class="review-link-spotify" href="${ spotifyUrl }" target="_blank">Spotify</a>
      </div>
    </div>`
  )
}, { ends: true })
