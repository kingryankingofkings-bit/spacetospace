import { Sound, Scene, Vector3 } from "@babylonjs/core";

let currentBGM: Sound | null = null;

/**
 * Plays background music based on the given zone.
 * @param scene The current BabylonJS Scene
 * @param zone A string identifier for the zone (e.g. 'town', 'combat')
 */
export const playBGM = (scene: Scene, zone: string) => {
    if (currentBGM) {
        currentBGM.stop();
        currentBGM.dispose();
    }

    // Default BGM URL
    let url = "https://assets.babylonjs.com/sound/msc_bgm.mp3";
    
    currentBGM = new Sound("bgm_" + zone, url, scene, null, {
        loop: true,
        autoplay: true,
        volume: 0.4
    });
};

/**
 * Plays a spatial 3D hit sound at the given position.
 * @param scene The current BabylonJS Scene
 * @param position The position vector in 3D space
 */
export const playHitSound = (scene: Scene, position: Vector3) => {
    // Example URL for a hit/impact sound
    const hitUrl = "https://playground.babylonjs.com/sounds/gunshot.wav";
    
    const hitSound = new Sound("hitSound", hitUrl, scene, () => {
        hitSound.play();
    }, {
        spatialSound: true,
        maxDistance: 100
    });
    
    hitSound.setPosition(position);
    
    hitSound.onEndedObservable.add(() => {
        hitSound.dispose();
    });
};
