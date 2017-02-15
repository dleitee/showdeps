# showdeps

A little library to list all imports in a code.

## Install

```
npm install --save showdeps
```

## Usage

```javascript
import showdeps from 'showdeps'

const code = `
  import strman from 'strman'

  console.log('dleitee')
`

showdeps(code)

/**
 * [{
 *   "file": "strman",
 *   "specifiers": [{
 *     "name": "strman",
 *     "type": "ImportDefaultSpecifier",
 *   }],
 * }]
 */
```

## Specifiers types

### ImportDefaultSpecifier

When you import default dependency. Ex. `import strman from 'strman'`

### ImportSpecifier

When you import specified dependency. Ex. `import { replace } from 'strman'`

### ImportNamespaceSpecifier

When you import named dependency. Ex. `import * as strman from 'strman'`


