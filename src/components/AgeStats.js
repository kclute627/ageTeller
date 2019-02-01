import React, { Component } from 'react';
import partyPopper from './Assets/party-popper.jpg';


class AgeStats extends Component {

    timeSince=(date)=>{
        let today = new Date().getTime();
        let otherDate = new Date(date).getTime();

        let diffrence = Math.abs(today - otherDate);

        let days = Math.floor(diffrence / (1000 * 3600 * 24));

        let years = Math.floor(days / 365);

        days -= years*365;
        let months = Math.floor(days / 31 );
        days-= months*31

        return `${years} years, ${months} months and ${days} days!`
    }


    render(){
        return(
            <div>
                
                <h3>Congrats on being alive for  {this.timeSince(this.props.date)}</h3>
                <img className='partyPopper' src={partyPopper} alt='party-popper' />
            </div>
        )
    }
}







export default AgeStats;