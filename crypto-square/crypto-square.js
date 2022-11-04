
export class Crypto {
  constructor(phrase) {
    this.phrase = phrase.replace(/[^\w]/g, "").toLowerCase();
  }

  rows_n_coumns() {
    for (let i = 1; i <= this.phrase.length; i++) {
      for (let j = 1; j <= this.phrase.length; j++) {
        if (i * j >= this.phrase.length && j >= i && j - i <= 1) {
          return [i, j];
        }
      }
    }
  }

  get ciphertext() {
    if (!this.phrase) return "";
    let count = 0,
      txt = "";
    let [x, y] = this.rows_n_coumns();

    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        txt += this.phrase[i + y * j] || " ";
      }
    }
    let len = txt.length;
    txt = txt.split("");
    for (let i = x; i < len; i += x) {
      txt.splice(i + count, 0, " ");
      count++;
    }
    return txt.join("");
  }
}
