export default function convertUnits(pokemon, measure) {
  var convWeight = Math.round(pokemon.weight * 0.1 * 100) / 100;
  var convHeight = Math.round(pokemon.height * 0.1 * 100) / 100;
  if (measure === pokemon.height) {
    return convHeight;
  } else if (measure === pokemon.weight) {
    return convWeight;
  }
}
