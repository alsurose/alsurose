require('dotenv').config();

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}