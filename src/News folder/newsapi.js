import GNews from '@gnews-io/gnews-io-js';

const client = new GNews(import.meta.env.VITE_NewsAPI);

export const getNews = async(category) => {
  return await client.topHeadlines({
    lang: 'en',
    country: 'in',
    max: 20,
    category: category
  });
};


