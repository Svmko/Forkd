import React, { Component } from 'react';
import Card from "./CardUI";
import './CardStyle.css'

import img1 from '../../assets/stock/kochi.png';
import img2 from '../../assets/stock/katherine.png';
import img3 from '../../assets/stock/angelina.png';

class Cards extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card
                            imgsrc={img1}
                            title="Kochi, NYC, NY"
                            caption='"One of our best experiences when it comes to food! 9 really good courses and great service. We walked home with big smiles from Kochi." - joakimb705 4/7/22'
                            />
                    </div>
                    <div className='col-md-4'>
                        <Card
                            imgsrc={img2}
                            title="Katherine, NYC, NY"
                            caption='"Walked in and the waitress was very thoughtful to seat us at the middle of the bar. The drinks were recommend by the bartender and it taste peachy!" - Felita L. 4/2/23'
                            />
                    </div>
                    <div className='col-md-4'>
                        <Card
                            imgsrc={img3}
                            title="Angelina Bakery, NYC, NY"
                            caption='"The pastries were as beautiful as they were delicious!" - Chris C. 3/23/23'
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
