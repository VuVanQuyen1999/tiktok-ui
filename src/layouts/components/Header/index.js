import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import config from '~/config';
import Button from '~/Components/Button';
import styles from './Header.module.scss';
import images from '~/assets/img';
import Menu from '~/Components/Popper/Menu';
import { MailboxIcon, MessageIcon } from '~/Components/Icons';
import Image from '~/Components/images';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback end help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@Hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                <Search />

                {/* Action */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('currentUser')}>
                                <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                    <button className={cx('actions-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                                    <button className={cx('actions-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                                    <button className={cx('actions-btn')}>
                                        <MailboxIcon />
                                        <span>18</span>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/e7b9db475cba9fa98f1b7e055bf6712d~c5_100x100.jpeg?x-expires=1655953200&x-signature=frQ6AXiNTLCzdW881B7tq9TIIlk%3D"
                                alt="Nguyen Van A"
                                // fallBack="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F550x%2F56%2F1a%2F28%2F561a288a3e202eb2cd08e2d300f236a3.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fthaongoc258%2Fr%25C3%25A1i-c%25C3%25A1-w%2F&tbnid=817oetChINnqXM&vet=12ahUKEwj6rIfxxML4AhV90IsBHY2DAdkQMygregUIARCSAg..i&docid=LzAT4KMdLM-yAM&w=550&h=825&q=r%C3%A1i%20c%C3%A1&ved=2ahUKEwj6rIfxxML4AhV90IsBHY2DAdkQMygregUIARCSAg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
