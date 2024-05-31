/* eslint-disable no-empty */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable lines-between-class-members */

import StratagemsModel from "../stratagems/stratagems-model";

export interface UserKeys {
  up: string;
  down: string;
  left: string;
  right: string;
}

type UserKey = keyof UserKeys;

export default class UserPreferences {
  static up = "up";
  static down = "down";
  static left = "left";
  static right = "right";

  public static getUserAssignedKeys(): UserKeys {
    return {
      up: this.up,
      down: this.down,
      left: this.left,
      right: this.right,
    };
  }

  public static getUserAssignedKey(keyCode: UserKey): string | boolean {
    return this[keyCode];
  }

  public static setUserAssignedKeys(userKeys: UserKeys) {
    this.up = userKeys.up;
    this.down = userKeys.down;
    this.left = userKeys.left;
    this.right = userKeys.right;
  }

  public static mapStratagemKeycodeToUserPreferences(
    stratagem: StratagemsModel
  ): string[] {
    const { keysCode: stratagemKeycodes } = stratagem;
    const userKeys: string[] = [];

    stratagemKeycodes.forEach((key: UserKey) => {
      const userKey: string = this.getUserAssignedKey(key) as string;
      userKeys.push(userKey);
    });

    return userKeys;
  }
}
