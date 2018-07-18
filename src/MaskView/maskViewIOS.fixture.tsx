import * as React from 'react';
import { ScrollView } from 'react-native';
import MaskView from './index.ios';
import Card from '../Card';

export default {
  component: MaskView,
  props: {
    children: (
      <ScrollView>
          <Card shadow width={300} height={200}>
            MaskView
          </Card>
          <Card shadow width={300} height={200}>
            MaskView
          </Card>
          <Card shadow width={300} height={200}>
            MaskView
          </Card>
      </ScrollView>
    )
  }
};

