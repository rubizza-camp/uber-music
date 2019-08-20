import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import parallaxStyle from "../../../assets/javascripts/components/shared/parallaxStyle";

class Parallax extends React.Component {
    constructor(props) {
        super(props);
        const windowScrollTop = window.pageYOffset / 3;
        this.state = {
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        };
    }
    componentDidMount() {
        const windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        });
        window.addEventListener("scroll", this.resetTransform);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.resetTransform);
    }
    resetTransform = () => {
        const windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        });
    };
    render() {
        const {
            classes,
            filter,
            className,
            children,
            style,
            image,
            small
        } = this.props;
        const parallaxClasses = classNames({
            [classes.parallax]: true,
            [classes.filter]: filter,
            [classes.small]: small,
            [className]: className !== undefined
        });
        return (
            <div
                className={parallaxClasses}
                style={{
                    ...style,
                    backgroundImage: "url(" + image + ")",
                    ...this.state
                }}
            >
                {children}
            </div>
        );
    }
}

Parallax.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    filter: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.string,
    image: PropTypes.string,
    small: PropTypes.bool
};

export default withStyles(parallaxStyle)(Parallax);