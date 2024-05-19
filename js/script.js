console.log("Je suis la console !");

function quizConfirm() {
    if (confirm("Êtes-vous sûr de vouloir continuer ?")) {
        alert("Le quiz va commencer dans 5 secondes !");
        //ajouter un décompte de 5 secondes
        var timer = 5;
        //Créer un élément p pour afficher le message
        var confirmation = document.createElement("p");
        confirmation.textContent = timer + " secondes";
        //style du message
        confirmation.style.color = "red";
        confirmation.style.fontSize = "1.5em";
        confirmation.style.fontWeight = "bold";
        confirmation.style.textAlign = "center";
        //ajouter le message à la pagie à la suite du bouton d'id start
        var start = document.getElementById("informations");
        start.appendChild(confirmation);
        // bloquer les inputs et cacher le bouton pour commencer
        document.getElementById("nom").disabled = true;
        document.getElementById("prenom").disabled = true;
        document.getElementById("datenaissance").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("statut").disabled = true;
        document.querySelector("input[type=\"button\"]").style.display = "none";
        //en utilisant la fonction setInterval qui s'exécute toutes les secondes
        var interval = setInterval(function () {
            //décrémenter le décompte
            timer--;
            //On l’affiche également dans la console
            console.log(timer);
            //afficher le décompte dans l’élément p créé
            confirmation.textContent = timer + " secondes";
            //si le décompte est terminé
            //afficher le message "C'est parti ! Bonne chance !"
            //afficher le formulaire
            //afficher le bouton de soumission
            if (timer === 0) {
                clearInterval(interval);
                confirmation.textContent = "C'est parti ! Bonne chance !";
                document.getElementsByClassName("quiz")[0].style.display = "block";
                document.getElementsByTagName("button")[0].style.display = "block";
            }
        }, 1000);
    } else {
        alert("Vous allez être redirigé vers la page d'accueil !");
        window.location.href = "accueil.html";
    }
}

function quizAlert() {
    if (document.getElementById("nom").value === "" || document.getElementById("prenom").value === "" || document.getElementById("datenaissance").value === "" || document.getElementById("email").value === "" || document.getElementById("statut").value === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }
    alert("Vous êtes sur le point de commencer le quiz !");
    quizConfirm();
}

function submitQuiz() {
    var score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    if (q1 === "q1r1") {
        score += 4;
    }
    const q2 = document.querySelectorAll('input[name="q2"]:checked');
    for (let i = 0; i < q2.length; i++) {
        if (q2[i].value === "q2r1" || q2[i].value === "q2r2") {
            score += 3;
        }
        else {
            score -= 3;
        }
    }
    const q3 = document.querySelector('input[name="q3"]').value.toLowerCase();
    if (q3.includes("réduire") || q3.includes("alléger") || q3.includes("faciliter") || q3.includes("optimiser") || q3.includes("exploiter")) {
        score += 10;
    }
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = `${document.querySelectorAll("tbody > tr").length + 1}`;
    tr.appendChild(td1);
    const td2 = document.createElement("td");
    td2.textContent = `${score}`;
    tr.appendChild(td2);
    document.querySelector("tbody").appendChild(tr);
    document.querySelector("input[name=\"q1\"]:checked").checked = false;
    document.querySelectorAll("input[name=\"q2\"]:checked").forEach(e => e.checked = false);
    document.querySelector("input[name=\"q3\"]").value = "";
    if (document.querySelectorAll("tbody > tr").length === 3) {
        document.querySelector("button").disabled = true;
    }
}
