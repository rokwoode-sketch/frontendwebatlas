/**
 * Cloudflare Pages middleware: force apex host (www → webatlas.xyz).
 * Runs at the edge so GSC stops seeing duplicate www/apex pages.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url)

  if (url.hostname === 'www.webatlas.xyz') {
    url.hostname = 'webatlas.xyz'
    return Response.redirect(url.toString(), 301)
  }

  return context.next()
}
