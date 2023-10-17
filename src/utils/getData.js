export default async (url) => {
  const res = await fetch(url, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}
