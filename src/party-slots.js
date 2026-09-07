// profile_user.reset_Party_List creates six indexed entries. Empty positions
// remain null through storage, capture, trading and battle removal.
export const PARTY_SIZE = 6;
export const normalizePartySlots = party => Array.from({length: PARTY_SIZE}, (_, i) => party?.[i] ?? null);
export function partyProfiles(save) {
  return normalizePartySlots(save.party).map(uid => uid === null ? null : save.pokemon.find(p => p.uid === uid) ?? null);
}
export function addPartyMember(save, uid) {
  save.party = normalizePartySlots(save.party);
  const existing = save.party.indexOf(uid);
  if (existing >= 0) return existing;
  const index = save.party.indexOf(null);
  if (index >= 0) save.party[index] = uid;
  return index;
}
export function removePartyMember(save, uid) {
  save.party = normalizePartySlots(save.party);
  const index = save.party.indexOf(uid);
  if (index >= 0) save.party[index] = null;
  return index;
}
