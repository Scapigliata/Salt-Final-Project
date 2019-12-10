export default (recipes = [], sortBy) =>
  recipes.slice(0, 100).sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
