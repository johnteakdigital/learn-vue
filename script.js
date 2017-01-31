// BASICS
var app = new Vue({
el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

// CONDITIONALS / LOOPS
var app3 = new Vue({
el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

// USER INPUT
var app5 = new Vue({
el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
el: '#app-6',
  data: {
    message: 'Two-way binding!'
  }
})

// COMPONENTS

// Define a new component called todo-item
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }} - <em>${{ todo.price }}</em></li>'
})

// Data
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {text: 'Vegetables', price: 2},
      {text: 'Cheese', price: 4.5},
      {text: 'Whatever else', price: 30}
    ]
  }
})

// TEMPLATES
var app8 = new Vue({
  el: '#app-8',
  data: {
    title: 'Hello World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!'
      return this.title; // Vue gives us access to all properties within itself
    }
  }
})

// Events

var app9 = new Vue({
  el: '#app-9',
  data: {
    count: 0,
    x: 0, y: 0
  },
  methods: {
    increaseCount: function(n, e) {
      this.count += n
    },
    decreaseCount: function(n, e) {
      this.count -= n
    },
    updateCoords: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    alertMe: function() {
      console.warn('Return pressed!')
    }
  }
})

//Two-way binding, computed and watch
var app10 = new Vue({
  el: '#app-10',
  data: {
    name: 'Max',
    count: 0,
    count2: 0
  },
  computed: {
    output: function() {
      console.log('computed')
      return this.count > 5 ? 'Greater than 5' : 'Less than 5'
    }
  },
  watch: {
    count: function(val) {
      var vm = this;
      setTimeout(function() {
        vm.count = 0;
      }, 2000)
    }
  },
  methods: {
    result: function () {
      console.log('method')
      return this.count > 5 ? 'Greater than 5' : 'Less than 5'
    }
  }
})

// Shorthands
var app11 = new Vue({
  el: '#app-11',
  data: {
    title: 'Google',
    link: 'http://google.com'
  },
  methods : {
    changeLink: function() {
      this.link = 'http://bing.com'
      this.title = 'Bing'
    }
  }
})

//Styles
var css1 = new Vue({
  el: '#css-1',
  data: {
    attachRed: false,
    color: 'green'
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
})

var css2 = new Vue({
  el: '#css-2',
  data: {
    color: 'grey',
    width: 100
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})

var cd1 = new Vue({
  el: '#cd-1',
  data: {
    visible: true
  }
})

var list1 = new Vue({
  el: '#lists-1',
  data: {
    ingredients: ['meat', 'fruit', 'cookies'],
    people: [
      {name: 'Max', age: 27, color: 'red'},
      {name: 'Johnee', age: 30, color: 'blue'},
      {name: 'Angela', age: 'unknown', color: 'purple'}
    ],
    newItem: ''
  },
  methods: {
    addNewItem: function(){
      if(this.newItem != '') {
        this.ingredients.push(this.newItem)
        this.newItem = ''
      }
    }
  }
})
