export default () => {
  const date = new Date()
  const hour = date.getHours()

  if (hour >= 6 && hour <= 17) {
    return 'light'
  }

  return 'dark'
}
