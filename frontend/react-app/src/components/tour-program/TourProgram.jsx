import './TourProgram.css'

function TourProgram({tour_program}){
    return(
        <div className='tour-program'>
                <div className='program-title'>
                    Программа тура
                </div>
                {
                    tour_program.days.map((element, index) => 
                    (
                        <div className='day'>
                            <div className='day-number'>
                                <div className='circle-badge'>{index + 1}</div>
                                <div>день</div>
                            </div>
                            
                            <div className='day-events'>
                                <ul>
                                    {
                                        element.events.map((e) =>
                                        (
                                           <li>{e}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
    );
}

export default TourProgram;