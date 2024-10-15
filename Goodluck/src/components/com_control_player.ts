/**
 * @module components/com_control_player
 */

import {Entity} from "../../common/world.js";
import {Game} from "../game.js";
import {Has} from "../world.js";

export function control_player() {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.ControlPlayer;
    };
}

export function update_paddle_movement(game: Game, entity: Entity) {
    let move = game.World.Move2D[entity];
    move.Direction[0] = 0;

    if (game.InputState["ArrowUp"]) {
        move.Direction[1] = 1;
    } else if (game.InputState["ArrowDown"]) {
        move.Direction[1] = -1;
    }
}
