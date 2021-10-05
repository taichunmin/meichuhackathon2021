module.exports = async (ctx, next) => {
  const { event } = ctx
  if (event.message?.type !== 'text') return await next()
  await event.replyMessage({ type: 'text', text: event.message?.text })
}
