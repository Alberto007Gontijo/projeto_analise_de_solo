
const calcular = document.getElementById('calcular');


function transformar () {
    const ph = document.getElementById('ph').value;
    const p = document.getElementById('p').value;
    const k = document.getElementById('k').value;
    const ca = document.getElementById('ca').value;
    const mg = document.getElementById('mg').value;
    const na = document.getElementById('na').value;
    const fe = document.getElementById('fe').value;
    const s = document.getElementById('s').value;
    const mn = document.getElementById('mn').value;
    const cu = document.getElementById('cu').value;
    const b = document.getElementById('b').value;
    const zn = document.getElementById('zn').value;
    const resultado = document.getElementById('resultado');

    const resp = (p * 4.58).toFixed(2);
    const resk = (k * 2.41).toFixed(2);
    const resca = (ca * 560).toFixed(2);
    const resna = (na * 2).toFixed(2);
    const resmg = (mg * 403).toFixed(2);
    const resfe = (fe * 2).toFixed(2);
    const ress = (s * 2).toFixed(2);
    const resmn = (mn * 2).toFixed(2);
    const rescu = (cu * 2).toFixed(2);
    const resb = (b * 2).toFixed(2);
    const reszn = (zn * 2).toFixed(2);
   

    observacoes.textContent =
     `      Resultado: \n   
      P = ${resp} kg/ha; \n
      K = ${resk} kg/ha; \n
      Ca = ${resca} kg/ha; \n
      Na = ${resna} kg/ha; \n
      Mg = ${resmg} kg/ha; \n
      Fe = ${resfe} kg/ha; \n
      S = ${ress} kg/ha; \n
      Mn = ${resmn} kg/ha; \n
      Cu = ${rescu} kg/ha; \n
      B = ${resb} kg/ha; \n
      Zn = ${reszn} kg/ha;`
    

}

calcular.addEventListener('click', transformar);