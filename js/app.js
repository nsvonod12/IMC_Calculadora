const iconos = [
    {
        id: 1,
        nombre: "Por debajo",
        rango: "< 18.5",
        class: "amarillo",
        src: "img/pordebajo.png",
        url: "https://www.flaticon.es/iconos-gratis/bajo-peso",
        a_icon: "Icono creado por Freepik - Flaticon",
        
        rec: [
            "Consulta a un profesional de la salud, ellos pueden evaluar tu situación de manera individualizada y brindarte orientación adecuada.",
            "Si tienes dificultades para consumir suficientes calorías en tres comidas al día, considera hacer comidas más pequeñas y frecuentes.",
            "Evita el exceso de ejercicio, esto puede contribuir a la pérdida de peso no deseada."
        ]
    },

    {
        id: 2,
        nombre: "Saludable",
        rango: "18.5 - 24.9",
        class: "verde",
        src: "img/saludable.png",
        url: "https://www.flaticon.es/iconos-gratis/parte-superior-del-cuerpo",
        a_icon: "Icono creado por Anggre Tionanda - Flaticon",

        rec: [
            "Asegúrate de dormir lo suficiente. El sueño de calidad es esencial para la salud en general.",
            "Presta atención a las porciones. Aunque estés en un rango de peso saludable, el control de las porciones es clave para mantenerlo.",
            "Sigue controlando tus hábitos alimenticios y de actividad física."
        ]
    }, 

    {
        id: 3,
        nombre: "Sobrepeso",
        rango: "25 - 29.9",
        class: "naranja",
        src: "img/sobrepeso.png",
        url: "https://www.flaticon.es/iconos-gratis/obesidad",
        a_icon: " Icono creado por Anggre Tionanda - Flaticon",

        rec: [
            "Consulta a un profesional de la salud, ellos pueden evaluar tu situación de manera individualizada y brindarte orientación adecuada.",
            "Lleva un registro de lo que comes y cuántas calorías consumes al día para tener una idea de tu ingesta calórica",
            "Limita los alimentos ultraprocesados, los refrescos y los alimentos con alto contenido de azúcar.",
            "Apunta a al menos 150 minutos de actividad aeróbica moderada o 75 minutos de actividad intensa a la semana."
        ]
        
    }, 

    {
        id: 4,
        nombre: "Obesidad I",
        rango: "30 - 34.9",
        class: "rojo",
        src: "img/obesidad.png",
        url: "https://www.flaticon.es/iconos-gratis/obesidad",
        a_icon: "Icono creado por nawicon - Flaticon",

        rec: [
            "Consulta a un profesional de la salud, ellos pueden evaluar tu situación de manera individualizada y brindarte orientación adecuada.",
            "Consume una dieta rica en frutas, verduras, proteínas magras, granos enteros y grasas saludables como las que se encuentran en el aceite de oliva, los aguacates y las nueces.",
            "Lleva un registro de lo que comes y cuántas calorías consumes al día para tener una idea de tu ingesta calórica",
            "Limita los alimentos ultraprocesados, los refrescos y los alimentos con alto contenido de azúcar.",
            "Apunta a al menos 150 minutos de actividad aeróbica moderada o 75 minutos de actividad intensa a la semana.",
            "Considera la posibilidad de trabajar con un equipo multidisciplinario (médicos, dietistas, entrenadores personales y terapeutas)."
        ]
    }, 

    {
        id: 5,
        nombre: "Obesidad II",
        rango: "35- 39.9",
        class: "lila",
        src: "img/obesidad 2.png",
        url: "https://www.flaticon.es/iconos-gratis/obesidad",
        a_icon: "Icono creado por Flowicon - Flaticon",

        rec: [
            "Consulta a un profesional de la salud, ellos pueden evaluar tu situación de manera individualizada y brindarte orientación adecuada.",
            "Consume una dieta rica en frutas, verduras, proteínas magras, granos enteros y grasas saludables como las que se encuentran en el aceite de oliva, los aguacates y las nueces.",
            "Lleva un registro de lo que comes y cuántas calorías consumes al día para tener una idea de tu ingesta calórica.",
            "Limita los alimentos ultraprocesados, los refrescos y los alimentos con alto contenido de azúcar.",
            "Apunta a al menos 150 minutos de actividad aeróbica moderada o 75 minutos de actividad intensa a la semana.",
            "Realiza exámenes de salud de rutina y sigue las recomendaciones de tu médico.",
            "Considera la posibilidad de trabajar con un equipo multidisciplinario (médicos, dietistas, entrenadores personales y terapeutas)."
        ]
        
    }, 

    {
        id: 6,
        nombre: "Obesidad III",
        rango: "> 40",
        class: "morado",
        src: "img/obesidad 3.png",
        url: "https://www.flaticon.es/iconos-gratis/obesidad",
        a_icon: "Icono creado por surang - Flaticon",

        rec: [
            "Busca atención médica inmediata. Debes hablar con un médico especializado en obesidad y recibir atención médica inmediata para evaluar tus riesgos y opciones de tratamiento.",
            "Trabaja con un equipo de profesionales de la salud que pueden incluir médicos, dietistas, psicólogos, fisioterapeutas y cirujanos bariátricos, según las necesidades.",
            "En algunos casos, la cirugía bariátrica puede ser una opción efectiva para la pérdida de peso. Esto debe ser evaluado y discutido con un cirujano bariátrico.",
            "Consulta con un fisioterapeuta o entrenador personal para desarrollar un programa de ejercicios adaptado a tu nivel de condición física y restricciones médicas.",
            "Mantén un seguimiento médico regular para evaluar tu progreso y ajustar el tratamiento según sea necesario.",
            "Aprende sobre la obesidad y sus riesgos para la salud. Cuanto más entiendas tu condición, mejor podrás tomar decisiones informadas sobre tu tratamiento.",
            "econoce que la pérdida de peso y la mejora de la salud pueden llevar tiempo y esfuerzo. Establece metas pequeñas y alcanzables a corto plazo para mantenerte motivado."
        ]
    }, 

];

//Botones
const calcular =  document.querySelector("#calcular");
const cal_otro = document.querySelector("#cal_otro");

//Divs
const entradas = document.querySelector("#inputs");
const respuestas = document.querySelector("#respuestas");
const recomendaciones = document.querySelector("#recomendacion");
const formulario = document.querySelector("#form");

//Variables
let BMI;

function listeners(){
    formulario.addEventListener('submit', calcularBMI)
    cal_otro.addEventListener('click', Limpiar);
}
listeners();


//Funciones
function calcularBMI(e){
    e.preventDefault();

    let peso, altura;
    peso = parseFloat(document.querySelector("#peso").value);
    altura = parseFloat(document.querySelector("#altura").value) / 100;
    BMI = peso / (altura * altura);

    generarHTML(BMI);
}

function generarHTML(BMI){

    if(isNaN(BMI)){
        
        let html_label = document.createElement("label");
        
        html_label.classList.add("llenar-campos");
        html_label.setAttribute("id", "aviso");
        html_label.textContent = `Por favor, llene los campos`;
        entradas.append(html_label);
        setTimeout(borrarAviso, 5000);

    } else {
        let html_div = document.createElement("div");
        
        html_div.classList.add("mostrar-respuesta");
        html_div.setAttribute("id", "resultado");

        //Asignamos un valor para buscar en nuestro arrglo de iconos la respuesta 
        let inf_res = buscarID(BMI);
        
        html_div.innerHTML = `
            <h2 id="respuesta">Su indice de masa corporal es de : ${BMI.toFixed(2)} </h2>
            <img class="img-respuesta" src="${inf_res[0].src}" alt="${inf_res[0].nombre}">
            <a href="${inf_res[0].url}" title="obesidad iconos">${inf_res[0].a_icon}</a>
            <label class="${inf_res[0].class} box-respuesta"><p>${inf_res[0].rango}</p> ${inf_res[0].nombre} </label>
        `;

        respuestas.appendChild(html_div);
        generarRecomendaciones(inf_res);
        inf_res.pop();

        //Desaparecer y aparecer botones
        if( cal_otro.classList.contains("ocultar-btn") ){
            cal_otro.classList.remove("ocultar-btn");
            calcular.classList.add("ocultar-btn");
        }
    }

}

function borrarAviso(){
    let padre = document.getElementById("inputs");
    let hijo = document.getElementById("aviso");
    
    if(hijo.classList.contains("llenar-campos"))
        padre.removeChild(hijo);
}

function borrarHTML(){
    let padre = document.getElementById("respuestas");
    let hijo = document.getElementById("resultado");
    
    if(hijo.classList.contains("mostrar-respuesta"))
        padre.removeChild(hijo);
}


function Limpiar(e){
    e.preventDefault();
    borrarHTML();
    borrarRecomendaciones(BMI);

    formulario.reset()
    // document.getElementById("peso").value = "";
    // document.getElementById("altura").value = "";
    
    if( calcular.classList.contains("ocultar-btn") ){
        calcular.classList.remove("ocultar-btn");
        cal_otro.classList.add("ocultar-btn");
    }
}

function generarRecomendaciones(inf_res){
    
    for(let i = 0; i < inf_res[0].rec.length; i++ ){
        let html_rec = document.createElement("tr");
        html_rec.classList.add("rec-row");
        html_rec.setAttribute("id", "reco");

        html_rec.innerHTML = `
            <th scope="row">${i+1}</th>
            <td>${inf_res[0].rec[i]}</td>
        `;
        recomendaciones.appendChild(html_rec);
    }
}

function borrarRecomendaciones(){
    let inf_res = buscarID(BMI);

    for(let i = 0; i < inf_res[0].rec.length; i++ ){
        let padre = document.getElementById("recomendacion");
        let hijo = document.getElementById("reco");

        if(hijo.classList.contains("rec-row"))
        padre.removeChild(hijo);
    }
    
}

function buscarID(BMI){
    let buscar_aux;
    let inf_res;

    if(BMI < 18.5) buscar_aux = 1;
    else if(BMI >= 18.5 && BMI < 25) buscar_aux = 2;
    else if(BMI >= 25 && BMI < 30) buscar_aux = 3;
    else if(BMI >= 30 && BMI < 35) buscar_aux = 4;
    else if(BMI >= 35 && BMI < 40) buscar_aux = 5;
    else buscar_aux = 6;

    return inf_res = iconos.filter(elemento => elemento.id === buscar_aux);
}


