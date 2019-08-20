import React from 'react';
import Carousel from "react-slick";
import MyImage from './image.jsx'
import { makeStyles } from '@material-ui/core/styles';

export default function ImageCarousel(props) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    autoplay: true
  };

  const useStyles = makeStyles(theme => ({
    carousel: {
      width:  props.width,
      height: props.height
    },
    coverImg:{
      backgroundSize: 'cover',
    }
  }));

  const classes = useStyles();
  return (
    <Carousel {...settings} className={classes.carousel }>
      {props.images.map((image,i) =>
        <MyImage width={props.width} height={props.height} key={i} src={image}></MyImage>
      )}
    </Carousel>
);}
