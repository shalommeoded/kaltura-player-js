// @flow
import {loadPlayer} from 'playkit-js'
import KalturaPlayer from './kaltura-player'
import {
  extractPlayerConfig,
  extractProvidersConfig,
  createKalturaPlayerContainer,
  validateTargetId, validateProvidersConfig
} from "./utils/setup-helpers"

function setup(targetId: string, options: Object): KalturaPlayer {
  validateTargetId(targetId);
  validateProvidersConfig(options);
  let playerConfig = extractPlayerConfig(options);
  let providersConfig = extractProvidersConfig(options);
  let containerId = createKalturaPlayerContainer(targetId);
  let player = loadPlayer(containerId, playerConfig);
  let kalturaPlayer = new KalturaPlayer(player, containerId, providersConfig);
  return Object.assign(player, kalturaPlayer);
}

export {setup};