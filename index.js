  
  // Variable para almacenar la promesa bíblica
  const promises = [
    { text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.", verse: "Jeremías 29:11" },
    { text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", verse: "Mateo 11:28" },
    { text: "El Señor es mi pastor; nada me faltará.", verse: "Salmos 23:1" },
    { text: "De cierto, de cierto os digo: El que oye mi palabra, y cree al que me envió, tiene vida eterna; y no vendrá a condenación, mas ha pasado de muerte a vida.", verse: "Juan 5:24" },
    { text: "Bienaventurados los mansos, porque ellos heredarán la tierra.", verse: "Mateo 5:5" },
    { text: "Dios es nuestro amparo y fortaleza; nuestro pronto auxilio en las tribulaciones.", verse: "Salmos 46:1" },
    { text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", verse: "Salmos 91:1" },
    { text: "Jehová es mi luz y mi salvación; ¿a quién temeré?", verse: "Salmos 27:1" },
    { text: "El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará.", verse: "1 Corintios 13:8" },
    { text: "Porque yo estoy persuadido de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro.", verse: "Romanos 8:38-39" },
    { text: "No os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal.", verse: "Mateo 6:34" },
    { text: "Honra a Jehová con tus bienes, y con las primicias de todos tus frutos.", verse: "Proverbios 3:9" },
    { text: "Mas los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", verse: "Isaías 40:31" },
    { text: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado, por lo que se gozó mi corazón, y con mi cántico le alabaré.", verse: "Salmos 28:7" },
    { text: "Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha, y te dice: No temas, yo te ayudo.", verse: "Isaías 41:13" },
    { text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", verse: "Isaías 40:31" },
    { text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", verse: "Salmos 91:1" },
    { text: "Jehová es mi pastor; nada me faltará.", verse: "Salmos 23:1" },
    { text: "Bienaventurado el hombre que no anduvo en consejo de malos, ni estuvo en camino de pecadores, ni en silla de escarnecedores se ha sentado.", verse: "Salmos 1:1" },
    { text: "Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí.", verse: "Juan 5:39" },
    { text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.", verse: "Romanos 12:2" },
    // 10 promesas adicionales
    { text: "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.", verse: "Salmos 23:4" },
    { text: "El Señor peleará por vosotros, y vosotros estaréis tranquilos.", verse: "Éxodo 14:14" },
    { text: "El camino de los justos es como la luz de la aurora, que va en aumento hasta que el día es perfecto.", verse: "Proverbios 4:18" },
    { text: "El Señor está cerca de los quebrantados de corazón; y salva a los contritos de espíritu.", verse: "Salmos 34:18" },
    { text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.", verse: "Mateo 6:33" },
    { text: "Jehová es mi roca, mi fortaleza y mi libertador; mi Dios, mi fortaleza, en él confiaré.", verse: "Salmos 18:2" },
    { text: "El que tiene el Hijo tiene la vida; el que no tiene al Hijo de Dios no tiene la vida.", verse: "1 Juan 5:12" },
    { text: "Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha, y te dice: No temas, yo te ayudo.", verse: "Isaías 41:13" },
    { text: "Y el Dios de paz estará con vosotros.", verse: "Filipenses 4:9" },
    { text: "Jehová es bueno; su misericordia es eterna, y su fidelidad de generación en generación.", verse: "Salmos 100:5" }
  ];
  
 

  // Obtén referencias a los elementos del DOM
  const roulette = document.getElementById('roulette');
  const spinBtn = document.getElementById('spin-btn');
  const promiseText = document.getElementById('promise-text');

  // Variable para almacenar la promesa bíblica actual
  let promesaActual = {};

  // Función para girar la ruleta
  function girarRuleta() {
    // Limpiar la promesa anterior
    promiseText.textContent = '';

    // Establecer una transformación aleatoria para simular el giro
    const rotation = Math.floor(Math.random() * 360) + 720; // Gira entre 2 y 3 vueltas completas
    roulette.style.transform = `rotate(${rotation}deg)`;
  }

  // Función para detener la ruleta y mostrar una promesa bíblica
  function detenerRuleta() {
    // Limpiar la transformación para detener la ruleta
    roulette.style.transform = 'rotate(0deg)';
    
    // Elegir una promesa bíblica al azar
    promesaActual = promises[Math.floor(Math.random() * promises.length)];
    
    // Mostrar la promesa en el elemento HTML
    setTimeout(() => {
      promiseText.textContent = `${promesaActual.text} (${promesaActual.verse})`;
    }, 1000); // Retraso de 1 segundo para mejorar la experiencia visual
  }

  // Agregar eventos a los botones
  spinBtn.addEventListener('click', girarRuleta);
  roulette.addEventListener('transitionend', detenerRuleta);