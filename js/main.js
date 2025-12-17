const original = {
  surname: "ВЕРСТАППЕН",
  name: "МАКС"
};

const latin = {
  surname: "VERSTAPPEN",
  name: "MAX"
};

function toLatin() {
  document.getElementById("surname").innerText = latin.surname;
  document.getElementById("name").innerText = latin.name;
}

function toCyrillic() {
  document.getElementById("surname").innerText = original.surname;
  document.getElementById("name").innerText = original.name;
}

    function solve() {
      const S = Number(document.getElementById('S').value);
      const R = Number(document.getElementById('R').value);
      const K = Number(document.getElementById('K').value);

      const side = Math.sqrt(S);

      document.getElementById('result').innerText =
        (side >= 2 * (R + K))
          ? 'Ответ: ДА, сцену можно разместить.'
          : 'Ответ: НЕТ, сцену разместить нельзя.';
    }