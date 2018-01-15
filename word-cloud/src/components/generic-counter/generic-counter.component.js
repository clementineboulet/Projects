export default {
    name: 'generic-counter',
    components: {},
    props: ['text'],
    data() {
        return {
            'inputWord': '',
            'cloud': new Map(),
            'reversedCloud': new Map(),
            'chronoCheckText': 0,
            'chronoCheckTextByreverse': 0,
            'isReversedCloudActive': false,
            'isCloudActive': false
        }
    },
    computed: {

    },
    mounted() {
        this.checkText()
    },
    methods: {
        checkText: function() {
            var cloud = new Map(),
                wordStartIndex,
                wordLength = 0,
                ponctuation = ['!', '?', '.'],
                start,
                end

            start = Math.floor(Date.now())

            for (var i = 0; i < this.text.length; i++) {
                let letter = this.text.charAt(i)

                if (this.checkIfLetter(letter)) {
                    /* catch:
                        Building up the word character by character (using +=) is more work.
                        Every time we append a character to a string, Javascript makes a whole new string.
                        If our input is one long word, then creating all these copies is O(n^2)time */
                    if (wordLength === 0) {
                        wordStartIndex = i
                    }

                    wordLength += 1
                } else if (wordLength) {
                    // check if words are capitalized. they are only if the are nouns,
                    // or if they are the first word of the sentence
                    var word = this.text.slice(wordStartIndex, wordStartIndex + wordLength)
                    var previousLetter = wordStartIndex > 2 ? this.text.slice(wordStartIndex - 2, wordStartIndex - 1) : '.'

                    if (ponctuation.includes(previousLetter)) {
                        word = word.toLowerCase()
                    }
                    wordLength = 0

                    if (cloud.has(word)) {
                        cloud.set(word, cloud.get(word) + 1)
                    } else if (word) {
                        cloud.set(word, 1)
                    }
                }
            }

            end = Math.floor(Date.now())
            this.chronoCheckText = end - start
            this.cloud = Array.from(cloud).reduce((obj, [key, value]) => (
                Object.assign(obj, { [key]: value }) // Be careful! Maps can have non-String keys; object literals can't.
              ), {})

            console.log(cloud)
            console.log('Cloud: ', start, ' - ', end)
            this.checkTextByReverse()
        },

        checkTextByReverse: function() {
            var cloud = new Map(),
                wordStartIndex,
                wordLength = 0,
                ponctuation = ['!', '?', '.'],
                start,
                end

            start = Math.floor(Date.now())

            for (var i = this.text.length - 1; i > -1; i--) {
                let letter = this.text.charAt(i)

                if (this.checkIfLetter(letter) && i) { // for the first word the i condition is necessary
                    wordStartIndex = i
                    wordLength += 1
                } else if (wordLength) {
                    if (i === 0) { // for the first word
                        wordStartIndex = i
                        wordLength += 1
                    }

                    var word = this.text.slice(wordStartIndex, wordStartIndex + wordLength)
                    var previousLetter = i > 1 ? this.text.slice(i - 1, i) : '.'
                    // this check is faster and take less space than in the previous function

                    if (ponctuation.includes(previousLetter)) {
                        word = word.toLowerCase()
                        i-- // to go faster we are removing unecessary checks
                    }
                    wordLength = 0

                    if (cloud.has(word)) {
                        cloud.set(word, cloud.get(word) + 1)
                    } else if (word) {
                        cloud.set(word, 1)
                    }
                }
            }

            end = Math.floor(Date.now())
            this.chronoCheckTextByreverse = end - start
            this.reversedCloud = Array.from(cloud).reduce((obj, [key, value]) => (
                Object.assign(obj, { [key]: value }) // Be careful! Maps can have non-String keys; object literals can't.
              ), {})
            console.log(cloud)
            console.log('reversed Cloud: ', start, ' - ', end)
        },
        checkIfLetter: function(character) {
            return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-'".indexOf(character) >= 0
        }
    }
}
