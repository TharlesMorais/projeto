function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute("alt", "Foto de Mayk Brito instrutor de html do rocketseat sorrindo, usando óculos escuros e jaqueta preta, sem barba e fundo azul e roxo")
  }
  else{
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Mayk Brito instrutor de html do rocketseat sorrindo, usando óculos e camisa preta, barba e fundo laranja")
  }
}