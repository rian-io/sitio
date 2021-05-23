export default async ($content, params, error) => {
  const currentPage = parseInt(params.page)

  const perPage = 5

  const allPosts = await $content('blog').fetch()

  const totalPosts = allPosts.length

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalPosts / perPage)

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalPosts % perPage

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }
    if (currentPage === lastPage) {
      return totalPosts - lastPageCount
    }
    return (currentPage - 1) * perPage
  }

  const paginatedPosts = await $content('blog')
    .sortBy('date', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  if (currentPage === 0 || !paginatedPosts.length) {
    return error({ statusCode: 404, message: 'No articles found!' })
  }

  return {
    lastPage,
    paginatedPosts
  }
}
