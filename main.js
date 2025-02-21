function comparar() {
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    
    if (isNaN(n1) || isNaN(n2)) {
    alert("Preencha ambos os campos!");
    return;
    }

    if (n1 > n2) alert(n1 + " é maior");
    else if (n2 > n1) alert(n2 + " é maior");
    else alert("São iguais");
}