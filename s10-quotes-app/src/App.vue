<template>
    <div class="container">
      <progress-bar>
        <div class="progress">
          <div class="progress-bar" :style="{width: (quotes.length * 10) + '%'}">
            <span>{{quotes.length}}/{{maxQuotes}}</span>
          </div>
        </div>
      </progress-bar>
      <quote-input :quotes="quotes" @quoteAdded="addQuote"></quote-input>
      <quote-repo :quotes="quotes" @quoteDeleted="deleteQuote"></quote-repo>
      <div @infoUpdate="this.info = $event" class="panel" :class="'panel-' + info.status">
        <div class="panel-body text-center text-info" :class="'bg-' + info.status">
          {{ info.msg }}
        </div>
      </div>
    </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import QuoteInput from './components/QuoteInput.vue'
import QuoteRepo from './components/QuoteRepo.vue'

export default {
  data() {
    return {
      info: {
        msg: 'Info: Click on a Quote to Delete it',
        status: 'info'
      },
      maxQuotes: 10,
      quotes: ['I had a dream... or something']
    }
  },
  components: {
    'progress-bar' : ProgressBar,
    'quote-input' : QuoteInput,
    'quote-repo' : QuoteRepo
  },
  methods: {
    addQuote(q) {
      if (this.quotes.length<10) {
        if (q != '') {
          this.quotes.push(q)
          this.info = {
            msg: 'Info: Click on a Quote to Delete it',
            status: 'info'
          }
        }
        else {
          this.info = {
            msg: 'Please enter a quote',
            status: 'warning'
          }
        }
      }
      else {
        this.info = {
          msg: 'Please remove quote',
          status: 'danger'
        }
      }
    },
    deleteQuote(index) {
      this.quotes.pop(index)
    }
  }
}
</script>

<style>
</style>
