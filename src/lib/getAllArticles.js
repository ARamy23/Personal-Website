import glob from 'fast-glob'
import * as path from 'path'
import axios from 'axios'

async function importArticle(articleFilename) {
  let { meta } = await import(`../pages/articles/${articleFilename}`)
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
  }
}

export async function getAllArticles() {
  const response = await axios.get('http://localhost:1337/api/articles');
  const articles = response.data.data.map((article) => ({
    title: article.attributes.title,
    slug: article.attributes.slug,
    description: article.attributes.description,
    date: article.attributes.date,
  }));
  
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}
