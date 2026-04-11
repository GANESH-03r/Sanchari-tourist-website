async function loadComponents(id,filepath) {
    const component = document.getElementById(id);
    const response = await fetch(filepath);
    if(!response.ok) {
    }
    else {
        component.innerHTML = await response.text();
    }
}

loadComponents("header","../components/header.html");
loadComponents("footer","../components/footer.html");