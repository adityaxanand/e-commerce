const { faker } = require('@faker-js/faker');
const fs = require('fs');

const generateCategories = (count) => {
  const categories = [];
  for (let i = 0; i < count; i++) {
    categories.push({
      id: i + 1,
      name: faker.commerce.department()
    });
  }
  return categories;
};

const categories = generateCategories(100);
fs.writeFileSync('src/categories.json', JSON.stringify(categories, null, 2));