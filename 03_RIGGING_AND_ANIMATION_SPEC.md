# Rigging and Animation Spec for Antigravity 2.0

## Asset classes

### Humanoid characters
Applies to sector characters, humanoid bosses, allied commanders, liches, archivists, hackers, mentors, and biped monsters.

Required rig:
- root
- pelvis
- spine_01
- spine_02
- neck
- head
- clavicle_l/r
- upperarm_l/r
- forearm_l/r
- hand_l/r
- thigh_l/r
- calf_l/r
- foot_l/r
- toe_l/r
- optional cape/robe/cloth bones

Minimum animation clips:
- idle
- walk
- run
- strafe_left
- strafe_right
- jump_start
- fall_loop
- land
- light_attack
- heavy_attack
- special_attack
- hit_react_front
- hit_react_back
- stagger
- knockdown
- get_up
- death
- interact
- talk_gesture

### Quadruped monsters and mounts
Required rig:
- root
- spine chain
- neck
- head
- jaw
- tail chain if present
- front_upper_l/r
- front_lower_l/r
- front_paw_l/r
- rear_upper_l/r
- rear_lower_l/r
- rear_paw_l/r

Minimum animation clips:
- idle
- walk
- run
- turn_left
- turn_right
- leap
- bite
- claw
- special_attack
- hit_react
- stagger
- death

### Static props
Do not rig unless the prop needs moving parts. Use pivot/empty nodes for:
- doors
- gates
- switches
- traps
- elevators
- vehicles
- chests
- pressure plates

## Animation quality requirements

- All clips must loop cleanly where intended.
- Root motion should be disabled unless the gameplay controller explicitly requests it.
- Attack clips must include event markers:
  - windup_start
  - active_start
  - active_end
  - recover_start
  - recover_end
- Boss phase clips must include:
  - phase_enter
  - vulnerability_start
  - vulnerability_end
  - phase_exit
