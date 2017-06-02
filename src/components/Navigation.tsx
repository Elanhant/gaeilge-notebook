import * as React from 'react';
import './Navigation.css';

export interface Props {
    links: Array<Link>;
    onLinkClick?: (link: Link, {}) => void;
}

export interface Link {
    to: string;
    name: string;
    active?: boolean;
}

function Navigation({ links, onLinkClick }: Props) {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {
                    links.map( (link, idx) => {
                        const liClass = link.active
                            ? 'navigation__item navigation__item--active'
                            : 'navigation__item';

                        return (
                            <li key={idx} className={liClass}>
                                <a href={link.to} onClick={ e => onLinkClick && onLinkClick(link, e) } className="navigation__link">
                                    {link.name}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;
