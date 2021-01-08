import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Testspage from "./pages/Testspage";
import HW1 from "../h1/HW1";
import Junior from "./pages/Junior";
import Juniorplus from "./pages/Juniorplus";
import HW2 from "../h2/HW2";
import HW4 from "../h4/HW4";
import HW3 from "../h3/HW3";
import HW6 from "../h6/HW6";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import HW11 from "../h11/HW11";
import HW12 from "../h12/HW12";


export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    Testspage: "/testspage",
    Junior: "/junior/j",
    Juniorplus: "/Juniorplus",
    HW1: '/HW1',
    HW2: '/HW2',
    HW3: '/HW3',
    HW4: '/HW4',
    HW6: '/HW6',
    HW7: '/HW7',
    HW8: '/HW8',
    HW9: '/HW9',
    HW10: '/HW10',
    HW11: '/HW11',
    HW12: '/HW12',

    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.HW1} render={() => <HW1/>}/>
                <Route path={PATH.HW2} render={() => <HW2/>}/>
                <Route path={PATH.HW3} render={() => <HW3/>}/>
                <Route path={PATH.HW4} render={() => <HW4/>}/>
                <Route path={PATH.HW6} render={() => <HW6/>}/>
                <Route path={PATH.HW7} render={() => <HW7/>}/>
                <Route path={PATH.HW8} render={() => <HW8/>}/>
                <Route path={PATH.HW9} render={() => <HW9/>}/>
                <Route path={PATH.HW10} render={() => <HW10/>}/>
                <Route path={PATH.HW11} render={() => <HW11/>}/>
                <Route path={PATH.HW12} render={() => <HW12/>}/>
                <Route path={PATH.Junior} render={() => <Junior/>}/>
                <Route path={PATH.Testspage} render={() => <Testspage/>}/>
                <Route path={PATH.Juniorplus} render={() => <Juniorplus/>}/>


                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
