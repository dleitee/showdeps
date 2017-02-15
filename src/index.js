import * as babylon from 'babylon'
import traverse from 'babel-traverse'

export default (code) => {

  const ast = babylon.parse(code, {
    sourceType: 'module'
  })

  let dependencies = []

  traverse(ast, {
    enter(path) {
      if (path.node.type === 'ImportDeclaration') {
        const specifiers = path.node.specifiers.map(value => ({
          type: value.type,
          name: value.local.name,
        }))
        const dependency = {
          file: path.node.source.value,
          specifiers,
        }
        dependencies = [
          ...dependencies,
          dependency,
        ]
      }
    }
  })

  return dependencies
}
