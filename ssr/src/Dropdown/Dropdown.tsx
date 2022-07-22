import React, {ReactNode} from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    portalNode?: HTMLDivElement;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    }

    const handleClose = () => {
        setIsDropdownOpen(false);
    }

    const node = document.getElementById('react-dropdown');

    if(!node) return null;

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && ReactDOM.createPortal((
                <div onClick={handleClose} className={styles.listContainer}>
                    {children}
                </div>
            ), node)}
        </div>
    );
}
