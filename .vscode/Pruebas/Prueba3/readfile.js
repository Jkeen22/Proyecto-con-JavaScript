const input = document.getElementById("imgInput");
const img = document.getElementById("img");

input.addEventListener("change", () => {
  const archivo = input.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    img.src = reader.result;
  };

  reader.readAsDataURL(archivo);
});

//

const inpu = document.getElementById("files");
const galeria = document.getElementById("galeria");

inpu.addEventListener("change", () => {
  const archivos = inpu.files;

  for (let i = 0; i < archivos.length; i++) {
    const archivo = archivos[i];
    const reader = new FileReader();

    reader.onload = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      img.style.width = "100px";
      galeria.appendChild(img);
    };

    reader.readAsDataURL(archivo);
  }
});
