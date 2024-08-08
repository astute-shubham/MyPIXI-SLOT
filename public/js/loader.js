import * as PIXI from 'pixi.js'
import "pixi-spine";

// Initialize Pixi loader
const loader = PIXI.Loader.shared;

// Load Spine data
loader
    .add('spineCharacter', './public/assets/Animations/background/BaseGame_BG.json')
    .add('spineCharacterAtlas', './public/assets/Animations/background/BaseGame_BG.atlas')
    .add('spineCharacterTexture', './public/assets/Animations/background/BaseGame_BG.png')
    .load(onAssetsLoaded)
    .on('error', (error) => {
        console.error('Error loading assets:', error);
    });

function onAssetsLoaded(loader, resources) {
    console.log('Assets loaded:', resources);
    
    // Create a new PIXI.spine.Spine object
    const spineCharacter = new PIXI.spine.Spine(resources.spineCharacter.spineData);

    // Notify that setup is complete
    if (window.loaderSetupComplete) {
        window.loaderSetupComplete(spineCharacter);
    }
}
