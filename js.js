const hasilDiv = document.getElementById("hasil");
const riwayatDiv = document.getElementById("riwayat");

function hitung() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    hasilDiv.textContent = "⚠️ Masukkan dua angka valid.";
    hasilDiv.style.color = "red";
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "⚠️ Tidak bisa bagi nol.";
      break;
    default:
      result = "⚠️ Operator tidak valid.";
  }

  hasilDiv.style.color = "#00796b";
  hasilDiv.textContent = `Hasil: ${result}`;

  if (typeof result === "number") {
    const riwayatItem = document.createElement("div");
    riwayatItem.textContent = `${num1} ${operator} ${num2} = ${result}`;
    riwayatDiv.prepend(riwayatItem);
  }
}

function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").value = "+";
  hasilDiv.textContent = "Hasil akan muncul di sini";
  hasilDiv.style.color = "#00796b";
  riwayatDiv.innerHTML = "";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
