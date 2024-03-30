/**
 * Example adapted from
 * https://github.com/mathjax/MathJax/issues/2385#issuecomment-1253051223
 */
import { mathjax } from 'mathjax-full'
import { TeX } from 'mathjax-full/input'
import { SVG } from 'mathjax-full/output'
import { AllPackages } from 'mathjax-full/input/tex'
import { liteAdaptor } from 'mathjax-full/adaptors'
import { RegisterHTMLHandler } from 'mathjax-full/handlers'

const adaptor = liteAdaptor()
RegisterHTMLHandler(adaptor)

const mathjax_document = mathjax.document('', {
  InputJax: new TeX({ packages: AllPackages }),
  OutputJax: new SVG({ fontCache: 'local' })
})

const mathjax_options = {
  em: 16,
  ex: 8,
  containerWidth: 1280
}

export function get_mathjax_svg(math: string): string {
  const node = mathjax_document.convert(math, mathjax_options)
  return adaptor.innerHTML(node)
}
