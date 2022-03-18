<template>
  <div class="hello">
    <h1>Learn the American Sign Language</h1>
    <h2>Alphabet Training</h2>
    <div>
      <img height="500px" :src="getSrc()"/>
    </div>
    <div>
      <input type="text" v-model="answer" @keyup="onAnswer" maxlength="1" size="1" autofocus />
      <div class="letter">Letter</div>
      <div class="letter" v-if="this.incorrect > 2">{{this.letter}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      letter: this.getRandomLetter(),
      answer: "",
      incorrect: 0
    };
  },
  methods: {
    getSrc() {
      return require("../assets/alphabet/" + this.letter + ".png");
    },
    getRandomLetter() {
      var alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      return alphabet[Math.floor(Math.random() * alphabet.length)];
    },
    onAnswer() {
      if (this.answer.toUpperCase() === this.letter) {
        this.letter = this.getRandomLetter();
        this.incorrect = 0;
      } else {
        this.incorrect++;
      }

      this.answer = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
img {
  margin-top: 50px;
}
a {
  color: #42b983;
}
.letter {
  color: grey;
}
input {
  font-size: 36px;
  padding: 10px;
  width: 25px;
  margin-top: 55px;
  margin-bottom: 15px;
}
</style>
