import React from 'react';
import styles from './cardpreview.css';

interface ICardPreviewProps {
    url: string
}

export class CardPreview extends React.Component<ICardPreviewProps> {
    render() {
        return (
            <div className={styles.preview}>
                <img className={styles.previewImage}
                     src={this.props.url}/>
            </div>
        );
    }
}
