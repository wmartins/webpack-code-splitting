# Webpack Code Splitting Demo

Webpack provides us a nice feature called [`code splitting`](https://webpack.github.io/docs/code-splitting.html),
and it's pretty easy to split our application using this. However, things may
be complicated when you have to split not only javascript code (i.e. CSS code).

This project explores this feature, and propose a way to dynamically load CSS
and JS files.

Check a running demo [here](https://wmartins.github.io/webpack-code-splitting/dist).

## Bad Things About This Approach

### Manual Entry for CSS File

As seen [here](https://github.com/wmartins/webpack-code-splitting/blob/52bca3f750f4fe898e8ec1b0ff256bcc24512d92/webpack.config.js#L9),
it's necessary to add this split point manually, otherwise, the
[`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin)
will extract all the css to a single file (and this is not what we want).

So, this way, combined with setting [`allChunks` option to `false`](https://github.com/wmartins/webpack-code-splitting/blob/52bca3f750f4fe898e8ec1b0ff256bcc24512d92/webpack.config.js#L39)
will extract our CSS files correctly.

### Can't Use ES6 (ES2015) Syntax to Load Split Points

Those examples use ES6 modules, but, at least now using babel, we're not able
to load dynamic code using `import`, therefore, we have to require components
[the old way](https://github.com/wmartins/webpack-code-splitting/blob/52bca3f750f4fe898e8ec1b0ff256bcc24512d92/src/scripts/routes/news/index.js#L7).

It's not that bad, but may be a little bit ugly/boring/confusing to shift
syntaxes in some files.

### Code to Insert CSS to Page

Since our code will be splitted, we can't `require` our CSS anymore
(except for the [main bundle](https://github.com/wmartins/webpack-code-splitting/blob/52bca3f750f4fe898e8ec1b0ff256bcc24512d92/src/scripts/index.js#L7)),
otherwise it would be inserted to the main css bundle.
So, since it will be extracted, we need to add CSS to page manually.
Since we're using React, this simple JS code [here](https://github.com/wmartins/webpack-code-splitting/blob/gh-pages/src/scripts/insert-css.js) was
created to handle that, and is used [this way](https://github.com/wmartins/webpack-code-splitting/blob/52bca3f750f4fe898e8ec1b0ff256bcc24512d92/src/scripts/routes/about/index.js#L10). I know it's ugly, but I don't see any other way to do
achieve the desired result.

Of course, it would be a lot better to be able to require dynamic css files
(the same way that it's done with JS files), but it doesn't work like that.

This doesn't work as expected:

```javascript
require.ensure(['./styles.css'], css => {});
```
