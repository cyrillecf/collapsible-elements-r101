import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import image from './images/expand-vertical-4.svg';
import './sass/app.scss';
import Collapsible from './Collapsible';

class App extends Component {
    render() {
        return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 col-md-offset-3">

                    <div>
                        <header>
                            <img src={image} alt="logo" />
                            <h1>Collapsible Content</h1>
                        </header>
                        <div className="content">
                            <div className="panel-group">
                                
                                <Collapsible title="Overview">
                                    <p>Case felt the edge of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a heroin factory.</p>
                                </Collapsible>

                                <Collapsible title="Features">
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad squid. 3 wolf moon officia aute.</p>
                                </Collapsible>
                                
                                <Collapsible title="Software">
                                    <p>Exercitation amet ad nisi est cillum magna elit veniam ad sit minim irure. Qui est nisi tempor minim irure Lorem non aliqua sint ex cillum magna sit. Quis adipisicing sunt ea laborum eu ullamco ea nisi esse fugiat. Exercitation proident dolor ad anim adipisicing et anim minim ullamco dolor ut eu ex in. Do magna ex minim sit consequat labore eu deserunt commodo labore duis commodo incididunt sit.
                                    The knives seemed to have been sparsely decorated, years before, with a random collection of European furniture, as though Deane had once intended to use the place as his home. The alarm still oscillated, louder here, the rear wall dulling the roar of the Villa bespeak a turning in, a denial of the bright void beyond the hull. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the bright void beyond the chain link. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid killer in the dark, curled in his sleep, and wake alone in the Japanese night like live wire voodoo and he’d cry for it, cry in his devotion to esoteric forms of tailor-worship. It was disturbing to think of the Flatline as a paid killer in the tunnel’s ceiling. Still it was a square of faint light. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the Villa bespeak a turning in, a denial of the bright void beyond the hull.

                                    </p>
                                </Collapsible>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
        );
    }
}

export default App;
