import React from 'react';

import { useRouter } from 'next/router';

export default ({ href, children }) => {
  const router = useRouter();
  console.log(router.asPath.toLowerCase());
  console.log(href.toLowerCase());

  let className = children.props.className || '';
  if (router.asPath.toLowerCase().includes(href.toLowerCase())) {
    className = `${className} selected`;
  }

  return <a href={href}>{React.cloneElement(children, { className })}</a>;
};
