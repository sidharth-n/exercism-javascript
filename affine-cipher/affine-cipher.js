export const areCoprimes = (num1, num2) => {
  const smaller = num1 > num2 ? num1 : num2;
  for (let ind = 2; ind < smaller; ind++) {
    const condition1 = num1 % ind === 0;
    const condition2 = num2 % ind === 0;
    if (condition1 && condition2) {
      return false;
    }
  }
  return true;
};

export const modular_multiplicative_inverse = (a, m) => {
  for (let i = 1; i <= m; i++) {
    if ((a * i) % m == 1) return i;
  }
};

export const substitute = (x, key, type = "encode") => {
  if (/[0-9\s]/g.test(x)) return x;

  let letter_index = x.charCodeAt(0) - 97;
  let new_letter_index;
  if (type == "encode") {
    new_letter_index = (key.a * letter_index + key.b) % 26;
  } // m==26 for Roman alphabet
  else {
    new_letter_index =
      (modular_multiplicative_inverse(key.a, 26) * (letter_index - key.b)) % 26;
    if (new_letter_index < 0) new_letter_index += 26;
  }
  return String.fromCharCode(97 + new_letter_index);
};


export const encode = (phrase, key) => {
  if (!areCoprimes(key.a, 26)) throw new Error("a and m must be coprime.");

  let splice_pos = 1;
  phrase = phrase.replace(/[^\w]/g, "").toLowerCase().split("");

  for (let i = 0; i < phrase.length; i++) {
    phrase[i] = substitute(phrase[i], key);
    if ((i + 1) % 5 == 0) {
      phrase.splice(i + splice_pos, 0, " ");
      splice_pos++;
    }
  }

  return phrase.join("").trim();
};

export const decode = (phrase, key) => {
  if (!areCoprimes(key.a, 26)) throw new Error("a and m must be coprime.");
  phrase = phrase.replace(/[\s]/g, "").toLowerCase().split("");

  for (let i = 0; i < phrase.length; i++) {
    phrase[i] = substitute(phrase[i], key, "decode");
  }

  return phrase.join("");
};
