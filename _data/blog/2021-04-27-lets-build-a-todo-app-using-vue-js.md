---
template: BlogPost
path: /blog/lets-build-a-todo-app-using-vuejs
date: 2021-04-27T00:37:03.757Z
title: Let's build a Todo App Using Vue.js
metaDescription: Let's build a simple and retro Todo App using Vue.js and NES.css
thumbnail: /assets/54p1qrmpn3u7fppmahl7.png
---
When you are starting to learn a new programming language or framework, a TODO app is one of the first things you build, many people hate it, others love it, personally, I think it’s a great option to give you an idea of how a language/framework works. So now that I'm learning Vue.js I decided to create one.

This is the final result:
[TODO Vue Finished - JSFiddle](https://jsfiddle.net/HugoLiconV/snaj9opd/embedded/result)

<iframe width="100%" height="300" src="//jsfiddle.net/HugoLiconV/snaj9opd/embedded/result,html,css,js/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

We will simply use [Vue.js](https://vuejs.org/) and [NES.css](https://nostalgic-css.github.io/NES.css/) for styles.

And because it is a simple app we will be using JSFiddle, here is the [base project](https://jsfiddle.net/HugoLiconV/e4sxpru9/) if you want to follow the tutorial: 
So let’s start.

As we can see, we have three tabs: HTML, Vue, and CSS.
In the HTML tab, we only have a `<link>` to get the Press Start font and a `div` with a header inside. The important thing here is to point out that this is where we will have access to all the variables and methods that we will use in our Vue file.

```html
<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
<div id="app"> 
    <h1>TODOS:</h1>
</div>
```

While in the Vue tab we have our Vue instance and this is where all the logic of the app will be.

```javascript
new Vue({
  el: "#app",
  data: {
    todos: [
      { text: 'todo 1', done: false, id: Date.now() },
      { text: 'todo 2', done: false, id: Date.now() + 1 }
    ]
  },
  methods: {

  }
})
```

Within the properties that we pass to Vue instance is `el` and it serves to indicate to Vue in which DOM element it is going to be mounted.
In the same way, we have `data` and guess what, it is used to store all the data that we use during the app, which in this case will only be an array of objects called `todos`.

Finally, we have methods, here we will put all the functions of the app.

As mentioned above, we can access all the variables defined in `data` inside the div and we can check it simply by adding a new variable called title and to access it we use the following syntax inside our HTML: `{{variableName}} `. Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance's data.

```javascript
data: {
  title: 'TODOS',
  todos: [
    { text: 'todo 1', done: false, id: Date.now() },
    { text: 'todo 2', done: false, id: Date.now() + 1 }
  ]
}
```
```html
<div id="app">
  <h1>{{title}}:</h1>
</div>
```
Before coding the app logic, let’s define what the app should do:
* It should display a list of TODOs.
* It should add TODOs.
* It should delete TODOs.
* It should mark TODOs as Done.

## Showing TODOs
If you remember, we already have an array of objects in data to store TODOs.

```javascript
data: {
  title: 'TODOS',
  todos: [
    { text: 'todo 1', done: false, id: Date.now() },
    { text: 'todo 2', done: false, id: Date.now() + 1 }
  ]
}
```

We want to show the TODO text and the state on a list.

```html
<ul>
  <li class="flex"></li> 
</ul>
```

This is the base structure, now we simply have to show the array data and we can do it using the template syntax `{{}}`
```html
<ul>
  <li class="flex"> {{todos[0].text}} </li> 
  <li class="flex"> {{todos[1].text}} </li>
</ul>
```
But that is something repetitive, fortunately, Vue offers a directive called `v-for` that allows us to iterate over the elements of an array. So we can refactor the previous code in the following:
```html
<ul> 
  <!-- Remember that todos is the name of our array --> 
  <li v-for="todo in todos" class="flex"> 
    <!-- and now, we can access to an item using todo--> 
    {{todo.text}} 
  </li>
</ul>
```
![Showing TODOs](https://thepracticaldev.s3.amazonaws.com/i/m1kfpo080pgy8xvzx87e.png)

## Adding TODOs
To add TODOS we need an input field.
```html
<input type=“text” class=“nes-input” placeholder="Add todo…">
```
What we want to do is add a TODO every time the enter key is pressed. Vue allows us to listen for events using the syntax of  `v-on:some-event="doSomething"`, in this case, what we need is to use `v-on:keyup.enter`, here, keyup is the event we want to hear and enter the key that we need to trigger addTodo.

```html
<input type="text" class="nes-input" placeholder="Add todo..." v-on:keyup.enter="addTodo">   
```

Now, we just add our method addTodo

```javascript
methods: {
  addTodo(event) {
    const text = event.target.value
    this.todos.push({text, done: false, id: Date.now()})
    event.target.value = ''
  }
}
```

We almost finished, we just need to remove TODOs and mark them as done.
- [x] It should display a list of TODOs
- [x] It should add TODOs
- [ ] It should remove TODOs
- [ ] It should mark TODOs as Done

## Remove TODOs
The first thing we do is add a button to remove TODOs:
```html
<li v-for="todo in todos" class="flex">
  <!-- and now, we can access to an item using todo-->
  {{todo.text}}
  <div class="space"></div>
  <button class="nes-btn is-error padding">X</button>
</li>
```
Now, what we have to do is listen for an `onclick` event, following the syntax for the events `v-on:some-event="doSomething"`, we get this `v-on:click ="removeTodo(todo.id)"`. We will call the removeTodo method and pass it the todo id. After that, we need to create that method.

```html
<ul>
  <li v-for="todo in todos" class="flex">
    {{todo.text}}
    <div class="space"></div>
    <button class="nes-btn is-error padding" v-on:click="removeTodo(todo.id)">X</button>
  </li>
</ul>
```

```javascript
removeTodo(id) {
  this.todos = this.todos.filter(todo => todo.id !== id)
}
```

## Marking TODOs as done
Finally, we just need to mark the TODOs as done, for this, we will add a checkbox.

```html
<ul>
  <li v-for="todo in todos" class="flex">
    <label>
      <input type="checkbox" class="nes-checkbox">
      <span>&nbsp</span>
    </label> 
    {{todo.text}}
    <div class="space"></div>
    <button class="nes-btn is-error padding" v-on:click="removeTodo(todo.id)">X</button>
  </li>
</ul>
```

We put the checkbox inside a `label` and we add a `span` with a space because NES.css has a bug, and if you don't do it this way, it doesn't show the checkbox.
Well, here we have to do two things, first, we want that every time the checkbox is pressed, change the todo state from `done: false` to` done: true` and vice versa, so what do we need? you guessed, an event listener:

```html
<input type="checkbox" class="nes-checkbox" v-on:click="check(todo)">
```

And we add the `check` method:

```javascript
check(todo){
  todo.done = !todo.done
}
```

![Marking TODOs as done](https://thepracticaldev.s3.amazonaws.com/i/a3v4eq8fud1g23qlxptm.png)
And that's it, we're done, right? well, not quite, there is a small bug in our app. Let's do this, let's change one of our TODOs from `done: false` a `done: true`

```javascript
data: {
  title: 'TODOS',
  todos: [
    {text: 'todo 1', done: false, id: Date.now()},
    {text: 'todo 2', done: true, id: Date.now() + 1}
  ]
}
```

![Bug](https://thepracticaldev.s3.amazonaws.com/i/end4fsakh4dq22cp6sz2.png)
There's the bug, our checkbox is not "synchronized" with the state of our TODO, so we have to use something called v-bind so that the `checked` property of the input is bind with the `done` property of our TODO, the syntax is this: `v-bind:checked ="todo.done"`

```html
<input type="checkbox" class="nes-checkbox" v-on:click="check(todo)" v-bind:checked="todo.done">
```

![Bug Fixed](https://thepracticaldev.s3.amazonaws.com/i/jeolqnui8xbpukjhqpji.png)
We're about to finish, we just need to add a little visual detail, we want that if the TODO is marked as done, strike the text like this:
![Last details](https://thepracticaldev.s3.amazonaws.com/i/7la7bvglqbv8ta5otjoz.png)
This is pretty easy to do, we just use `v-if` and `v-else`

```html
<ul>
  <li v-for="todo in todos" class="flex">
    <label>
      <input type="checkbox" class="nes-checkbox">
      <span>&nbsp</span>
    </label> 
    <!-- WE DELETE THIS: {{todo.text}} -->
    <del v-if="todo.done">{{ todo.text }}</del>
    <span v-else>{{ todo.text }}</span>
    <div class="space"></div>
    <button class="nes-btn is-error padding" v-on:click="removeTodo(todo.id)">X</button>
  </li>
</ul>
```

And now we are done.
![App finished](https://thepracticaldev.s3.amazonaws.com/i/ba9rltex3qu52hgjb1bo.png)

## Refactoring our App
I know I said that we had finished, but we can refactor the code a little bit, Vue has something called v-model, which allows us to replace the v-bind and the v-on:click in our checkbox. According to the [vue documentation](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components) this:

```html
<input v-model=“searchText”>
```

It is the same as this:

```html
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

So let’s refactor our app. We replace `v-on:click="check(todo)"` and `v-bind:checked="todo.done"` for `v-model="todo.done"`, and now we can also delete the `check` method. 

```html
<input type="checkbox" class="nes-checkbox" v-model="todo.done">
```

Now we've really finished.

As you can see, Vue it's very simple and easy to learn. To get started, all you need is familiarity with HTML and some JavaScript. If you have experience with other frameworks such as React or Angular the process of learning Vue will be much simpler.

I hope you liked it.