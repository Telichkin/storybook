import React from 'react';
import { Text } from 'react-native';

import { storiesOf, addOptions } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs';

import knobsWrapper from './Knobs';
import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('Knobs', module)
  .addDecorator(withKnobs)
  .add('with knobs', knobsWrapper);

const globalOption = 'globalOption';
const chapterOption = 'chapterOption';
const storyOption = 'storyOption';

addOptions({ globalOption });

storiesOf('Core|Options', module)
  .addOptions({ chapterOption })
  .add('passed to story', ({ options }) => <Text>Options are {JSON.stringify(options)}</Text>, {
    storyOption,
  });
