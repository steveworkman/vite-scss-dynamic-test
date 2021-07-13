import './style.css'

import('./scss/sass.scss');

const dyn = "dynamic"

import('./scss/' + dyn + '.scss');

document.querySelector('#app').innerHTML = `
<p class="static dynamic">This should be Green if the styles are delivered dynamically, or blue if can do dynamic imports with variables</p>
`
