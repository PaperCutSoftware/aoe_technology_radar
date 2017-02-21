import React from 'react';
import classNames from 'classnames';
import Link from './Link';

export default function Item({ item, noLeadingBorder = false, active = false}) {
  return (
    <Link
      className={classNames('item', {
        'item--no-leading-border': noLeadingBorder,
        'is-active': active,
      })}
      pageName={`${item.quadrant}/${item.name}`}
    >
      <div className="item__title">{item.title}</div>
      {
        item.info && (
          <div className="item__info">{item.info}</div>
        )
      }
    </Link>
  );
}
