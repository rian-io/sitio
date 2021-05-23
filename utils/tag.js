import tagsFile from '~/meta/tags.yml'

const tags = tagsFile.tags

export function getTag (slug) {
  return tags.find(element => element.slug === slug)
}

export function getTags () {
  return tags
}
