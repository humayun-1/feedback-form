import React, { useEffect, useState } from 'react'
import AppWrapper from './Common/AppWrapper';
import Intro from './Steps/Intro';
import Lang from './Steps/Lang';
import One from './Steps/One';
import Two from './Steps/Two';
import Three from './Steps/Three';
import Four from './Steps/Four';
import Five from './Steps/Five';
import Six from './Steps/Six';
import Seven from './Steps/Seven';
import Eight from './Steps/Eight';
import HowManyTimes from './Steps/HowManyTimes';
import data from './Data';
import Nine from './Steps/Nine';


const Main = () => {

    const [Active, setActive] = useState(0);
    const [Language, setLanguage] = useState('EN');
    const [Data, setData] = useState(data);
    const [Text, setText] = useState([]);

    useEffect(() => {
        let list = Data.find(ele => ele.id == Active);
        if (list) {
            setText(list[Language]);
        }

    }, [Active]);

    return (
        <AppWrapper>

            {
                Active == 0 && <Intro Active={Active} setActive={setActive} />
            }

            {
                Active == 1 && <Lang setLanguage={setLanguage} Active={Active} setActive={setActive} />
            }

            {
                Active == 2 && <One Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 3 && <Two Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 4 && <HowManyTimes Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 5 && <Three Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 6 && <Four Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 7 && <Five Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 8 && <Six Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 9 && <Seven Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 10 && <Eight Language={Text} Active={Active} setActive={setActive} />
            }

            {
                Active == 11 && <Nine Language={Text} Active={Active} setActive={setActive} />
            }
        </AppWrapper>
    )
}

export default Main