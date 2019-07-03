import * as React from 'react';
import { Picker } from 'emoji-mart';
import { Actions } from '@twilio/flex-ui';
import 'emoji-mart/css/emoji-mart.css';

class EmojiPicker extends React.Component {
  addEmoji = (e) => {
    const emoji = e.native
    console.log('Adding emoji:', emoji);
    const { channel, channelSid, useLocalState, useSeparateInputStore } = this.props;
    const inputText = channel && channel.inputText;
    const payload = {
      body: `${inputText}${emoji}`,
      channel,
      channelSid,
      useLocalState,
      useSeparateInputStore
    }
    Actions.invokeAction('SetInputText', payload)
  }

  render() {
    return (
      <Picker set="emojione" onSelect={this.addEmoji} />
    )
  }
}

export default EmojiPicker;
