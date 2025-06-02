const DIA = document.getElementById('dia');
    const MES = document.getElementById('mes');
    const SIGNO = document.getElementById('signo');
    const IMGSIGNO = document.getElementById('imgsigno');

    function calcular() {
      let diaNac = parseInt(DIA.value); //parseInt es la parte entera de un número
      let mesNac = parseInt(MES.value);
      let signoZodiacal = '';
      let imagenSigno = '';

      if (mesNac == 1) {
        if (diaNac <= 19) {
          signoZodiacal = 'Capricornio';
        } else {
          signoZodiacal = 'Acuario'
        }
        // Operador ternario o condicional

      signoZodiacal = (diaNac <= 19) ? 'Capricornio' : 'Acuario'; // equivale 50-54
      // variable   =    condición   ?    verdad     :   falso;
      
    } else if (mesNac == 2) {      
      signoZodiacal = (diaNac <= 18) ? 'Acuario': 'Piscis'; 
    } else if (mesNac == 3) {
      signoZodiacal = (diaNac <= 20) ? 'Piscis' : 'Aries'; 
    } else if (mesNac == 4) {
      signoZodiacal = (diaNac <= 19) ? 'Aries'  : 'Tauro'; 
    } else if (mesNac == 5) {
      signoZodiacal = (diaNac <=21) ? 'Tauro'  : 'Geminis'; 
    } else if (mesNac ==6) {
      signoZodiacal = (diaNac <=20) ? 'Geminis'  : 'Cancer'; 
    } else if (mesNac ==7) {
      signoZodiacal = (diaNac <=22) ? 'Cancer'  : 'Leo'; 
    } else if (mesNac ==8) {
      signoZodiacal = (diaNac <=23) ? 'Leo'  : 'Virgo'; 
    } else if (mesNac ==9) {
      signoZodiacal = (diaNac <=22) ? 'Virgo'  : 'Libra'; 
    } else if (mesNac ==10) {
      signoZodiacal = (diaNac <=22) ? 'Libra'  : 'Escorpio'; 
    } else if (mesNac ==11) {
      signoZodiacal = (diaNac <=21) ? 'Escorpio'  : 'Sagitario'; 
    } else if (mesNac ==12) {
      signoZodiacal = (diaNac <=21) ? 'Sagitario'  : 'Sagitario'; 
    }
    console.log('Signo Zodiacal', signoZodiacal);

    SIGNO.innerHTML = `Tu signo del zodíaco es <b> ${signoZodiacal} </b>`;
    imagenSigno = './img/img' + signoZodiacal + '.jpg';
    console.log (imagenSigno);
    IMGSIGNO.src = imagenSigno;

  } //fin calcular()