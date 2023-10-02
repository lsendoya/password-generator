export function random(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirEspeciales) {
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const especiales = '!@#$%^&*()-_+=<>?';
  
    let caracteresPermitidos = '';
    if (incluirMayusculas) caracteresPermitidos += mayusculas;
    if (incluirMinusculas) caracteresPermitidos += minusculas;
    if (incluirNumeros) caracteresPermitidos += numeros;
    if (incluirEspeciales) caracteresPermitidos += especiales;
  
   
    if (caracteresPermitidos.length === 0) {
      console.error('Debes seleccionar al menos un tipo de caracter.');
      return '';
    }
  
    let contrasenaGenerada = '';
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      contrasenaGenerada += caracteresPermitidos.charAt(indiceAleatorio);
    }
  
    return contrasenaGenerada;
  }
  
