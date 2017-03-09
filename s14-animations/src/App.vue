<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>CSS Animations</h2>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <hr>
                <button @click="show=!show" class="btn btn-alert">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                  <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition name="slide" type="animation">
                  <div class="alert alert-warning" v-if="show"><strong>This</strong> is a warning</div>
                </transition>
                <transition name="slide" appear>
                  <div class="alert alert-warning" v-if="show"><strong>This</strong> is a warning</div>
                </transition>
                <transition enter-active-class="animated bounce fadeIn" leave-active-class="animated shake fadeOut">
                  <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition name="fade" mode="in-out">
                  <div class="alert alert-info" v-if="show" key="info"><strong>This</strong> is some info</div>
                  <div class="alert alert-warning" v-else key="warning"><strong>This</strong> is a warning</div>
                </transition>

                <hr>

                <h2>Javascript Animations</h2>
                <button @click="load=!load" class="btn btn-alert">Load Element</button>
                <br><br>
                <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"

                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"

                :css="false"
                >
                  <div class="box" v-if="load"></div>
                </transition>
                <hr>
                <h2>Dynamic Element Animation</h2>
                <button class="btn btn-info" @click="switchComponent">Change Component</button>
                <br><br>
                <transition name="fade" appear mode="out-in">
                  <component :is="selectedComponent ? 'app-success' : 'app-danger'"></component>
                </transition>
                <hr>
                <h2>Multiple Elements (transition group)</h2>
                <form class="form-inline" @submit.prevent>
                  <div class="form-group">
                    <input type="text" class="form-control" v-model="newItem">
                    <button type="button" class="btn btn-primary" @click="addItem(newItem)">Add Item</button>
                  </div>
                <br><br>
                <ul class="list-group">
                  <transition-group name="slide">
                    <li
                    v-for="(item, index) in groceryList"
                    @click="removeItem(index)"
                    :key="'item-' + index"
                    style="cursor:pointer"
                    class="list-group-item">{{item}}</li>
                  </transition-group>
                </ul>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Danger from './components/Danger.vue'
  import Success from './components/Success.vue'
  export default {
      data() {
          return {
            load: false,
            show : false,
            alertAnimation : 'fade',
            elWidth: 100,
            selectedComponent : false,
            groceryList: ['apples', 'bacon', 'lettuce', 'eggs', 'milk', 'bread'],
            newItem: ''
          }
      },
      methods: {
        beforeEnter(el) {
          console.log('before enter')
          el.style.width = this.elWidth + 'px'
        },
        enter(el, done) {
          console.log('enter');
          let round = 1;
          const interval = setInterval(() => {
            el.style.width = (this.elWidth + round * 10) + 'px';
            round++
            if ( round > 20 ) {
              clearInterval(interval)
              done()
            }
          }, 20);
        },
        afterEnter(el) {
          console.log('after enter')
        },
        enterCancelled() {
          console.log('enter cancelled')
        },
        beforeLeave(el) {
          console.log('before leave')
          this.elWidth = 300
          el.style.width = this.elWidth + 'px'
        },
        leave(el, done) {
          console.log('leave');
          let round = 1;
          const interval = setInterval(() => {
            el.style.width = (this.elWidth - round * 10) + 'px';
            round++
            if ( round > 20 ) {
              clearInterval(interval)
              done()
            }
          }, 20);
        },
        afterLeave(el) {
          console.log('after leave')
        },
        leaveCancelled() {
          console.log('leave cancelled')
        },

        switchComponent() {
          this.selectedComponent = !this.selectedComponent
        },

        addItem(item) {
          if (item!='') this.groceryList.unshift(item)
        },
        removeItem(itemIndex) {
          this.groceryList.splice(itemIndex, 1)
        }
      },
      components: {
        appDanger: Danger,
        appSuccess: Success
      }
  }
</script>

<style>
.box {
  width: 300px;
  height: 100px;
  background-color: tomato;
}

.fade-enter, .slide-enter {
  opacity: 0;
}
.fade-enter-active, .slide-enter-active {
  transition: opacity 1s;
  /*Will use default*/
}
.fade-leave {
  /*Will use default*/
  /*opacity: 1*/
}
.fade-leave-active, .slide-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
    opacity: 0;
    /*transform: translateY(20px);*/
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
}

.slide-leave {

}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}

.slide-move {
    transition: transform 1s;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
</style>
