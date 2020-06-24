import React, { useState, useEffect } from 'react';
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

function Modal1() {
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)

    const showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        
        if(key=='modal1'){
            setModal1(true)
        }else if(key=='modal2'){
            setModal2(true)
        }
    }
    const onClose = key => () => {
        if(key=='modal1'){
            setModal1(false)
        }else if(key=='modal2'){
            setModal2(false)
        }
    }

    const onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    return (
        <WingBlank>
            <Button onClick={showModal('modal1')}><Icon type="up" />basic<Icon type="up" /></Button>
            <WhiteSpace />
            <Modal
                visible={modal1}
                transparent
                maskClosable={false}
                onClose={onClose('modal1')}
                title="Title"
                footer={[{ text: 'Ok', onPress: () => { console.log('ok'); onClose('modal1')(); } }]}
                wrapProps={{ onTouchStart: onWrapTouchStart }}
                afterClose={() => { alert('afterClose'); }}
            >
                <div style={{ height: 100, overflow: 'scroll' }}>
                    scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
                </div>
            </Modal>

            <Button onClick={showModal('modal2')}>popup</Button>
            <WhiteSpace />
            <Modal
                popup
                visible={modal2}
                onClose={onClose('modal2')}
                animationType="slide-up"
                afterClose={() => { alert('afterClose'); }}
            >
                <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                    {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                        <List.Item key={index}>{i}</List.Item>
                    ))}
                    <List.Item>
                        <Button type="primary" onClick={onClose('modal2')}>买入</Button>
                    </List.Item>
                </List>
            </Modal>
        </WingBlank>
    );
}

export default Modal1