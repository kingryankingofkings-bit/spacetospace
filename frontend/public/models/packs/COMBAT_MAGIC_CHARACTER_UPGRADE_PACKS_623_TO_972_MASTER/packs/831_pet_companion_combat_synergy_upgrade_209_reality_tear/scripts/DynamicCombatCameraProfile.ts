export function pushCombatCameraProfile(camera, profile, reason) {
  camera.setCombatActive(true);
  camera.blendTo({
    fov: profile.fov,
    distance: profile.distance,
    height: profile.height,
    lag: profile.lag,
    shake: profile.shake,
    reason
  });
}
