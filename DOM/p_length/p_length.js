
tabParagraphe = document.querySelectorAll("p")
for (let i = 0; i < tabParagraphe.length; i++) {
 tabParagraphe[i].prepend("Taille: "+tabParagraphe[i].innerText.length+": ");
}