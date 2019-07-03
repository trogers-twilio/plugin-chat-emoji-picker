import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import EmojiPicker from './components/EmojiPicker';

const PLUGIN_NAME = 'ChatEmojiPickerPlugin';

export default class ChatEmojiPickerPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.MessageInput.Content.add(<EmojiPicker key="emoji-picker" />, { sortOrder: 1 });
  }
}
