const eleventySass = require("eleventy-sass");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass, {
    sassOptions: {
      includePaths: ["_sass"]
    }
  });
  eleventyConfig.addPlugin(rssPlugin);

  // Filters
  eleventyConfig.addFilter("dateToRfc3339", rssPlugin.dateToRfc3339);
  eleventyConfig.addFilter("dateToRfc822", rssPlugin.dateRfc822);
  eleventyConfig.addFilter("getNewestCollectionItemDate", rssPlugin.getNewestCollectionItemDate);
  eleventyConfig.addFilter("absoluteUrl", rssPlugin.absoluteUrl);

  eleventyConfig.addFilter("rssLastUpdatedDate", (collection) => {
    return rssPlugin.dateToRfc3339(rssPlugin.getNewestCollectionItemDate(collection));
  });

  eleventyConfig.addFilter("rssDate", rssPlugin.dateToRfc3339);
  
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("jsonify", (obj) => {
    return JSON.stringify(obj);
  });

  eleventyConfig.addFilter("absolute_url", (url) => {
    const isProduction = process.env.ELEVENTY_ENV === "production";
    const baseUrl = isProduction ? "https://pockity.app" : "http://localhost:8080";
    return new URL(url, baseUrl).href;
  });

  // Passthrough copy
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy("assets/videos");

  // Layout aliases
  eleventyConfig.addLayoutAlias("post", "post.html");
  eleventyConfig.addLayoutAlias("page", "page.html");
  eleventyConfig.addLayoutAlias("home", "home.html");
  eleventyConfig.addLayoutAlias("blog", "blog.html");
  eleventyConfig.addLayoutAlias("ios", "ios.html");
  eleventyConfig.addLayoutAlias("store", "store.html");

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: 'excerpt',
  });

  // Initialize the Markdown parser
  const md = new markdownIt({
    html: true, // Enable HTML tags in source
    breaks: true, // Convert '\n' in source into <br>
    linkify: true // Autoconvert URL-like text to links
  });

  // Add the custom filter
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    templateFormats: ["md", "html", "njk", "liquid"]
  };
};
