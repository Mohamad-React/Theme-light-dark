import React from 'react';

import styles from "../styles/New.module.css";
import { useState } from 'react';
import Content from './Content';
import { useEffect } from 'react';


const New = () => {

 const [dark, setDark] = useState(false);
 useEffect(() => {
    // retrieve the value from localStorage
    const savedMode = JSON.parse(localStorage.getItem("mode"));

    // if the savedMode exists, update the dark state with it
    if (savedMode !== null) {
      setDark(savedMode);
    }
  }, []);

  // update localStorage with the new value of dark whenever it changes
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

   
    console.log(dark);
    return (
        <>
           <header className={dark ? styles.darkmode : ""}>
                <div className={styles.container}>
                    <div className={styles.menu}>
                        <ul>
                            <li>
                                home
                            </li>
                            <li>
                                karrier
                            </li>
                            <li>
                                about us
                            </li>
                            <li>
                                contact us
                            </li>
                        </ul>
                    </div>

                    <div>
                        <label className={styles.switch}>
                            <input type='checkbox' className={styles.check} onChange={() => setDark(!dark)} checked={dark} />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                
                </div>
            </header>
            <Content dark={dark} />
        </>
    );
};

export default New;