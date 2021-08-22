import React from 'react'
import './Reviews.css'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

export default function Reviews(props) {
    

    return (
        
        <div className="reviews-container">
            <div className="col-sm-6">
                {props.product.productReview.map(review => (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title" name="name"></h3>
                        <div className="stars">
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend"></Typography>
                            <Rating name="read-only" value={review.rating} readOnly />
                        </Box> 
                        </div>
                    </div>
                    <div className="panel-body" name="reviewBody">
                        <p>{review.text}</p>
                        <span name="author"></span>  
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
