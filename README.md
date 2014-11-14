### tript

> A tiny Template-Engine (244 bytes) mixing up HTML and pure JavaScript in one template

tript is a tiny and simple template-engine which allows you to mixup JavaScript and HTML.<br>
Easy as pie you combine both languages - access variables - manipulate content - loop the hell through stuff and finally destroy the world, but this time in one template!<br>

#### Getting started

It's easy.


#### Variables

Any context-member or variable is accessible inside any HTML-Tag via `$`.<br>
To execute pure JavaScript in an HTML-Tag, use the `<% ... %>`-Tags.

```html
<h1>my awesome $app blog</h1>
<p><% show ? description : '' %></p>
```

You can also call your own or existing prototype-functions:

```javascript
Date.prototype.output = function() {
	return this.getMonth() +"."+ this.getDate() +"."+ this.getFullYear();
};

var date = new Date(),
	age = 30;
```

```html
<p>$date.format()</p>
<p>$age.toString()</p>
```

#### Demo

Go check out [this demo](http://codepen.io/misantronic/pen/ogNbBa) at codepen.io.

#### Example

```html
<!-- Embed tript -->
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

					<h2>#$i, $title on $date.format()</h2>
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
Date.prototype.output = function() {
	return this.getMonth() +"."+ this.getDate() +"."+ this.getFullYear();
};

// set context
var context = {
	app: 'tript',
	headline: 'A tiny Template-Engine mixing up HTML and pure JavaScript in one template',
	description: 'tript is a freakin\' tiny template-engine which allows you to mixup JavaScript and HTML.',
	posts: [
		{
			title: 'Big News',
			date: new Date('2014-11-14'),
			body: 'tript is great!'
		},
		{
			title: 'Bad News',
			date: new Date('2014-11-11'),
			body: "tript doesn't exist yet :("
		}
	]
};

// parse template
document.body.innerHTML = T(template.innerHTML, context);
```

#### Install with bower

```bash
$ bower install tript
```


#### Secrets

- tript actually means template-script. Awesome!
- tript is only 244 bytes of mix-and-match-madness.
- this script was inspired by [John Resig's Micro Templating](http://ejohn.org/blog/javascript-micro-templating/)
- Zombies will kill your friends if you don't use tript. *

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

( * Zombies will not kill your friends if you don't use tript. They'll eat you! )