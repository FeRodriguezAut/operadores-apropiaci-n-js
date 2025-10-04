// Iniciamos un arreglo para guardar cada paso de la explicación.
let pasos = [];

// 1. Expresión Original
let expresionOriginal = "(20+10)/5 + 3*2 - 4*(20+10)/5 + 3*2 - 4*(20+10)/5 + 3*2 - 4";
pasos.push(`📝 Expresión Original: ${expresionOriginal}`);

// 2. Resolver Paréntesis
// La única operación dentro de paréntesis es (20 + 10)
let resultadoParentesis = 20 + 10;
pasos.push(`🧠 Paso 1 (Paréntesis): Resolvemos (20 + 10), que es igual a ${resultadoParentesis}.`);
let expresionPaso2 = "30/5 + 3*2 - 4*30/5 + 3*2 - 4*30/5 + 3*2 - 4";
pasos.push(`➡️  La expresión ahora es: ${expresionPaso2}`);

// 3. Resolver Multiplicaciones y Divisiones (de izquierda a derecha)
pasos.push("✖️ Paso 2 (Multiplicación y División): Resolvemos de izquierda a derecha.");
let a = 30 / 5; // 6
pasos.push(`   - Primero, 30 / 5 = ${a}`);
let b = 3 * 2;  // 6
pasos.push(`   - Luego, 3 * 2 = ${b}`);
let c = 4 * 30; // 120
pasos.push(`   - Sigue, 4 * 30 = ${c}`);
let d = c / 5;  // 120 / 5 = 24
pasos.push(`   - Después, 120 / 5 = ${d}`);
let e = 3 * 2;  // 6
pasos.push(`   - Otra vez, 3 * 2 = ${e}`);
let f = 4 * 30; // 120
pasos.push(`   - De nuevo, 4 * 30 = ${f}`);
let g = f / 5;  // 120 / 5 = 24
pasos.push(`   - Y 120 / 5 = ${g}`);
let h = 3 * 2;  // 6
pasos.push(`   - Finalmente, 3 * 2 = ${h}`);

let expresionPaso3 = `${a} + ${b} - ${d} + ${e} - ${g} + ${h} - 4`;
pasos.push(`➡️  Después de reemplazar, la expresión es: ${expresionPaso3}`);

// 4. Resolver Sumas y Restas (de izquierda a derecha)
pasos.push("➕ Paso 3 (Suma y Resta): Resolvemos de izquierda a derecha.");
let res1 = a + b;       // 6 + 6 = 12
pasos.push(`   - Primero, 6 + 6 = ${res1}`);
let res2 = res1 - d;    // 12 - 24 = -12
pasos.push(`   - Luego, 12 - 24 = ${res2}`);
let res3 = res2 + e;    // -12 + 6 = -6
pasos.push(`   - Sigue, -12 + 6 = ${res3}`);
let res4 = res3 - g;    // -6 - 24 = -30
pasos.push(`   - Después, -6 - 24 = ${res4}`);
let res5 = res4 + h;    // -30 + 6 = -24
pasos.push(`   - Casi al final, -30 + 6 = ${res5}`);
let resultadoFinal = res5 - 4; // -24 - 4 = -28
pasos.push(`   - Y por último, -24 - 4 = ${resultadoFinal}`);

// 5. Resultado Final
pasos.push(`🏁 Resultado Final: ${resultadoFinal}`);

// Imprimir todos los pasos en la consola
console.log(pasos.join('\n'));