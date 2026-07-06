export function selectMonsterSkin(spawnGuid, encounterId, monsterFamily, skins, recentSkins) {
  const seed = `${spawnGuid}:${encounterId}:${monsterFamily}`;
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i++) hash = (hash ^ seed.charCodeAt(i)) * 16777619;
  const total = skins.reduce((a, s) => a + s.random_weight, 0);
  let roll = Math.abs(hash) % total;
  for (const skin of skins) {
    if (recentSkins?.has(skin.skin_id)) continue;
    roll -= skin.random_weight;
    if (roll <= 0) return skin;
  }
  return skins[Math.abs(hash) % skins.length];
}
