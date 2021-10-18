import React from 'react'
import Link from 'next/link'
import isString from 'lodash/isString'
import isObject from 'lodash/isPlainObject'

interface PropTypes {
  href: string
  hrefParts?: { [key: string]: any }
  children: Node
  className?: string | undefined
}

/**
 * Component for routing to different pages
 * @param props
 * @param props.href - The link you are trying to route to
 * @param props.hrefParts - An object containing the values for dynamic routes
 * @param props.children - Either any element like <div> or a string, which will be wrapped with an <a> tag
 * @param props.className - A classname that will be applied to the <a> tag if the child is a string
 * @param props.rest - The component can be passed any other prop from Next's Link component
 */
const NavLink = ({ href, hrefParts = {}, children, className = undefined, ...rest }: PropTypes): JSX.Element => {
  const optionalProps: any = {}

  if (hrefParts != null && isObject(hrefParts)) {
    let as = href

    Object.keys(hrefParts).forEach((key) => {
      as = as.replace(`[${key}]`, hrefParts[key])
    })

    optionalProps.as = as
  }

  return (
    <Link
      href={href}
      passHref={children != null && !isString(children)}
      {...optionalProps}
      {...rest}
    >
      {isString(children) ? <a className={className}>{children}</a> : children}
    </Link>
  )
}

export default NavLink
