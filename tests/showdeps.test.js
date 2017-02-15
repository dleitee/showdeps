import { transform } from 'babel-core'
import showdeps from '../src/'

describe('showdeps', () => {
  it('using import default', () => {
    const source = `import test from './test.js'`
    const expected = [{
      "file": "./test.js",
      "specifiers": [{
        "name": "test",
        "type": "ImportDefaultSpecifier",
      }],
    }]
    expect(showdeps(source)).toMatchObject(expected);
  })

  it('using import { a }', () => {
    const source = `import { test } from './test.js'`
    const expected = [{
      "file": "./test.js",
      "specifiers": [{
        "name": "test",
        "type": "ImportSpecifier",
      }],
    }]
    expect(showdeps(source)).toMatchObject(expected);
  })

  it('using import { a as b }', () => {
    const source = `import { test as t } from './test.js'`
    const expected = [{
      "file": "./test.js",
      "specifiers": [{
        "name": "t",
        "type": "ImportSpecifier",
      }],
    }]
    expect(showdeps(source)).toMatchObject(expected);
  })

  it('using import default, { a as b }', () => {
    const source = `import b, { test as t } from './test.js'`
    const expected = [{
      "file": "./test.js",
      "specifiers": [{
        "name": "b",
        "type": "ImportDefaultSpecifier",
      }, {
        "name": "t",
        "type": "ImportSpecifier",
      }],
    }]
    expect(showdeps(source)).toMatchObject(expected);
  })

  it('using import * as default', () => {
    const source = `import * as test from './test.js'`
    const expected = [{
      "file": "./test.js",
      "specifiers": [{
        "name": "test",
        "type": "ImportNamespaceSpecifier",
      }],
    }]
    expect(showdeps(source)).toMatchObject(expected);
  })

  it('without imports', () => {
    const source = `console.log('test')`
    const expected = []
    expect(showdeps(source)).toMatchObject(expected);
  })
})
