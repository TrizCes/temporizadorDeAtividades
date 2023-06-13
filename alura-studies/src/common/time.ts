export function tempoParaSegundos(tempo: string){
  const [horas = '0', min = '0', seg = '0'] = tempo.split(':');

  const horasEmSegundos = Number(horas) * 3600;
  const minEmSegundos = Number(min) * 60;
  return horasEmSegundos + minEmSegundos + Number(seg);
}