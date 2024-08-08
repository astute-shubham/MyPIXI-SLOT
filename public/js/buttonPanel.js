import * as PIXI from 'pixi.js'
import { onSpinButtonClicked } from './reels.js';
import { createButtonUI } from './buttonui.js';


let spinBtn;
let info_btn;
let btnMainContainer;




function createBtnPanel(app, baseGame) {
    let spin_Idle = PIXI.Assets.get('./public/assets/GameUI/desktop/Spin_Idle.png')
    let spin_Hover = PIXI.Assets.get('./public/assets/GameUI/desktop/Spin_Hover.png');
    let spin_Pressed = PIXI.Assets.get('./public/assets/GameUI/desktop/Spin_Pressed.png');
    let spin_Disable = PIXI.Assets.get('./public/assets/GameUI/desktop/Spin_Disabled.png');
    let info_Idle = PIXI.Assets.get('./public/assets/GameUI/desktop/Info_Idle.png')
    let info_Hover = PIXI.Assets.get('./public/assets/GameUI/desktop/Info_Hover.png');
    let info_Pressed = PIXI.Assets.get('./public/assets/GameUI/desktop/Info_Pressed.png');
    let info_Disable = PIXI.Assets.get('./public/assets/GameUI/desktop/Info_Disabled.png');

    btnMainContainer = new PIXI.Container();
    btnMainContainer.name = 'btnMainContainer';
    createButtonUI(app, btnMainContainer);


    spinBtn = new PIXI.Sprite(spin_Idle);
    spinBtn.name = 'spin_';
    spinBtn.anchor.set(0.5);
    spinBtn.scale.set(0.4);
    spinBtn.x = 689;
    spinBtn.y = 520;
    spinBtn.interactive = true;
    spinBtn.buttonMode = true;
    spinBtn.on('pointerdown', () => {
        onSpinButtonClicked(app)
    });
    baseGame.addChild(btnMainContainer);
    btnMainContainer.addChild(spinBtn);
    spinBtn.on('pointerupoutside', () => {
        onButtonUp(e)
    })
    spinBtn.on('pointerover', (e) => {
        onButtonOver(e)
    })
    spinBtn.on('pointerout', (e) => {

        onButtonOut(e)
    });


    info_btn = new PIXI.Sprite(info_Idle);
    info_btn.name = 'info_';

    info_btn.anchor.set(0.5);
    info_btn.scale.set(0.5);
    info_btn.x = 107.5;
    info_btn.y = 541;
    info_btn.interactive = true;
    info_btn.buttonMode = true;
    baseGame.addChild(btnMainContainer);
    btnMainContainer.addChild(info_btn);
    info_btn.on('pointerupoutside', (e) => {
        onButtonUp(e)
    })
    info_btn.on('pointerover', (e) => {
        onButtonOver(e)
    })
    info_btn.on('pointerout', (e) => {

        onButtonOut(e)
    });
    info_btn.on('pointerdown', (e) => {
        onButtonPress(e)
    });
}


function onButtonOver(evt) {
    let spin_Hover = PIXI.Assets.get('./public/assets/GameUI/desktop/Spin_Hover.png');
    let info_Hover = PIXI.Assets.get('./public/assets/GameUI/desktop/Info_Hover.png');
    let btnName = evt.currentTarget.name;
    let btn = evt.currentTarget;
    if (btnName == 'info_') {
        btn.texture = info_Hover;
    }
    else {
        btn.texture = spin_Hover;
    }
}


function onButtonOut(evt) {
    let spin_Idle = PIXI.Assets.get('./public/assets/GameUI/desktop/Spin_Idle.png')
    let info_Idle = PIXI.Assets.get('./public/assets/GameUI/desktop/Info_Idle.png')
    let btnName = evt.currentTarget.name;
    let btn = evt.currentTarget;
    if (btnName == 'info_') {
        btn.texture = info_Idle;
    }
    else {
        btn.texture = spin_Idle;
    }
}


function onButtonUp(evt) {

    let spin_Pressed = PIXI.Assets.get('./public/assets/GameUI/desktop/Spin_Pressed.png');
    let info_Pressed = PIXI.Assets.get('./public/assets/GameUI/desktop/Info_Pressed.png');
    let btnName = evt.currentTarget.name;
    let btn = evt.currentTarget;
    if (btnName == 'info_') {
        btn.texture = info_Pressed;

    }
    else {
        btn.texture = spin_Pressed;
    }
}

function onButtonPress(evt) {
    let spin_Pressed = PIXI.Assets.get('./public/assets/GameUI/desktop/Spin_Pressed.png');
    let info_Pressed = PIXI.Assets.get('./public/assets/GameUI/desktop/Info_Pressed.png');

    let btnName = evt.currentTarget.name;
    let btn = evt.currentTarget;
    if (btnName == 'info_') {
        btn.texture = info_Pressed;
    }
    else {
        btn.texture = spin_Pressed;
    }
}

export { createBtnPanel }