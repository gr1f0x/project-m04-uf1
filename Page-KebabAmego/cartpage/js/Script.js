function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function deleteItem(button) {
    var item = button.closest('.item');
    item.remove();
}

function toggleComplement(option) {
    console.log("Toggle complement:", option);
}

function incrementQuantity() {
    complementQuantity++;
    updateQuantityDisplay();
}

function decrementQuantity() {
    if (complementQuantity > 0) {
        complementQuantity--;
        updateQuantityDisplay();
    }
}

function updateQuantityDisplay() {
    document.getElementById("complementQuantity").innerText = complementQuantity;
}

function addComplements(button) {
    var popup = button.parentElement;
    var complementCheckboxes = popup.querySelectorAll('.complement-checkbox:checked');

    complementCheckboxes.forEach(function (checkbox) {
        console.log("Complemento seleccionado:", checkbox.value);
    });

    closePopup(button);
    
}
// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get("lang")) {
  const lang = urlParams.get("lang");
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar l'idioma a la URL
  const newURL =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?lang=" +
    lang;
  window.history.replaceState({}, "", newURL);

  // Obtenir el fitxer json corresponent
  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();

async function changeLanguage(lang) {
  // Guardar el idioma en la URL
  const newURL =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    "?lang=" +
    lang;
  window.history.replaceState({}, "", newURL);

  // Obtener el archivo JSON correspondiente
  const response = await fetch(`./i18n/${lang}.json`);
  const data = await response.json();

  document.getElementById("image_lang").src = data.nav.image_lang;
}

   // Nav
   document.getElementById("image_lang").src = data.nav.image_lang;
  document.getElementById("lang_button").innerHTML = data.nav.lang_button;
   document.getElementById("home_button").innerHTML = data.nav.home_button;
   document.getElementById("menu_button").innerHTML = data.nav.menu_button;
  document.getElementById("about_button").innerHTML = data.nav.about_button;
   document.getElementById("contact_button").innerHTML = data.nav.contact_button;
   document.getElementById("cart_button").innerHTML = data.nav.cart_button;

//   // Productos
   document.getElementById("food1_title").innerHTML = data.products.food1;
   document.getElementById("food1_price").innerHTML = data.products.food1_desc;
  document.getElementById("food2_title").innerHTML = data.products.food2;
  document.getElementById("food2_price").innerHTML = data.products.food2_desc;
  document.getElementById("food3_title").innerHTML = data.products.food3;
   document.getElementById("food3_price").innerHTML = data.products.food3_desc;
   document.getElementById("resumen_title").innerHTML = data.products.cta_text;

   // Footer
  document.getElementById("menu_text").innerHTML = data.footer.menu_text;
   document.getElementById("footer_home_button").innerHTML = data.footer.footer_home_button;
  document.getElementById("footer_contact_button").innerHTML = data.footer.footer_contact_button;
   document.getElementById("footer_phone").innerHTML = data.footer.footer_phone;
   document.getElementById("footer_email").innerHTML = data.footer.footer_email;
  document.getElementById("legal_text").innerHTML = data.footer.legal_text;
   document.getElementById("policy_text").innerHTML = data.footer.policy_text;
   document.getElementById("cookies_text").innerHTML = data.footer.cookies_text;
  document.getElementById("advice_text").innerHTML = data.footer.advice_text;
  document.getElementById("follow_text").innerHTML = data.footer.follow_text;
  document.getElementById("copyright_text").innerHTML = data.footer.copyright_text;
}



