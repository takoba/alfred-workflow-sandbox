const alfy = require('alfy');

const data = await alfy.fetch('https://qiita.com/api/v2/tags?page=1&per_page=10&sort=count');

const items = alfy
  .inputMatches(data, 'id')
  .map(element => ({
    title: element.id,
    subtitle: element.items_count,
    arg: `https://qiita.com/tags/${element.id}`
  }));

alfy.output(items);
