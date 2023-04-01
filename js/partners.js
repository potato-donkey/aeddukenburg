const partnersList = document.querySelector("ul#partners");

fetch("../data/partners.json").then((res) => {
  res.json().then((data) => {
    data.forEach((partner) => {
      const li = document.createElement("li");
      li.innerHTML = `
            <a href="${partner[1]}" class="has-text-white is-underlined" target="_blank">
            ${partner[0]}</a>
        `;
      partnersList.appendChild(li);
    });
  });
});
