import React, { useState } from 'react'
import AppWrapper from './Common/AppWrapper';
import One from './Steps/One';
import Two from './Steps/Two';
import Three from './Steps/Three';
import Four from './Steps/Four';
import Five from './Steps/Five';
import Six from './Steps/Six';
import Eight from './Steps/Eight';
import Seven from './Steps/Seven';


const Main = () => {
    const [Active, setActive] = useState(1);
    return (
        <AppWrapper>
            {
                Active == 1 && <One Active={Active} setActive={setActive} />
            }

            {
                Active == 2 && <Two Active={Active} setActive={setActive} />
            }

            {
                Active == 3 && <Three Active={Active} setActive={setActive} />
            }

            {
                Active == 4 && <Four Active={Active} setActive={setActive} />
            }

            {
                Active == 5 && <Five Active={Active} setActive={setActive} />
            }

            {
                Active == 6 && <Six Active={Active} setActive={setActive} />
            }

            {
                Active == 8 && <Eight Active={Active} setActive={setActive} />
            }

            {
                Active == 7 && <Seven Active={Active} setActive={setActive} />
            }
        </AppWrapper>
    )
}

export default Main