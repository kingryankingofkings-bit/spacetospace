# VFX, Audio, and UI Integration Spec

## VFX

Static VFX GLBs should become timed VFX prefabs.

Required runtime parameters:
- lifetime_ms
- start_scale
- end_scale
- fade_in_ms
- fade_out_ms
- material_preset
- attach_mode: world | character_socket | projectile | area
- optional damage_window_ms
- optional audio_cue_id

## Combat telegraphs

Telegraphs must be readable before damage occurs.

Required fields:
- telegraph_duration_ms
- danger_shape: circle | cone | line | rectangle | sphere
- danger_radius_or_size
- damage_start_ms
- colorblind_variant
- accessibility_scale_multiplier

## Audio

Audio cues should be routed by group:
- combat
- boss
- monster
- pickup
- quest
- ui
- footsteps
- ambient

Add:
- volume normalization
- pitch randomization
- cooldown
- spatialization for world sounds
- non-spatial for UI sounds

## UI/worldspace markers

Worldspace UI markers need:
- billboard facing camera
- distance scaling
- occlusion fade
- accessibility size multiplier
- colorblind-safe alternative colors
- input prompt binding
