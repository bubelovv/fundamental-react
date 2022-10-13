import React from 'react';
import styles from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const cls = [styles.modal]
    if(!visible) {
        cls.push(styles.invisible)
    }

    return (
        <div className={cls.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;