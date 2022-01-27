let keysIncrept = {
   "a": "ai",
   "e": "enter",
   "i": "imes",
   "o": "ober",
   "u": "ufat"
 }
 let valueEntry = "";
 let valueExit= [];
 let clave= "";
 let valueConvert = "";
 let valueConvertdescry = ""

 let botonDesencriptar = document.querySelector("#btn-desencriptar");
 botonDesencriptar.addEventListener("click", ()=>{
  let textoDesencriptado = desencriptar(valueConvert);

  let resultado = document.querySelector("#resultado");
  resultado.value = textoDesencriptado;
})

function encrypt() {
  valueEntry = document.getElementById("input-texto").value;
  let words = valueEntry.split("");
  valueExit= words.map((e) => {
    if (keysIncrept[e] !== undefined)
    e = e.replace(e, keysIncrept[e]);
    return e;
  });
  valueConvert= valueExit.toString().replace(/,/g,"");
}

//Funcion para desencriptar texto.
let botonEncriptar = document.querySelector("#btn-encriptar")
botonEncriptar.addEventListener("click", () => {
   encrypt();
  let resultados = document.querySelector("#resultado");
  resultados.value = valueConvert;
})
function desencriptar (textoUsuario) {
  let textoEncriptado = "";
  for (const clave in keysIncrept) {
      textoEncriptado = textoUsuario.replaceAll(keysIncrept[clave],clave);
      //se actualiza el texto del usuario con las modificaciones ya realizadas.
      textoUsuario = textoEncriptado;       
  }
  return textoEncriptado;
}

let botonCopiar = document.querySelector("#copiar");


botonCopiar.addEventListener("click",()=>{    
    let textoCopiado = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(textoCopiado);
})
//  .replace(/,/g,"")
// console.log(wordEncrypt);
// for (const key in keysIncrept) {
//   wordEncrypt.map((el)=>{
//     if (keysIncrept[key] == el) {
//     el.replace(el, key );
//     }
//   })
// }
 /* Reglas de encriptación: 
 "e" es convertido para "enter" 
 "i" es convertido para "imes"
 "a" es convertido para "ai"
 "o" es convertido para "ober"
 "u" es convertido para "ufat"
 Solo letras minusculas
 No se permite acentuación de palabras 
 */

 //  for (var item in keysIncrept) {
 //     if (valueEntry.includes(item)) {
 //       console.log(valueEntry.replace(item, item ));
 //       console.log(item);
 //     }
 // }
 // console.log("este es el valor del input", valueEntry);
 // }

 /* Reglas de desencriptación: 
 "enter" es convertido para "e" 
 "imes" es convertido para "i"
 "ai" es convertido para "a"
 "ober" es convertido para "o"
 "ufat" es convertido para "u"
 Solo letras minusculas
 No se permite acentuación de palabras   
 */
