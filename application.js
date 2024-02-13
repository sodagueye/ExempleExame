// let Stockage = JSON.parse(localStorage.getItem('list')) || [];
let id=document.getElementById("id");
let titre=document.getElementById("titre");
let description=document.getElementById("description");
let date=document.getElementById("date");
let table=document.querySelector("table")
// let tbody=document.querySelector("tbody");
// let ajout=document.getElementById("ajouter");
document.addEventListener('DOMContentLoaded', function () {
   afficherDonnees();
  });
function ajouter(){
    // recuperation des id 

// ajout.addEventListener('click', () =>{
    let Stockage = JSON.parse(localStorage.getItem('list')) || [];
    if(id.value==""|| titre.value ==""||description.value==""||date.value=="")
    {
        alert("Remplir les champ")
        return;// Arrête l'exécution de la fonction si les champs sont vides
    }

    let objet = {
        id: id.value,
        titre: titre.value,
        description: description.value,
        date: date.value,
      };
  
      Stockage.push(objet);
      afficherDonnees();
      localStorage.setItem('list', JSON.stringify(Stockage));
    }
    let tbody=document.querySelector("tbody");
    function afficherDonnees() {
       let Stockage = JSON.parse(localStorage.getItem('list')) || [];

    // let creer=document.createElement("tr")
    // creer.innerHTML='<td>' +id.value+ '</td>'+
    // '<td>' +titre.value+ '</td>'+
    // '<td>' +description.value+ '</td>'+
    // '<td>' +date.value+ '</td>';

    // tbody.appendChild(creer)

    let html = Stockage.map(function (element ,index ) {
        return `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.titre}</td>
                    <td>${element.description}</td>
                    <td>${element.date}</td>
                    <td>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button onclick="update(${index})"  class="btn">
                    <i class="fa-solid fa-pen-nib"></i>
                    </button>
                    <button onclick="supprimer(${index})"  "class="btn">
                        <i class="fa-solid fa-box-archive"></i>
                    </button>
                </td>
                </tr>`
                    

                  
                  }).join('');

                  tbody.innerHTML = html

                  id.value="";
               titre.value="";
               description.value="";
                date.value="";
                // afficherDonnees()

//     id.value="";
//     titre.value="";
//     description.value="";
//     date.value="";

  ajouter()

 }
//  fonction supprimer 
 function supprimer(index) {
    let Stockage = JSON.parse(localStorage.getItem('list')) || [];
    Stockage.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(Stockage));
    afficherDonnees();
  }
// function mofification

function update(index) {
    document.getElementById('modifier').style.display = 'block';
    document.getElementById('ajouter').style.display = 'none';
  
    let Stockage = JSON.parse(localStorage.getItem('list')) || [];
  
    id.value = Stockage[index].id;
    titre.value = Stockage[index].titre;
    description.value = Stockage[index].description;
    date.value = Stockage[index].date;
   
  
    document.getElementById('modifier').onclick = function () {
      Stockage[index].id= id.value;
      Stockage[index].titre= titre.value;
      Stockage[index].description= description.value;
      Stockage[index].date = date.value;
     
  
      localStorage.setItem('list', JSON.stringify(Stockage));
    afficherDonnees();
  
      document.getElementById('modifier').style.display = 'none';
      document.getElementById('ajouter').style.display = 'block';

    };
    
  
   id.value = '';
    titre.value = '';
    description.value = '';
    date.value = '';
   
  }

  