import { create as renderer } from 'react-test-renderer';
import * as createContext from 'react-cosmos-test/generic';
import fixture from './index.fixture';

const { mount, getWrapper } = createContext({ renderer, fixture });

beforeEach(mount);

test('matches snapshot', () => {
  expect(getWrapper().toJSON()).toMatchSnapshot();
});
