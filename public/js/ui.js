import { createReels } from './reels.js';
import * as PIXI from 'pixi.js'
import {setupWelcomeScreen} from './welcomeScreen.js'
import {createBtnPanel} from './buttonPanel.js'
import { Spine } from '@esotericsoftware/spine-pixi';


function createGameUI(app) {
    
    let bgContainer = new PIXI.Container();
    bgContainer.name = "backgroundContainer";
    // const background = new PIXI.Sprite(PIXI.Loader.shared.resources['background'].texture);

    app.stage.addChild(bgContainer);
    // bgContainer.addChild(bg);


    const baseGame = new PIXI.Container();
    baseGame.name = "baseGame";
    baseGame.x = 247;
    app.stage.addChild(baseGame);
    
    // const spineData = PIXI.Loader.shared.resources['backgroundSpine'].spineData;

    // // Create a Spine animation
    // const animation = new PIXI.spine.Spine(spineData);
    //  animation.state.setAnimation(0, 'animation', true);


    const reelFrame = new PIXI.Container();
    reelFrame.name = "reelFrameContainer"
    reelFrame.x = 100;
    reelFrame.y = 100;
    baseGame.addChild(reelFrame);
    reelFrame.scale.set(0.8);

    const reelFrameCont = new PIXI.Container();
    let  reelFrameTex = PIXI.Assets.get('./public/assets/reelFrame.png');
    const reelFrameBg = new PIXI.Sprite(reelFrameTex);
    reelFrameCont.position.set(-182, -116)
    reelFrameBg.name = 'reelFrameBg';
    reelFrame.addChild(reelFrameCont);
    reelFrameCont.addChild(reelFrameBg);

    reelFrameCont.scale.set(0.7);

    let  logoTex = PIXI.Assets.get('./public/assets/logo.png');
    const logo =  new PIXI.Sprite(logoTex);
    logo.name = 'logo'
    logo.anchor.set(0.5, 0.5);
    logo.scale.set(0.5)
    logo.position.set(404, -58)
    reelFrame.addChild(logo);



    createReels(app, reelFrame);
    createBtnPanel(app,baseGame);
    setupWelcomeScreen(app);
}






export { createGameUI };
