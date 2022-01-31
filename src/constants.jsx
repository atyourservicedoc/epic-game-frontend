const CONTRACT_ADDRESS = '0xC6EF7b8eDBC2C8aba3c062Dd8fceA8cbd218DDE9';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
}

export { CONTRACT_ADDRESS, transformCharacterData};