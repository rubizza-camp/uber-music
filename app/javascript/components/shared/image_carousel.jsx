import React from 'react';
import Carousel from "react-slick";
import MyImage from './image.jsx'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

export default function ImageCarousel(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    autoplay: true
  };

  const useStyles = makeStyles(theme => ({
    carousel: {
      width:  props.width
    },
    coverImg:{
      backgroundSize: 'cover',
    }
  }));

  const classes = useStyles();
  return (
    <Carousel {...settings} className={classes.carousel }>
        <MyImage width={props.width} height={'377px'} src={'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'}></MyImage>
        <MyImage width={props.width} height={'377px'} src={'https://dcist.com/wp-content/uploads/sites/3/2019/04/Gem2-1500x1346.jpg'}></MyImage>
        <MyImage width={props.width} height={'377px'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtT76rXA1J6NqTuDdaVfk4Y787lidZbqT2_oyX6q607o5uCQA'}>
      </MyImage>
    </Carousel>
);}
