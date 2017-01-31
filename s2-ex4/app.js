new Vue({
  el: '#exercise',
  data: {
    intervalClasses: {
      highlight: true,
      shrink: false
    },
    userClass: 'enter class',
    color: 'red',
    border: 'thickBorder',
    userBool: false,
    userClass2: 'enter class',
    userStyle: 'enter a color',
    progress: 0
  },
  methods: {
    startEffect: function() {
      var vm = this

      setInterval(function() {
        vm.intervalClasses.highlight = !vm.intervalClasses.highlight;
        vm.intervalClasses.shrink = !vm.intervalClasses.shrink;
      }, 2000)
    },
    startProgress: function() {
      var vm = this,
          initProg = 0
      var timer = setInterval(function() {
        initProg += 1
        vm.progress = initProg + '%'
        if (initProg > 99) clearInterval(timer);
      }, 100)
    }
  }
});
