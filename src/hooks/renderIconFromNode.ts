import React from 'react'

// Converter nomes de propriedades SVG para camelCase
const toCamelCase = (str: any) => {
  return str.replace(/-([a-z])/g, (_: any, char: any) => char.toUpperCase())
}

// Converter os atributos do nó SVG
const convertAttributes = (attrs: any) => {
  const newAttrs: any = {}
  for (const key in attrs) {
    newAttrs[toCamelCase(key)] = attrs[key]
  }
  return newAttrs
}

// Renderizar o IconNode como JSX
export const renderIconFromNode = (iconNode: any) => {
  const [tag, attrs, children] = iconNode
  return React.createElement(
    tag,
    convertAttributes(attrs), // Converter atributos para camelCase
    ...(children?.map((child: any) => renderIconFromNode(child)) || [])
  )
}
