# Note

# Routes

If we want to create a new Route in astro we need to create a folder called as **pages**

This folder will be responsible for the new pages, which will create a route with the name of file. For example:

```html
about.astro
```
Then, the /about page will be created and you will be able to see the content of the page.


# Components

We can not create our componentes inside **pages** folder because they are responsible for routes. 

Otherwise, we need to create a components folder to handle with new components, if you are using the same code multiple times, create a **components** folder to re-use them.

You can also import components inside other components. Like, one of those components will be the parent and other child.

## Working with props

You just need to use the destructure method and pass the variables for the method:

```javascript
const {name, username} = Astro.props
```

The **Astro.props** is used to reference that each variable inside the destructure is a prop that will be used to share between the components.

Here is an example of passing values to these props:

```javascript
const {name, username} = Astro.props

// The component below
<Social name="Matheus" username="matheustanaka" />

```

# How to create posts

The folder **posts** is responsible to generate posts with the markdown file type, if you want to create a post, use the **.md** at the end of the file name.

## Issues with posts

By default, the page posts dont have any layout, so if you open a new Blog post it will redirect you to the blog but without any layout component, for example Header components.

Astro recommend to create a layout model just for posts. They also use a property called as **frontmatter** which allows you to use all the variables inside the yaml file.

```html
---
const { frontmatter } = Astro.props;
---
<h1>{frontmatter.title}</h1>
<p>Written by {frontmatter.author}</p>
<slot />
```

By following the example above, you will be able to get the data from the yamls like the title variable and author.

Now, we need to specify which layout we gonna use in Post. 

```yaml
---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "learning in public"]
---
```

### Tips with Layouts

When using layouts, you now have the option of including elements, like a page title, in the Markdown content or in the layout. Remember to visually inspect your page preview and make any adjustments necessary to avoid duplicated elements.

# Working with <slot/>

Slot allows you to inject child content between opening and closing **<component></component>** tags to any **component.astro**

Astro gives the example of <BaseLayout/> component, if you add the <slot/> tag inside this page, you will be able to inject content on child component

In this example we use src -> layouts -> BaseLayout.astro

```html
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
const pageTitle = "Home Page";
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <Header />
    <h1>{pageTitle}</h1>
    <slot />  ----> Slot is here
    <Footer />
    <script>
      import "../scripts/menu.js";
    </script>
  </body>
</html>
```

Check the child component in src -> pages -> index.astro

```html
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = "Home Page";
---
<BaseLayout>
  <h2>My awesome blog subtitle</h2>
    <h3>Teste o slot</h3>
</BaseLayout>
```

Following this example, the <slot /> tag allows you to display the h2 and h3 tags in your web page between the BaseLayout component

# Posts Archive

Astro provides a method called as **.glob()** which will create an array of objects. We can use this method to store our posts.

# Generate Tags and Dynamic page routing

If a page uses dynamic params in the filename, that component will need to export a getStaticPaths() function.

This function is required because Astro is a static site builder. That means that your entire site is built ahead of time. If Astro doesn’t know to generate a page at build time, your users won’t see it when they visit your site.

```html
---
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  const allPosts = await Astro.glob('../posts/*.md');

  return [
    {params: {tag: "astro"}, props: {posts: allPosts}},
    {params: {tag: "successes"}, props: {posts: allPosts}},
    {params: {tag: "community"}, props: {posts: allPosts}},
    {params: {tag: "blogging"}, props: {posts: allPosts}},
    {params: {tag: "setbacks"}, props: {posts: allPosts}},
    {params: {tag: "learning in public"}, props: {posts: allPosts}}
  ]
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---
```
