async function loadComponents(id,filepath) {
    const component = document.getElementById(id);
    const response = await fetch(filepath);
    const html = await response.text();
    component.innerHTML = html;

}

loadComponents("header","../components/header.html");
loadComponents("footer","../components/footer.html");