const app = require('./')

describe('default export', () => {
  it('it should find nothing', () => {
    const input = `html { padding: 0; }`
    const result = app(input)
    expect(result).toEqual([])
  })

  it('should find one', () => {
    const input = `@import 'blah';`
    const result = app(input)
    expect(result).toEqual(['blah'])
  })

  it('should find many', () => {
    const input = `@import 'x';
      @import 'y';
    `
    const result = app(input)
    expect(result).toEqual([
      'x',
      'y',
    ])
  })

  it('should not depdupe', () => {
    const input = `
      @import 'x';
      @import 'y';
      @import 'y';
    `
    const result = app(input)
    expect(result).toEqual([
      'x',
      'y',
      'y',
    ])
  })

  it('should sort them for consistency', () => {
    const input = `
      @import 'z';
      @import 'a';
      @import './a';
    `
    const result = app(input)
    expect(result).toEqual([
      './a',
      'a',
      'z',
    ])
  })
})
