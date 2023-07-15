import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<Button title="Press me" onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});