import * as PIXI from 'pixi.js'

// container
let welMainContainer;
let baseGameContainer;

// Set up textures after loading
// let buttonTextureDisable = PIXI.Texture.from('./public/assets/welcome-screen/Continue_Button_Disabled.png');

function setupWelcomeScreen(app) {
    let buttonTextureIdle = PIXI.Assets.get('./public/assets/welcome-screen/Continue_Button_Idle.png')
    let buttonTextureHover = PIXI.Assets.get('./public/assets/welcome-screen/Continue_Button_Hover.png');
    let buttonTexturePressed = PIXI.Assets.get('./public/assets/welcome-screen/Continue_Button_Pressed.png');

    app.stage.children[1].interactiveChildren = false;
    baseGameContainer = app.stage.children[1];
    welMainContainer = new PIXI.Container();
    welMainContainer.name = 'welcomeMainContainer';

    // Create overlay
    const overlay = new PIXI.Graphics();
    overlay.beginFill(0x000000, 0.5); // Black color with 50% opacity
    overlay.drawRect(0, 0, app.screen.width, app.screen.height);
    overlay.endFill();
    overlay.visible = true; // Initially hidden
    overlay.name = 'welcomeContaineroverlay';
    app.stage.addChild(welMainContainer);
    welMainContainer.addChild(overlay);

    // Create logo image
    let welContainer = new PIXI.Container();
    welContainer.name = 'welcomeContainer';
    let welcomeBgTex = PIXI.Assets.get("./public/assets/welcome-screen/logo.png");
    const welcomeBg = new PIXI.Sprite(welcomeBgTex);
    // welContainer.anchor.set(0.5);
    welContainer.scale.set(0.5);
    welContainer.position.set(395, 80)
    // welContainer.position.set(app.screen.width / 4, app.screen.height / 4 + 50)
    welMainContainer.addChild(welContainer);
    welContainer.addChild(welcomeBg);

    // Create button

    const button = new PIXI.Sprite(buttonTextureIdle);
    button.anchor.set(0.5);
    button.position.set(welContainer.width, welContainer.height * 2 + 50);
    button.interactive = true;
    button.buttonMode = true;
    // button.on('pointerdown', () => {
    //     welMainContainer.visible = false;
    // });
    welContainer.addChild(button);
    // Button interactions
    button
    .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    // button.on('pointerdown', (e) => {
    //     onButtonDown(e);
    //     welMainContainer.visible = false;
    // });

}






// Function to handle button hover
function onButtonOver() {
    
    let buttonTextureHover = PIXI.Assets.get('./public/assets/welcome-screen/Continue_Button_Hover.png');

    this.texture = buttonTextureHover;
}

// Function to handle button idle (mouse out)
function onButtonOut() {
    let buttonTextureIdle = PIXI.Assets.get('./public/assets/welcome-screen/Continue_Button_Idle.png')

    this.texture = buttonTextureIdle;
}

// Function to handle button press (mouse down)
function onButtonDown() {
    let buttonTexturePressed = PIXI.Assets.get('./public/assets/welcome-screen/Continue_Button_Pressed.png');
    this.texture = buttonTexturePressed;
    welMainContainer.visible = false;
    baseGameContainer.interactiveChildren = true;

}

// Function to handle button release (mouse up)
function onButtonUp() {
    let buttonTextureIdle = PIXI.Assets.get('./public/assets/welcome-screen/Continue_Button_Idle.png')

    this.texture = buttonTextureIdle; // Could change to idle texture if needed
}


export { setupWelcomeScreen }