let form = document.querySelector("form");

let but = document.querySelector(".sign-in-button");
if (form && but) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  but.addEventListener("click", () => {
    let login = "Kirill";
    let addres = "Kirill@mail.ru";
    let password = 1234567890;

    let log = document.getElementById("login");
    let addr = document.getElementById("addres");
    let pass = document.getElementById("password");

    if (
      login === log.value &&
      addres === addr.value &&
      password == pass.value
    ) {
      window.location = "index.html";
      console.log("verify");
    }
    console.log({
      login: log.value,
      address: addr.value,
      password: pass.value,
    });
  });
}
