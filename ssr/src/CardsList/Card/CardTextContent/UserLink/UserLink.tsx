import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
    name: string,
    avatar: string,
    url: string
}

export class UserLink extends React.Component<IUserLinkProps> {
    constructor(props: IUserLinkProps) {
        super(props);
    }

    render() {
        return (
            <a href={this.props.url} className={styles.userLink}>
                <div className={styles.avatar}>
                    <img className={styles.avatarImage}
                         src={this.props.avatar}
                         alt="avatar"/>
                </div>
                <span className={styles.userName}>{this.props.name}</span>
            </a>
        );
    }

}
