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
  const response = await fetch(`./i18n/${lang}.json`);
  const data = await response.json();

  //Nav
  document.getElementById("image_lang").src = data.nav.image_lang;
  document.getElementById("lang_button").innerHTML = data.nav.lang_button;
  document.getElementById("home_button").innerHTML = data.nav.home_button;
  document.getElementById("menu_button").innerHTML = data.nav.menu_button;
  document.getElementById("contact_button").innerHTML = data.nav.contact_button;
  document.getElementById("cart_button").innerHTML = data.nav.cart_button;

  //Products
  document.getElementById("card_text").innerHTML = data.products.card_text;
  document.getElementById("food1").innerHTML = data.products.food1;
  document.getElementById("food1_desc").innerHTML = data.products.food1_desc;
  document.getElementById("food2").innerHTML = data.products.food2;
  document.getElementById("food2_desc").innerHTML = data.products.food2_desc;
  document.getElementById("food3").innerHTML = data.products.food3;
  document.getElementById("food3_desc").innerHTML = data.products.food3_desc;
  document.getElementById("food4").innerHTML = data.products.food4;
  document.getElementById("food4_desc").innerHTML = data.products.food4_desc;

  var elementos = document.getElementsByClassName("cta_text");
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].innerHTML = data.products.cta_text;
  }

  //Footer
  document.getElementById("menu_text").innerHTML = data.footer.menu_text;
  document.getElementById("footer_home_button").innerHTML =
    data.footer.footer_home_button;
  document.getElementById("footer_contact_button").innerHTML =
    data.footer.footer_contact_button;
  document.getElementById("legal_text").innerHTML = data.footer.legal_text;
  document.getElementById("policy_text").innerHTML = data.footer.policy_text;
  document.getElementById("cookies_text").innerHTML = data.footer.cookies_text;
  document.getElementById("advice_text").innerHTML = data.footer.advice_text;
  document.getElementById("follow_text").innerHTML = data.footer.follow_text;
  document.getElementById("copyright_text").innerHTML = data.footer.copyright_text;

  //About
  var textoEnHtml = data.about.ab_desc.replace(/\n/g, "<br />");
  document.getElementById("ab_desc").innerHTML = textoEnHtml;
}
