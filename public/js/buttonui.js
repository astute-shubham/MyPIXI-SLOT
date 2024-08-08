import * as PIXI from 'pixi.js'

let betContainer;
let winContainer;
let balanceContainer;
let Bet_Text;
let currInd = 2;

const betArr = [0.2,0.5,1,2,5,10];

function createButtonUI(app, btnMainContainer) {

    
    let FrameTex = PIXI.Assets.get("./public/assets/GameUI/desktop/Frame.png");
    let Frame = new PIXI.Sprite(FrameTex);
    Frame.position.set(95, 466);
    Frame.scale.set(1.7, 0.6);
    btnMainContainer.addChild(Frame);

    const msgBar_Text = new PIXI.Text('GOOD LUCKS', { fontSize: 30, fill: '#FFFFFF', fontWeight: 700 });

    msgBar_Text.position.set(310, 474);
    btnMainContainer.addChild(msgBar_Text);

    
    betContainer = new PIXI.Container();
    betContainer.name = 'betContainer';
    betContainer.y = app.view.height - 110;
    betContainer.x = 485;
    betContainer.scale.set(0.4)

    let smallFrameTex = PIXI.Assets.get("./public/assets/GameUI/desktop/Frame.png");
    let smallFrame = new PIXI.Sprite(smallFrameTex);
    smallFrame.y = -3
    smallFrame.scale.y = 1.1;
    let arrowDownIdleTex = PIXI.Assets.get("./public/assets/GameUI/desktop/Arrow_L_Idle.png");
    let arrowUpIdleTex = PIXI.Assets.get("./public/assets/GameUI/desktop/Arrow_R_Idle.png");
    let Bet_TextTex = PIXI.Assets.get("./public/assets/GameUI/desktop/Bet_Text.png");
    let arrowDownIdle = new PIXI.Sprite(arrowDownIdleTex);
    let arrowUpIdle = new PIXI.Sprite(arrowUpIdleTex);
    Bet_Text = new PIXI.Sprite(Bet_TextTex);
    const bet_value = new PIXI.Text('1.00', { fontSize: 30, fill: '#FFFFFF', fontWeight: 700 });

    arrowDownIdle.y = -11;
    arrowDownIdle.x = -13;
    arrowDownIdle.scale.set(1.1)

    arrowUpIdle.y = -11;
    arrowUpIdle.x = 296;
    arrowUpIdle.scale.set(1.1)

    Bet_Text.x = 111.5;
    Bet_Text.y = 12;


    bet_value.x = 169;
    bet_value.y = 43;

    btnMainContainer.addChild(betContainer);
    betContainer.addChild(smallFrame);
    betContainer.addChild(arrowDownIdle);
    betContainer.addChild(arrowUpIdle);
    betContainer.addChild(Bet_Text);
    betContainer.addChild(bet_value);


    
    winContainer = new PIXI.Container();
    winContainer.name = 'winContainer';
    winContainer.y = app.view.height - 110;
    winContainer.x = 317;
    winContainer.scale.set(0.4)
    let smallFrame2Tex = PIXI.Assets.get("./public/assets/GameUI/desktop/Frame.png");
    let Win_TextTex = PIXI.Assets.get("./public/assets/GameUI/desktop/Win_Text.png");

    let smallFrame2 = new PIXI.Sprite(smallFrame2Tex);
    smallFrame2.y = -3
    smallFrame2.scale.y = 1.1;
    let Win_Text = new PIXI.Sprite(Win_TextTex);
    const win_value = new PIXI.Text('0.00', { fontSize: 30, fill: '#FFFFFF', fontWeight: 700 });

    Win_Text.x = 100.5;
    Win_Text.y = 12;

    win_value.x = 160;
    win_value.y = 43;
    btnMainContainer.addChild(winContainer);
    winContainer.addChild(smallFrame2);
    winContainer.addChild(Win_Text);
    winContainer.addChild(win_value);


    
    balanceContainer = new PIXI.Container();
    balanceContainer.name = 'balanceContainer';
    balanceContainer.y = app.view.height - 110;
    balanceContainer.x = 144;
    balanceContainer.scale.set(0.4)

    let smallFrame3Tex = PIXI.Assets.get("./public/assets/GameUI/desktop/Frame.png");
    let Balance_TextTex = PIXI.Assets.get("./public/assets/GameUI/desktop/Balance_Text.png");

    let smallFrame3 = new PIXI.Sprite(smallFrame3Tex);
    smallFrame3.y = -3
    smallFrame3.scale.y = 1.1;
    let Balance_Text = new PIXI.Sprite(Balance_TextTex);
    const balance_value = new PIXI.Text('10000.00', { fontSize: 30, fill: '#FFFFFF', fontWeight: 700 });
    Balance_Text.x = 100.5;
    Balance_Text.y = 12;

    balance_value.x = 130;
    balance_value.y = 43;
    btnMainContainer.addChild(balanceContainer);
    balanceContainer.addChild(smallFrame3);
    balanceContainer.addChild(Balance_Text);
    balanceContainer.addChild(balance_value);
    arrowDownIdle.interactive = true;
    arrowDownIdle.buttonMode = true;
    arrowUpIdle.interactive = true;
    arrowUpIdle.buttonMode = true;
    arrowUpIdle.on('pointerdown', betIncrease);
    arrowDownIdle.on('pointerdown', betDecrease);
    function betIncrease() {  
        if(currInd< betArr.length-1){
            currInd += 1
            let newText =betArr[currInd].toFixed(2);
            bet_value.text = newText;
        }
        else{
            console.log("xx: btn disbale");
        }   
    }
    function betDecrease() {  
        if(currInd> 0){
            currInd -= 1
            // let newText =betArr[currInd].toPrecision(2);
            let newText =betArr[currInd].toFixed(2);
            bet_value.text = newText;
        }
        else{
            console.log("xx: btn disbale");
        }   
    }
}
export { createButtonUI }