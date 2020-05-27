let switchMode = document.querySelector('#switchMode')

if (window.matchMedia('(prefers-color-scheme:dark)').metches) {
    switchMode.setAttribute('checked',true)
}

switchMode.addEventListener('change' , function (event) {
    if(this.checked) {
      document.body.classList.remove('is-light')
      document.body.classList.add('is-dark')
    } else {
      document.body.classList.remove('is-dark')
      document.body.classList.add('is-light')
    }
})
