export default class WordSearch {
  constructor(grid) {
    this.grid = grid;
    this.result = {};
  }

  find(words) {
    let count = 0,temp;
    for (let word of words) {
      let reverse_word = word.split("").reverse().join("");
      for (let line of this.grid) {
        if (line.includes(word)) {
          this.result[word] = {
            start: [this.grid.indexOf(line) + 1, line.indexOf(word) + 1],
            end: [
              this.grid.indexOf(line) + 1,
              line.indexOf(word) + word.length,
            ],
          };
        }
        if (line.includes(reverse_word)) {
          this.result[word] = {
            start: [
              this.grid.indexOf(line) + 1,
              line.indexOf(reverse_word) + word.length,
            ],
            end: [this.grid.indexOf(line) + 1, line.indexOf(reverse_word) + 1],
          };
        }
        if (line.includes(word[0])) {
          for (let i = 0; i < line.length; i++) {
            if (line[i] == word[0]) {
              temp = "";
              for (let x = this.grid.indexOf(line); x < this.grid.length; x++) {
                temp += this.grid[x][i];
                if (temp == word) {
                  this.result[word] = {
                    start: [this.grid.indexOf(line) + 1, i + 1],
                    end: [x + 1, i + 1],
                  };
                }
              }
              count = 0;
              temp = "";
              for (let x = this.grid.indexOf(line); x < this.grid.length; x++) {
                temp += this.grid[x][i + count];
                if (temp == word) {
                  this.result[word] = {
                    start: [this.grid.indexOf(line) + 1, i + 1],
                    end: [x + 1, i + count + 1],
                  };
                }
                count++;
              }

              count = 0;
              temp = "";
              for (let x = this.grid.indexOf(line); x < this.grid.length; x++) {
                temp += this.grid[x][i - count];
                if (temp == word) {
                  this.result[word] = {
                    start: [this.grid.indexOf(line) + 1, i + 1],
                    end: [x + 1, i - count + 1],
                  };
                }
                count++;
              }
            }
          }
        }

        if (line.includes(reverse_word[0])) {
          let temp;
          for (let i = 0; i < line.length; i++) {
            if (line[i] == reverse_word[0]) {
              temp = "";
              for (let x = this.grid.indexOf(line); x < this.grid.length; x++) {
                temp += this.grid[x][i];
                if (temp == reverse_word) {
                  this.result[word] = {
                    start: [x + 1, i + 1],
                    end: [this.grid.indexOf(line) + 1, i + 1],
                  };
                }
              }

              count = 0;
              temp = "";
              for (let x = this.grid.indexOf(line); x < this.grid.length; x++) {
                temp += this.grid[x][i + count];
                if (temp == reverse_word) {
                  this.result[word] = {
                    start: [x + 1, i + count + 1],
                    end: [this.grid.indexOf(line) + 1, i + 1],
                  };
                }
                count++;
              }

              count = 0;
              temp = "";
              for (let x = this.grid.indexOf(line); x < this.grid.length; x++) {
                temp += this.grid[x][i - count];
                if (temp == reverse_word) {
                  this.result[word] = {
                    start: [x + 1, i - count + 1],
                    end: [this.grid.indexOf(line) + 1, i + 1],
                  };
                }
                count++;
              }
            }
          }
        }
      }
    }

    return this.result;
  }
}
