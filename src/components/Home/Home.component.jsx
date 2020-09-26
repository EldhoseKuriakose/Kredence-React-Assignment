import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown.component';
import './Home.styles.scss';

const Home = () => {
    const [info, setInfo] = useState();
    const handleDropdownChange = (val) => {
        switch(val) {
            case 'Info1':
                setInfo(1);
                break;
            case 'Info2':
                setInfo(2);
                break;
            case 'Info3':
                setInfo(3);
                break;
            default:
                break;
        }
    }

    return (
        <div className="home-container">
            <Dropdown handleDropdownChange={handleDropdownChange} />
            {
                info === 1
                ?   <p>
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                        Info1Info1Info1Info1Info1Info1Info1Info1
                    </p>
                :   info === 2
                ?   <p>
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                        Info2Info2Info2Info2Info2Info2Info2Info2
                    </p>
                :   info === 3
                ?   <p>
                        Info3Info3Info3Info3Info3Info3Info3Info3
                        Info3Info3Info3Info3Info3Info3Info3Info3
                        Info3Info3Info3Info3Info3Info3Info3Info3
                        Info3Info3Info3Info3Info3Info3Info3Info3
                        Info3Info3Info3Info3Info3Info3Info3Info3
                        Info3Info3Info3Info3Info3Info3Info3Info3
                        Info3Info3Info3Info3Info3Info3Info3Info3
                        Info3Info3Info3Info3Info3Info3Info3Info3
                    </p>
                :   ''
            }
        </div>
    );
}

export default Home;