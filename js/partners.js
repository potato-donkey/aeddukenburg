const partnersList = document.querySelector("ul#partners");

fetch("./data/partners.json").then((res) => {
  // partners.json is a 2d array of [[name, url], [name, url], ...]
  res.json().then((data) => {
    data.forEach((partner) => {
      // partner is an array of [name, url]
      const li = document.createElement("li");
      li.innerHTML = `
            <a href="${partner[1]}" class="has-text-white is-underlined" target="_blank">
            ${partner[0]}</a>
        `;
      partnersList.appendChild(li);
    });
  });
});
