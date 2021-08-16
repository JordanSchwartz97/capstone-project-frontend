import React from 'react'
import './Reviews.css'
import {BsFillStarFill} from "react-icons/bs"
export default function Reviews() {
    return (
        <div className="reviews-container">
            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title" name="name">Input Product Name placeholder</h3>
                        <div className="stars">
                            <span className="star"><BsFillStarFill/></span>
                            <span className="star"><BsFillStarFill/></span>
                            <span className="star"><BsFillStarFill/></span>
                            <span className="star"><BsFillStarFill/></span>
                            <span className="star"><BsFillStarFill/></span>
                        </div>
                    </div>
                    <div className="panel-body" name="reviewBody">
                        <p>Suspendisse rutrum laoreet accumsan. Phasellus neque mauris, interdum nec tristique nec, posuere in ligula. Curabitur ultrices, dolor ut varius porttitor, 
                        eros arcu scelerisque quam, sed porta risus arcu et ex. Nam sollicitudin, eros eget tincidunt accumsan, magna nibh congue nisi, at convallis felis risus ac lacus. 
                        Nunc sed fringilla dolor, eget ultrices est. Aenean consequat, libero sed venenatis ornare, massa nulla hendrerit quam, a iaculis est mi ac neque. Vestibulum condimentum tincidunt quam a varius. Mauris ac urna quis sem scelerisque accumsan. 
                        Suspendisse potenti. Nullam eleifend, nulla nec suscipit semper, lectus tellus lobortis eros, a varius mi est at erat. Nunc rutrum, purus sit amet ullamcorper consequat, dui tellus luctus metus, eu facilisis nisi lorem ac lorem. 
                        Curabitur a mollis odio. Aliquam fermentum aliquam sapien ac feugiat.
                        Suspendisse rutrum laoreet accumsan. Phasellus neque mauris, interdum nec tristique nec, posuere in ligula. Curabitur ultrices, dolor ut varius porttitor, 
                        eros arcu scelerisque quam, sed porta risus arcu et ex. Nam sollicitudin, eros eget tincidunt accumsan, magna nibh congue nisi, at convallis felis risus ac lacus. 
                        Nunc sed fringilla dolor, eget ultrices est. Aenean consequat, libero sed venenatis ornare, massa nulla hendrerit quam, a iaculis est mi ac neque. Vestibulum condimentum tincidunt quam a varius. Mauris ac urna quis sem scelerisque accumsan. 
                        Suspendisse potenti. Nullam eleifend, nulla nec suscipit semper, lectus tellus lobortis eros, a varius mi est at erat. Nunc rutrum, purus sit amet ullamcorper consequat, dui tellus luctus metus, eu facilisis nisi lorem ac lorem. 
                        Curabitur a mollis odio. Aliquam fermentum aliquam sapien ac feugiat.
                        </p> 
                        <span name="author">--John Doe</span>  
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
