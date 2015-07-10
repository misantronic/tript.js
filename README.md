### tript.js

> A tiny Template-Engine (240 bytes) mixing up HTML and pure JavaScript in one template

tript.js is a tiny and simple template-engine which allows you to mixup JavaScript and HTML.<br>
You do what you would do with [handlebars](http://handlebarsjs.com/), [jsrender](https://github.com/borismoore/jsrender) or other template-engines but this time with pure and fast JavaScript.<br>

#### Demo

Go check out [this demo](http://codepen.io/misantronic/pen/ogNbBa) at codepen.io.

#### Example

```html
<!-- Embed tript.js -->
<script src="tript.min.js"></script>

<!-- TEMPLATE -->
<script id="template" type="text/html">
	<div id="content">
		<h1>my awesome $app blog</h1>
		<div style="font-weight: bold;">$headline</div>
		<p>$description</p>

		<div id="posts">

			for(var i in posts) {
				<div class="post">
					var title = posts[i].title,
						date = posts[i].date,
						body = posts[i].body;

					<h2>#$i, $title on $date|format</h2>
					<p>$body</p>

				</div>
			}

		</div>

		var fav_animal = "Crow";
		<p>Your should know: my favorite animal is the <b>$fav_animal</b>.</p>
	</div>
</script>
```

```javascript
// called from template
T.format = function(date) {
	return date.getMonth() +"."+ date.getDate() +"."+ date.getFullYear();
};

// set context
var context = {
	app: 'tript.js',
	headline: 'A tiny Template-Engine mixing up HTML and pure JavaScript in one template',
	description: 'tript.js is a freakin\' tiny template-engine which allows you to mixup JavaScript and HTML.',
	posts: [
		{
			title: 'Big News',
			date: new Date('2014-11-14'),
			body: 'tript.js is great!'
		},
		{
			title: 'Bad News',
			date: new Date('2014-11-11'),
			body: "tript.js doesn't exist yet :("
		}
	]
};

// parse template
document.body.innerHTML = T(template.innerHTML, context);
```

#### Good-to-know

Any context-member or variable is accessible inside any HTML-Tag via `$`.<br>
To execute pure JavaScript in an HTML-Tag, use the `<% ... %>`-Tags.

```html
<h1>my awesome $app blog</h1>
<p><% show ? description : '' %></p>
```

You can also call your own or predefined helper-functions:

```javascript
T.format = function(date) {
	return date.getMonth() +"."+ date.getDate() +"."+ date.getFullYear();
};

T.toString = function(mixed) {
	return mixed.toString();
};

var date = new Date(),
	age = 30;
```

```html
<p>$date|format</p>
<p>$age|toString</p>
```

**Anything not embedded in a line with an HTML-Tag will be executed as JavaScript.**

Possible errors in the template are output in the users console.

#### Install with bower

```bash
$ bower install tript
```

#### jQuery plugin

Use the jQuery plugin (dist/jquery.tript.min.js) if you want to render templates directly.

```javascript
$('#wrapper').renderTript(template, context);
```

#### Secrets

- tript.js actually means template-script. Awesome!
- tript.js is only 240 bytes of mix-and-match-madness.
- this script was inspired by [John Resig's Micro Templating](http://ejohn.org/blog/javascript-micro-templating/)
- Zombies will kill your friends if you don't use tript.js. *

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

( * Zombies will not kill your friends if you don't use tript.js. They'll eat you alive! )