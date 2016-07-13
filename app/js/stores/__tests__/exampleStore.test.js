jest.unmock('@stores/exampleStore');

const example = require('@stores/exampleStore');

describe('exampleStore', () => {
  it('does something', () => {
    expect(example()).toBe('store');
  })
})
