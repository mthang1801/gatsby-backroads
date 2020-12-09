const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      tours: allContentfulTourExplore {
        edges {
          node {
            slug
          }
        }
      }
      blogs: allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `/tours/${node.slug}`,
      component: path.resolve(`./src/templates/tour-template.jsx`),
      context: {
        slug: node.slug,
      },
    })
  })
  data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
  // Create blog-list pages
  const posts = data.blogs.edges
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    if (i == 0) {
      createPage({
        path: "/blogs/1",
        component: path.resolve("./src/templates/blogs-list-template.jsx"),
        context: {
          limit: postsPerPage,
          skip: 0,
          numPages,
          currentPage: 1,
        },
      })
    }
    createPage({
      path: i == 0 ? "/blogs" : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blogs-list-template.jsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
