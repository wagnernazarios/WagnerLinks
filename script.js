function toggleMode(){
  const html = document.documentElement;

  //trocar entre o modo dark e light
  html.classList.toggle("lighty")


  // troca imagem
   const img = document.querySelector("#profile img")

   if (html.classList.contains("lighty")) {
    img.setAttribute('src', 'assets/Avatar-light.png');

    img.setAttribute('alt', 'foto de profile light mode')
   } else {
img.setAttribute("src", "assets/Avatar.png")
  }
};