var monsterBash = new Vue({
  el: '#app',
  data: {
    gameInit : false,
    monsterHp : 100,
    playerHp : 100,
    playerDmg : 0,
    monsterDmg : 0,
    playerHeal : 0,
    status : []
  },
  computed: {
    takeDamage: function(char, dmg) {},
    playerHeals: function(hp) {}
  },
  methods: {
    startNewGame: function() {
      this.gameInit = !this.gameInit
      this.monsterHp = 100
      this.playerHp = 100
      this.status = []
    },
    attack: function() {
      this.playerDmg = this.computeStatus(5);
      this.updateStatus('player',this.playerDmg, 'attacks');
      this.monsterAttack(8)
    },
    specialAttack: function() {
      this.playerDmg = this.computeStatus(8);
      this.updateStatus('player',this.playerDmg, 'summons fireball and hits');
      this.monsterAttack(10)
    },
    heal: function() {
      this.playerHeal = this.computeStatus(5,1);
      this.updateStatus('player',this.playerHeal, 'healed');
      this.monsterAttack(5)
    },
    monsterAttack: function(str) {
      this.monsterDmg = this.computeStatus(str);
      this.updateStatus('monster',this.monsterDmg, 'attacks');
    },
    updateStatus: function(char, stat, type) {
      this.status.push({char:char, stat:stat, type:type})
    },
    computeStatus: function(n, min) {
      var min = min || 0;
      return Math.floor((Math.random() * n) + min)
    }
  }
})
