var url =
  "https://my-json-server.typicode.com/classicoman2/fakeRESTserver/characters";

async function getData(url) {
  const response = await fetch(url);
  const promesa = response.json();
  return promesa;
}

/**
 *
 * @param {*} dades JSON data of the characters and its images
 */
function showCharacters(dades) {
  let pare = document.getElementById("characters");

  dades.forEach((character) => {
    //Create the div
    let div = document.createElement("div");
    //Add the class
    div.classList.add("character");
    //Append to the characters container
    pare.appendChild(div);

    //Add the name
    let h2 = document.createElement("h2");
    h2.innerHTML = character.name;
    div.appendChild(h2);

    //Add the motto
    let p = document.createElement("p");
    p.innerHTML = character.motto;
    div.appendChild(p);

    //Add the image
    let img = document.createElement("img");
    img.src = character.img;
    div.appendChild(img);
  });

  /*
                //Crea el div
                var div = document.createElement("div");
            div.classList.add("casella");
            pare.appendChild(div);

            //Crea element imatge
            var img = document.createElement("IMG");
            img.setAttribute("src", "images/grey-square.png");
            img.setAttribute("id", "pieza" + numero);
            // e.setAttribute("width", "304");
            // e.setAttribute("height", "228");
            img.setAttribute("alt", "Pieza" + numero);
            //Inserta img dins el div anterior
            div.appendChild(img);
*/
}
window.onload = () => {
  // Resolem la promesa amb then
  getData(url).then((dades) => showCharacters(dades));
};
