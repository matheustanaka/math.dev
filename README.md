# Notes

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


