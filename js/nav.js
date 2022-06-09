fetch('../nav.html')
  .then(res => res.text())
  .then(text => {
    let old_elem = document.querySelector("script#replace_with_navbar");
    let new_elem = document.createElement("div");
    new_elem.innerHTML = text;
    old_elem.parentNode.replaceChild(new_elem, old_elem);
  })