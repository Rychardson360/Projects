function pegarDados(){
// document.querySelector(".esconder").style.display = "block";
let row = document.querySelector('hr'); 
    row.classList.add('show'); 

let result = document.querySelector('.hide'); 
    result.classList.remove('hide'); 
    result.classList.add('show');

  let camText = document.getElementById("texto").value; 
  document.getElementById("camText").innerHTML = camText;

  let camFone = document.getElementById("fone").value;
  document.getElementById("camFone").innerHTML = camFone;

  let camMail = document.getElementById("e-mail").value;
  document.getElementById("camMail").innerHTML = camMail;

  let camSenha = document.getElementById("senha").value;
  document.getElementById("camSenha").innerHTML = camSenha;


	// if(document.getElementById("info2").checked){
	// 	alert("Seu curso é informática"); 
	// }else if(document.getElementById("adm2").checked){
	// 	alert("Seu curso é administração");
	// }else if(document.getElementById("enf2").checked){
	// 	alert("Seu curso é enfermagem");
	// }

 //  let priFaixa = document.getElementById("PriFaixa").value;
 //  alert(priFaixa); 

}