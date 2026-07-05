# Audio Cue Implementation Notes

This pack is a placeholder audio handoff pack, not a GLB pack.

## What Antigravity 2.0 should do

1. Import each `.wav` as an engine audio asset.
2. Replace the synthetic tones with designed final sounds later.
3. Create cue/event names using `cue_id`.
4. Route groups to audio mixers:
   - `ui`
   - `pickup`
   - `footsteps`
   - `combat`
   - `monster`
   - `boss`
   - `quest`
   - `ambient`
5. Add volume, pitch variation, cooldown, and 3D spatialization rules.
6. Add looping only to files whose IDs include `_loop_placeholder`.

## Recommended audio prefab fields

```json
{
  "cue_id": "hit_heavy",
  "asset": "audio_wav/hit_heavy.wav",
  "mixer_group": "combat",
  "spatial": true,
  "volume": 1.0,
  "pitch_random_range": [0.95, 1.05],
  "cooldown_ms": 30
}
```
