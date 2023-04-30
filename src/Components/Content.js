import React from 'react';
import styles from "../styles/New.module.css";
import image1 from "../styles/image/1.jpg";
import image2 from "../styles/image/2.jpg";
import image3 from "../styles/image/3.jpg";

const Content = ({ dark }) => {
     
    return (
        <div className={dark ? styles.darktheme : styles.theme}>
           <div className={dark ? styles.hcolor : ""}>{dark ? <h1> its a dark theme </h1> : <h1> its a light theme </h1>}</div> 

           <div className={styles.cardcontainer}>
            <div className={dark ? styles.cartdark : styles.cart}>
                <img src={image1} alt='img1'/>
                <h2>this first card</h2>
                <p>this is first</p>
            </div>
            <div className={dark ? styles.cartdark : styles.cart}>
            <img src={image2} alt='img1'/>
            <h2>this secend card</h2>
                <p>this is secend</p>
            </div>
            <div className={dark ? styles.cartdark : styles.cart}>
            <img src={image3} alt='img1'/>
            <h2>this third card</h2>
                <p>this is third</p>
            </div>
           </div>

        </div>
    );
};

export default Content;