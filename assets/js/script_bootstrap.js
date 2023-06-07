// bootstrap - validação campos select 1ª e 2ª validações - script modificado
/* 
 (() => {

  "use strict";

    const forms = document.querySelectorAll('.needs-validation');
    const btn = document.querySelector(".section-busca__btn-buscar");

    Array.prototype.slice.call(forms)
    .forEach(function (form) {
      btn.addEventListener('click', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})() */
/* 
(() => {

  "use strict";

    const forms = document.querySelectorAll('.needs-validation');
    const btn = document.querySelector(".section-busca__btn-buscar");

    Array.prototype.slice.call(forms)
    .forEach(function (form) {
      btn.addEventListener('click', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()
 */
/* 
const SELECTS = document.querySelectorAll(".form-select");
const btn = document.querySelector(".section-busca__btn-buscar");


(() => {
  const p = document.createElement("p");
  p.textContent = "teste";
  SELECTS.forEach(function(select) {
    btn.addEventListener("click", (e) => {
      if(!select.checkValidity()) {
        select.insertAdjacentElement("afterend", p);
      }
    })
  }); 
})();


 */









