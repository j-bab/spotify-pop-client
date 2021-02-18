import {Component} from 'react';
import PropTypes from 'prop-types';

export default class BrowserTitle extends Component {
    static propTypes = {
        title: PropTypes.string,
    };

    componentDidMount() {
        BrowserTitle.setTitle(this.props.title);
    }

    componentDidUpdate() {
        BrowserTitle.setTitle(this.props.title);
    }

    static setTitle(title) {
        document.title = title ? title : "Spotify Search";
    }

    render() {
        return null;
    }
}