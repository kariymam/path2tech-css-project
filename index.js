const { createApp, ref } = Vue;

createApp({
 setup() {
  const json = "https://my-json-server.typicode.com/kariymam/mockjson/emails";
  return {
   json
  };
 },
 data() {
  return {
   mock_emails: []
  };
 },
 methods: {
  async getData() {
   const res = await fetch(this.json);
   const finalRes = await res.json();
   this.mock_emails = finalRes;
  },
  openMobileMenu(event) {
   const show = (el) => {
    if (document.body.offsetWidth <= 768) {
     el.classList.toggle("show");
    }
   };

   show(document.getElementById("nav_primary"));
   show(document.getElementById("close_btn"));
  },
  changeLayout(event) {
   const btnText = (currentTheme, el, preset, toggle) => {
    let icon = document.getElementById(el).classList;
    if (icon.contains(toggle)) {
     icon.replace(toggle, preset);
    } else {
     icon.replace(preset, toggle);
    }
    let text = event.target.childNodes[1]; // text content
    text.textContent = `${currentTheme}`;
   };

   const setTheme = (currentTheme, preset, option) => {
    let targetTheme = currentTheme === preset ? option : preset;
    if (currentTheme !== targetTheme) {
     btnText(currentTheme, "change_layout", "narrow-icon", "wide-icon");
     return document
      .getElementById("list")
      .setAttribute("list-theme", targetTheme);
    }
   };

   setTheme(
    document.getElementById("list").getAttribute("list-theme"),
    "compact",
    "loose"
   );
  }
 },
 mounted() {
  this.getData();
 }
}).mount("#app");
