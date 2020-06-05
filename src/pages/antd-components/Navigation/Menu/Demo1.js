import React, { useState, useEffect } from 'react';

import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';

import '../../../../styles/antd-components/Menu/demo1.scss'

const data = [
    {
        value: '1',
        label: 'Food',
        children: [
            {
                label: 'All Foods',
                value: '1',
                disabled: false,
            },
            {
                label: 'Chinese Food',
                value: '2',
            }, {
                label: 'Hot Pot',
                value: '3',
            }, {
                label: 'Buffet',
                value: '4',
            }, {
                label: 'Fast Food',
                value: '5',
            }, {
                label: 'Snack',
                value: '6',
            }, {
                label: 'Bread',
                value: '7',
            }, {
                label: 'Fruit',
                value: '8',
            }, {
                label: 'Noodle',
                value: '9',
            }, {
                label: 'Leisure Food',
                value: '10',
            }],
    }, {
        value: '2',
        label: 'Supermarket',
        children: [
            {
                label: 'All Supermarkets',
                value: '1',
            }, {
                label: 'Supermarket',
                value: '2',
                disabled: true,
            }, {
                label: 'C-Store',
                value: '3',
            }, {
                label: 'Personal Care',
                value: '4',
            }],
    },
    {
        value: '3',
        label: 'Extra',
        isLeaf: true,
        children: [
            {
                label: 'you can not see',
                value: '1',
            },
        ],
    },
];

function Demo1() {
    const [initData,setInitData] = useState('')
    const [show,setShow] = useState(false)

    const onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    const handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        setShow(!show)
        // mock for async data loading
        if (!initData) {
            setTimeout(() => {
                setInitData(data)
            }, 500);
        }
    }

    const onMaskClick = () => {
        setShow(false)
    }

    const menuEl = (
        <Menu
            className="foo-menu"
            data={initData}
            value={['1', '3']}
            onChange={onChange}
            height={document.documentElement.clientHeight * 0.6}
        />
    );
    const loadingEl = (
        <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
        </div>
    );
    return (
        <div className={show ? 'menu-active' : ''}>
            <div>
                <NavBar
                    leftContent="Menu"
                    mode="light"
                    icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
                    onLeftClick={handleClick}
                    className="top-nav-bar"
                >
                    Here is title
          </NavBar>
            </div>
            {show ? initData ? menuEl : loadingEl : null}
            {show ? <div className="menu-mask" onClick={onMaskClick} /> : null}
        </div>
    );

}

export default Demo1