document.addEventListener("DOMContentLoaded",()=>{

/* ================= LOGIN ================= */

const loginBtn=document.getElementById("loginBtn")

if(loginBtn){

loginBtn.onclick=()=>{

const usuarios=[
{user:"BG.MN",pass:"2803"},
{user:"DG.ER",pass:"1023634210"},
{user:"DJN.ELZ",pass:"1695"}

]

let u=document.getElementById("usuario").value
let p=document.getElementById("password").value

let valido=usuarios.find(x=>x.user===u && x.pass===p)

if(valido){

localStorage.setItem("policeLogin","true")
window.location.href="index.html"

}else{

document.getElementById("error").innerText="Credenciales incorrectas"

}

}

}

/* ================= PROTECCION ================= */

if(window.location.pathname.includes("index.html")){

if(localStorage.getItem("policeLogin")!=="true"){

window.location.href="login.html"

}

}

/* ================= SIDEBAR ================= */

const botones=document.querySelectorAll("[data-section]")
const secciones=document.querySelectorAll(".section")

function cambiarSeccion(id,titulo){

secciones.forEach(sec=>sec.classList.remove("active"))

let seccion=document.getElementById(id)
if(seccion) seccion.classList.add("active")

let t=document.getElementById("titulo")
if(t) t.innerText=titulo

}

botones.forEach(btn=>{
btn.onclick=()=>cambiarSeccion(btn.dataset.section,btn.innerText)
})

/* ================= LOGO ================= */

const logo=document.getElementById("logoInicio")

if(logo){
logo.onclick=()=>cambiarSeccion("inicio","Inicio")
}

/* ================= RANGOS ================= */

const jerarquia=[

"Director General",
"Mayor General",
"Brigadier General",
"Supervisor PONAL",

"Coronel",
"Teniente Coronel",
"Mayor",
"Capitán",
"Teniente",
"Subteniente",

"Sargento Primero",
"Sargento Segundo",
"Cabo Primero",
"Cabo Segundo",

"Comisario",
"Subcomisario",
"Intendente Jefe",
"Intendente",
"Subintendente",
"Patrullero",
"Auxiliar"

]

function colorRango(r){

if(["Director General","Mayor General","Brigadier General"].includes(r)) return "#FFD700"
if(["Supervisor PONAL","Coronel","Teniente Coronel","Mayor"].includes(r)) return "#ef4444"
if(["Capitán","Teniente","Subteniente"].includes(r)) return "#3b82f6"
if(["Sargento Primero","Sargento Segundo","Cabo Primero","Cabo Segundo"].includes(r)) return "#22c55e"

return "#94a3b8"

}

function insignia(r){

const estrellas={

"Director General":"★★★★★★",
"Mayor General":"★★★★★",
"Brigadier General":"★★★★",
"Supervisor PONAL":"★★★",

"Coronel":"★★★",
"Teniente Coronel":"★★★",
"Mayor":"★★★",
"Capitán":"★★★",
"Teniente":"★★★",
"Subteniente":"★★★",

"Sargento Primero":"★★",
"Sargento Segundo":"★★",
"Cabo Primero":"★★",
"Cabo Segundo":"★★",

"Comisario":"★",
"Subcomisario":"★",
"Intendente Jefe":"★",
"Intendente":"★",
"Subintendente":"★",
"Patrullero":"★",
"Auxiliar":"★"

}

return estrellas[r]||""

}

/* ================= OFICIALES ================= */

const oficiales=[

{
nombre:"Emmanuel Rivera",
rango:"Director General",
placa:"0226",
division:"ASUNTOS INTERNOS",
edad:32,
ingreso:"2018",
foto:"imagenes/oficial1.png",

ascensos:[
"2019 - Subteniente",
"2021 - Teniente",
"2024 - Capitán"
],

disciplina:[
"Ninguna"
]

},

{
nombre:"Jayden Char",
rango:"Mayor General",
placa:"0007",
division:"ASUNTOS INTERNOS",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial2.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Mateo Novikov",
rango:"Brigadier General",
placa:"POR DEFINIR",
division:"ASUNTOS INTERNOS",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Marcos Regalado",
rango:"Supervisor PONAL",
placa:"POR DEFINIR",
division:"ASUNTOS INTERNOS",
edad:41,
ingreso:"2010",
foto:"imagenes/oficial3.png",

ascensos:[
"2015 - Capitán",
"2018 - Mayor",
"2024 - Teniente Coronel"
],

disciplina:[
"Ninguna"
]

},

{
nombre:"Paisa Morty",
rango:"Supervisor PONAL",
placa:"POR DEFINIR",
division:"ASUNTOS INTERNOS",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Isidoro Navarro",
rango:"Capitán",
placa:"POR DEFINIR",
division:"GOES - L",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Meno Bruzeira",
rango:"Cabo Primero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Alejandro Ruiz",
rango:"Intendente",
placa:"POR DEFINIR",
division:"DIJIN - L",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Daniel Leon",
rango:"Patrullero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Erick Lopez",
rango:"Patrullero",
placa:"1695",
division:"DIJIN",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Felipe Espinosa",
rango:"Patrullero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Juliana Galeano",
rango:"Patrullero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Junior Perez",
rango:"Patrullero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Lil Wave",
rango:"Patrullero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Lumi Rivera",
rango:"Patrullero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Raul Lopez",
rango:"Patrullero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Jhojanes Moreno",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Juan Miguel",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Alejandro Casillas",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"GAULA",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Carolina Pressure",
rango:"Patrullero",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Garzon Diaz",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Hector Gaviria",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Martin Riggs",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Matias Ortiz",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"N/A",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Paulo Gomez",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"DIJIN",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

},

{
nombre:"Zeus Farah",
rango:"Auxiliar",
placa:"POR DEFINIR",
division:"GAULA",
edad:29,
ingreso:"2019",
foto:"imagenes/oficial5.png",

ascensos:[
"2022 - Cabo Primero",
"2024 - Sargento Primero"
],

disciplina:[
"2023 - Amonestación verbal"
]

}

]

/* ================= ORDENAR ================= */

function ordenar(lista){
return [...lista].sort((a,b)=>{
return jerarquia.indexOf(a.rango)-jerarquia.indexOf(b.rango)
})
}

/* ================= TABLA OFICIALES ================= */

function cargarOficiales(lista){

const tabla=document.getElementById("tablaOficiales")
if(!tabla) return

tabla.innerHTML=`
<tr>
<th>Nombre</th>
<th>Rango</th>
<th>Placa</th>
<th>División</th>
</tr>
`

let ordenados=[...lista].sort((a,b)=>{
return jerarquia.indexOf(a.rango)-jerarquia.indexOf(b.rango)
})

ordenados.forEach(o=>{

tabla.innerHTML+=`

<tr>

<td>
<span class="nombreOficial" data-placa="${o.placa}">
${o.nombre}
</span>
</td>

<td style="color:${colorRango(o.rango)};font-weight:bold">
${insignia(o.rango)} ${o.rango}
</td>

<td>${o.placa}</td>
<td>${o.division}</td>

</tr>

`

})

/* CLICK EN NOMBRE */

document.querySelectorAll(".nombreOficial").forEach(nombre=>{

nombre.addEventListener("click",()=>{

const placa=nombre.dataset.placa

const oficial=oficiales.find(o=>o.placa===placa)

if(oficial){
abrirPerfil(oficial)
}

})

})

}

cargarOficiales(oficiales)


/* ================= BUSCADOR ================= */

const buscador=document.getElementById("buscarOficial")

if(buscador){

buscador.onkeyup=()=>{

let texto=buscador.value.toLowerCase()

let filtrados=oficiales.filter(o=>

o.nombre.toLowerCase().includes(texto) ||
o.rango.toLowerCase().includes(texto) ||
o.placa.includes(texto) ||
o.division.toLowerCase().includes(texto)

)

cargarOficiales(filtrados)

}

}

/* ================= FILTRO ================= */

const filtro=document.getElementById("filtroRango")

if(filtro){

filtro.onchange=()=>{

let r=filtro.value

if(r===""){

cargarOficiales(oficiales)

}else{

let f=oficiales.filter(o=>o.rango===r)

cargarOficiales(f)

}

}

}

/* ================= PATRULLAS ================= */

const patrullas = [
{codigo:"Police LS",vehiculo:"Unidad Patrullaje", img:"img/police-ls.png"},
{codigo:"Police SF",vehiculo:"Unidad Patrullaje", img:"img/police-sf.png"},
{codigo:"Motorizada",vehiculo:"Unidad Patrullaje", img:"img/moto.png"},
{codigo:"Cadilac",vehiculo:"Unidad Patrullaje GOES", img:"img/cadilac.png"},
{codigo:"Swat",vehiculo:"Unidad Operativos Especiales", img:"img/swat blindado.png"},
{codigo:"Blindado 4p",vehiculo:"Unidad Operativos Especiales", img:"img/blindado4p.png"},
{codigo:"Deportivo",vehiculo:"Unidad de Respuesta Rapida", img:"img/ur1.png"},
{codigo:"Deportivo",vehiculo:"Unidad de Respuesta Rapida 2", img:"img/ur2.png"},
{codigo:"Aerea",vehiculo:"Unidad Aerea", img:"img/aerea.png"},
{codigo:"GRUA",vehiculo:"Unidad de transportacion de vehiculos", img:"img/grua.png"},

]

const tablaPatrullas = document.getElementById("tablaPatrullas")

if(tablaPatrullas){

patrullas.forEach(p=>{

tablaPatrullas.innerHTML += `
<tr>
<td>${p.codigo}</td>
<td>${p.vehiculo}</td>
<td><img src="${p.img}" width="120"></td>
</tr>
`

})

}

/* ================= CODIGOS RADIALES ================= */

const radiales=[
["5.1","Recepción mala"],
["5.2","Recepción buena"],
["5.3","Suspenda comunicado"],
["5.4","Entendido"],
["5.5","Pase comunicado"],
["5.6","Ocupado, espere por favor"],
["5.7","Fuera de servicio"],
["5.8","Disponible para el servicio"],
["5.9","Repita comunicado"],
["5.10","508 Para casos urgentes"],
["5.11","Farmacia disponible"],
["5.12","Informe novedades"],
["5.13","Alerta, observe el orden"],
["5.14","Hora exacta"],
["5.15","Nombre y grado"],
["5.16","Indicativo"],
["5.17","Cumpla misión"],
["5.18","Preséntese en"],
["5.19","Informe policial"],
["5.20","Lugar de ubicación"],
["5.21","Realice llamada telefónica"],
["5.22","Anule el último comunicado"],
["5.23","Llegué al sitio indicado"],
["5.24","Misión cumplida"],
["5.25","Permiso para comunicarme"],
["5.26","Permiso autorizado"],
["5.27","Reunión urgente"],
["5.28","Si hay otra unidad hacer 538"],
["5.29","Cumpla la orden"],
["5.30","No reglamentado"],
["5.31","Oficial de policía enfermo"],
["5.32","Apoyo urgente oficial de policía"],
["5.33","Emergencia"],
["5.34","Alarma general"],
["5.35","Información confidencial"],
["5.36","Controles salida ciudad"],
["5.37","Apoyo policía judicial"],
["5.38","Reacción en la zona 513"],
["5.39","Oficial de policía 901-953"],
["5.40","Oficial de policía 532"],
["5.41","Inicio turno"],
["5.42","Finalizo turno"],
["5.43","Deje jefe de turno"],
["5.44","Recoja jefe de turno"],
["5.45","Deje tripulante"],
["5.46","Recoja tripulante"],
["5.47","Que misión cumple"],
["5.48","Rectifico"],
["5.49","Como me escucha"],
["5.50","Vehículo policial accidentado"],
["5.51","Grúa"],
["5.52","Ambulancia"],
["5.53","Patrulla policial de vigilancia"],
["5.54","Policía de transito"],
["5.55","Carro - taller"],
["5.56","Policía judicial"],
["5.57","Bomberos"],
["5.58","Comisario o inspector"],
["5.59","Escolta"],
["5.60","Afirmativo"],
["5.61","Negativo"],
["5.62","Cambie de ubicación"],
["5.63","Comunicado equivocado"],
["5.64","Interferencia"],
["5.65","Refuerzo urgente"],
["5.66","Un momento por favor"],
["5.67","Gracias"],
["5.68","Misión confidencial"],
["5.69","Grupo de rescate en acción"],
["5.70","Asuma el mando"],
["5.71","Goes"],
["5.72","Copes"],
["5.73","Grupo antidisturbios"],
["5.74","Grupo antisecuestro"],
["5.75","Grupo antinarcóticos"],
["5.76","Grupo de sangre"],
["5.77","Grupo de automotores"],
["5.78","Grupo de investigaciones generales"],
["5.79","Escuadrón motorizado"],
["5.80","Escuadrón de carabineros"],
["5.81","Chaleco antibalas"],
["5.82","Armamento largo alcance"],
["5.83","Armamento de repetición"],
["5.84","Equipo antimotines"],
["5.85","Equipo antigás"],
["5.86","Equipo de invierno"],
["5.87","Equipo de iluminación"],
["5.88","Escalera y cuerda"],
["5.89","Patrulla del ejército"],
["5.90","Carro bomba"],

]

const tablaRadiales=document.getElementById("tablaRadiales")

if(tablaRadiales){

radiales.forEach(r=>{

tablaRadiales.innerHTML+=`
<tr>
<td>${r[0]}</td>
<td>${r[1]}</td>
</tr>
`

})

}

/* ================= CODIGOS PENALES ================= */

const penales=[

["𝟏.𝟏" , "· Giro indebido" , "𝗠𝘂𝗹𝘁𝗮 𝗱𝗲 $𝟭𝟱𝟬.𝟬𝟬𝟬"],
["1.2" , "· Circular en Sentido Contrario" , "Multa de $150.000"],
["1.3" , "· Estacionar en zona no habilitada" , "Multa de $450.000"],
["𝟏.𝟒" , "· Ignorar señalizaciones de tránsito" , "𝗠𝘂𝗹𝘁𝗮 𝗱𝗲 $𝟰𝟱𝟬.𝟬𝟬𝟬"],
["𝟏.𝟓" , "· Saltarse un semáforo" , "𝗠𝘂𝗹𝘁𝗮 𝗱𝗲 $𝟭.𝟬𝟬𝟬.𝟬𝟬𝟬"],
["𝟏.𝟔" , "· Obstruir paso a un vehículo de la Policía" , "𝗠𝘂𝗹𝘁𝗮 𝗱𝗲 $𝟮.𝟱𝟬𝟬.𝟬𝟬𝟬"],
["𝟏.𝟕" , "· Omitir control de tráfico" , "Multa de $𝟮.𝟬𝟬𝟬.𝟬𝟬𝟬"],
["𝟏.𝟖" , "· Exceso de velocidad" , "Multa de $𝟭.𝟱𝟬𝟬.𝟬𝟬𝟬"], 
["𝟏.𝟗" , "· Conducción temeraria" , "Multa de $𝟮.𝟱𝟬𝟬.𝟬𝟬𝟬"], 
["𝟏.𝟏𝟎" , "· Conducción bajo efectos de sustancias" , "Multa de $𝟭.𝟴𝟬𝟬.𝟬𝟬𝟬"], 
["𝟏.𝟏𝟏" , "· Circular sin medidas de seguridad" , "𝗠𝘂𝗹𝘁𝗮 𝗱𝗲 $𝟱𝟬𝟬.𝟬𝟬𝟬"],
["𝟏.𝟏𝟐" , "· Circular sin licencia de conducción" , "𝗠𝘂𝗹𝘁𝗮 𝗱𝗲 $𝟭.𝟬𝟬𝟬.𝟬𝟬𝟬"],
["𝟏.𝟏𝟑" , "· Vehículo mal estacionado" , "Multa de $𝟮.𝟱𝟬𝟬.𝟬𝟬𝟬"], 
["𝟏.𝟏𝟒" , "· Matrícula tapada o alterada" , "Multa de $𝟭.𝟱𝟬𝟬.𝟬𝟬𝟬"],
["𝟏.𝟏𝟓" ,  "· Vehículo con Nitro" , "Multa de $𝟭.𝟬𝟬𝟬.𝟬𝟬𝟬"], 
["2.0" , "· Complicidad en delito" , "Multa de $5.000.000"],
["2.1" , "· Alteración del orden público" , "Multa de $1.350.000"],
["2.2" , "· Faltas de respeto hacia otro civil" , "Multa de $150.000"],
["2.3" , "· Daño a bienes públicos" , "Multa de $1M a $5M"],
["2.4" , "· Daño a bienes privados" , "Multa de $1.8M a $3.5M"],
["2.5" , "· Violación" , "Multa de $15.000.000"],
["2.6" , "· Violación a menor de edad" , "Multa de $20.000.000"],
["2.7" , "· Suplantación de identidad" , "Multa de $1.500.000"],
["2.8" , "· Circular con rostro oculto" , "Multa de $1.500.000"],
["2.9" , "· Fraude o engaño" , "Multa de $1.000.000"],
["2.10" , "· Acoso sexual"  , "Multa de $1.200.000"],
["2.11" , "· Negación de identificación" , "Multa de $2.500.000"],
["2.12" , "· Maltrato animal" , "Multa de $2.500.000"],
["2.13" , "· Violación de perímetro" , "Multa de $1.800.000"],
["2.14" , "· Exhibicionismo" , "Multa de $950.000"],
["2.15" , "· Desacato a Estado de Alarma" , "Multa de $3.500.000"],
["3.1","· Robo a vehículo","Multa de $5.500.000 + 40 min prisión"],
["3.2","· Robo con intimidación","Multa de $1.600.000 + 35 min prisión"],
["3.3","· Robo con arma de fuego","Multa de $3.100.000 + 50 min prisión"],
["3.4","· Robo menor (tienda 24/7)","Multa de $6.000.000 + 60 min prisión"],
["3.5","· Robo mayor (bancos, empresas)","Multa de $8.250.000 + 60 min prisión"],
["3.6","· Robo a entidades federales","Multa de $4.500.000 + 60 min prisión"],
["3.7","· Allanamiento de morada","Multa de $1.500.000 + 55 min prisión"],
["3.8","· Robo por abuso de confianza","Multa de $3.500.000 + 30 min prisión"],
["4.1","· Arma blanca ilegal","Multa de $1.500.000 + Retiro del arma"],
["4.2","· Arma de fuego ilegal","Multa de $5.000.000 + 25 min (bajo) / $8.000.000 + 45 min (alto)"],
["4.3","· Posesión de estupefacientes","Multa de $2.000.000 por unidad + 30 min por cada 3+"],
["4.4","· Tráfico de drogas (+10u)","Multa de $10.000.000 por unidad + 30 min prisión"],
["4.5","· Tráfico de armas","Multa de $15.000.000 (bajo) / $20.000.000 (alto) + 30/10 min prisión"],
["4.6","· Consumo de estupefacientes","Multa de $3.000.000 + retirada"],
["5.1","· Desacato a la autoridad","Multa de $500.000 + 35 min prisión"],
["5.2","· Insultar a funcionario público","Multa de $750.000 + 30 min prisión"],
["5.3","· Agredir o amenazar funcionario","Multa de $1.700.000 + 35 min prisión"],
["5.4","· Resistirse al arresto","Multa de $550.000 + 35 min prisión"],
["5.5","· Falso testimonio","Multa de $1.500.000 + 50 min prisión"],
["5.6","· Huida de la justicia","Multa de $2.800.000 + 55 min prisión"],
["5.7","· Secuestro a funcionario","Multa de $4.000.000 + 60 min prisión"],
["5.8","· Intento homicidio a funcionario","Multa de $6.000.000 + 60 min prisión / cadena perpetua si reincide"],
["5.9","· Homicidio a funcionario","60 min prisión"],
["5.10","· Magnicidio","Multa de $7.000.000 + 55 min prisión"],
["5.11","· Intento de magnicidio","Multa de $10.500.000 + 55 min prisión"],
["5.12","· Robo de datos secretos","25 min prisión"],
["5.13","· Robo a agentes","Multa de $3.500.000 + 45 min prisión"],
["5.14","· Malversación de fondos","45 min prisión"],
["5.15","· Soborno o intento","Multa de $6.000.000"],
["5.16","· Atentado terrorista","180 min prisión (Requiere STAFF)"],
["5.17","· Intento de atentado terrorista","Multa de $15.000.000 + 60 min prisión (Requiere STAFF)"],
["5.18","· Cohecho propio","Multa de $10.500.000 + 60 min prisión (Requiere STAFF)"],
["6.1","· Negarse a entregar DNI","Multa de $5.000.000"],
["6.2","· Negarse a entregar licencia","Multa de $4.000.000"],
["6.3","· No querer entregar DNI","Multa de $2.500.000"],
["6.4","· No querer entregar licencia","Multa de $3.500.000"],

]

const tablaPenales=document.getElementById("tablaPenales")

if(tablaPenales){

penales.forEach(p=>{

tablaPenales.innerHTML+=`
<tr>
<td>${p[0]}</td>
<td>${p[1]}</td>
<td>${p[2]}</td>
</tr>
`

})

}

/* ================= EYOS ================= */

const eyos=["SIN DIVISION","GAULA","GOES","DIJIN","AEREA","MOTORIZADA"]

const listaEyos=document.getElementById("listaEyos")

if(listaEyos){

eyos.forEach(e=>{
listaEyos.innerHTML+=`<li>${e}</li>`
})

}

/* ================= ESTADISTICAS ================= */

const estadOf=document.getElementById("estadOficiales")
if(estadOf) estadOf.innerText=oficiales.length

const estadPat=document.getElementById("estadPatrullas")
if(estadPat) estadPat.innerText=patrullas.length



/* ================= OFICIAL DE LA SEMANA ================= */
/* ================= OFICIAL DE LA SEMANA ================= */

const oficialSemana = {
nombre: "Mateo Novikov",
rango: "Brigadier General",
division: "Asuntos Internos",
imagen: "img/oficialsemana.png"
}

const contenedor = document.getElementById("oficialSemanaCard")

if(contenedor){

contenedor.innerHTML = `
<div class="card-oficial">

<img src="${oficialSemana.imagen}" class="oficial-img">

<div class="oficial-info">

<h3>${oficialSemana.nombre}</h3>

<p class="rango">${oficialSemana.rango}</p>

<p class="division">${oficialSemana.division}</p>

</div>

</div>
`

}

})
