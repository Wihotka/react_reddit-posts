import React from 'react';
import styles from './cardtextcontent.css';
import {UserLink} from "./UserLink";
import {Title} from "./Title";

interface IUserInterface {
    name: string,
    avatar: string,
    url: string
}

interface ICardTextContentProps {
    postDescription: string,
    postUrl: string,
    postDate: string,
    user: IUserInterface
}

export class CardTextContent extends React.Component<ICardTextContentProps> {
    constructor(props: ICardTextContentProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles.textContent}>
                <div className={styles.metaData}>
                    <UserLink name={this.props.user.name} avatar={this.props.user.avatar} url={this.props.user.url}/>
                    <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>опубликовано</span>
                        {this.props.postDate}
                    </span>
                </div>
                <Title postUrl={this.props.postUrl} postDescription={this.props.postDescription}/>
            </div>
        );
    }
}
