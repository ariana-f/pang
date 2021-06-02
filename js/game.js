import { Level001 } from "./level001";
import { LoadScene } from "./loadscene";

const config = {
    width: 2048,
    height: 2048,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#ffff',
    scene: [LoadScene, Level001],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 800
            },
            debug: false
        }
    },
    pixelArt: true
}

new Phaser.Game(config);