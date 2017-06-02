import * as React from 'react';
import * as enzyme from 'enzyme';
import Navigation, { Link } from './Navigation';

it('renders with the correct tag and class', () => {
    const nav = enzyme.shallow(<Navigation links={[]} />);
    expect(nav.type()).toEqual('nav');
    expect(nav.hasClass('navigation')).toBeTruthy();
    expect(nav.childAt(0).type()).toEqual('ul');
});

it('renders with one link correctly', () => {
    const links = [ { to: '/home', name: 'Home' } as Link ];
    const nav = enzyme.shallow(<Navigation links={links} />);

    expect(() => {
        const navUl = nav.find('ul');
        const linkItem = navUl.childAt(0);
        const aEl = linkItem.childAt(0);

        expect(navUl.children()).toHaveLength(1);
        expect(linkItem.type()).toEqual('li');
        expect(linkItem.hasClass('navigation__item')).toBeTruthy();
        expect(linkItem.hasClass('navigation__item--active')).toBeFalsy();
        expect(aEl.type()).toEqual('a');
        expect(aEl.prop('href')).toEqual('/home');
        expect(aEl.hasClass('navigation__link')).toBeTruthy();
        expect(aEl.text()).toEqual('Home');
    });
});


it('renders with the applied active BEM modifier', () => {
    const links = [ { to: '/home', name: 'Home', active: true } as Link ];
    const nav = enzyme.shallow(<Navigation links={links} />);

    expect(() => {
        const linkItem = nav.find('ul').childAt(0);
        expect(linkItem.hasClass('navigation__item--active')).toBeTruthy();
    });
});

it('renders two links', () => {
    const links = [
        { to: '/home', name: 'Home', active: false } as Link,
        { to: '/profile', name: 'Profile', active: true } as Link,
    ];
    const nav = enzyme.shallow(<Navigation links={links} />);

    expect(nav.find('ul').children()).toHaveLength(2);
});
