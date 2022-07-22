import React from 'react';
import styles from './card.css';
import {CardPreview} from "./CardPreview";
import {CardMenu} from "./CardMenu";
import {CardControls} from "./CardControls";
import {CardTextContent} from "./CardTextContent";

interface IUserData{
    name: string,
    avatar: string,
    url: string
}

export interface IPostData {
    id: number,
    postDate: string,
    postUrl: string,
    postPreviewUrl: string,
    postDescription: string,
    user: IUserData
}

interface ICardProps {
    postData: IPostData
}

export class Card extends React.Component<ICardProps> {
    constructor(props: ICardProps) {
        super(props);
    }

    render() {
        return (
            <li className={styles.card}>
                <CardTextContent
                    postUrl={this.props.postData.postUrl}
                    postDate={this.props.postData.postDate}
                    postDescription={this.props.postData.postDescription}
                    user={this.props.postData.user}
                />
                <CardPreview url={this.props.postData.postPreviewUrl}/>
                <CardMenu/>
                <CardControls/>
            </li>
        );
    }
}
