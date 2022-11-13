import React, { useState } from 'react'
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


const Main = () => {
    const [Active, setActive] = useState(0);
    return (
        <AppWrapper>

            {
                Active == 0 && <Intro Active={Active} setActive={setActive} />
            }

            {
                Active == 11 && <Lang Active={Active} setActive={setActive} />
            }

            {
                Active == 1 && <One Active={Active} setActive={setActive} />
            }

            {
                Active == 2 && <One Active={Active} setActive={setActive} />
            }

            {
                Active == 3 && <Two Active={Active} setActive={setActive} />
            }

            {
                Active == 4 && <Three Active={Active} setActive={setActive} />
            }

            {
                Active == 5 && <Four Active={Active} setActive={setActive} />
            }

            {
                Active == 6 && <Five Active={Active} setActive={setActive} />
            }

            {
                Active == 7 && <Six Active={Active} setActive={setActive} />
            }

            {
                Active == 9 && <Eight Active={Active} setActive={setActive} />
            }

            {
                Active == 10 && <Seven Active={Active} setActive={setActive} />
            }
        </AppWrapper>
    )
}

export default Main