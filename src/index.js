function getTravelRecords(tickets) {
    let passenGarJourneyRecord = []

    if(!tickets || tickets.length === 0) {
         return '';
    }
    
    //get the starting point - starting point is where source is not same as destination
    let startingLocation = '';

    tickets.every(ticket => {
        const {source, destination} = ticket;
        const result = tickets.filter(ticket => source === ticket?.destination);
        if(result.length === 0) {
            startingLocation = source;
            return false;
        }
        return true;
     });

     if(!startingLocation) {
          return '';
     }

     // get the destination and add it to the passenger Journey Record
     let endingLocation = tickets.filter(ticket => ticket?.source === startingLocation)[0]?.destination;
     passenGarJourneyRecord.push(startingLocation);

     while(endingLocation) {
        passenGarJourneyRecord.push(endingLocation);
        endingLocation = tickets.filter(ticket => ticket?.source === endingLocation)[0]?.destination;
    }

    return passenGarJourneyRecord.join(',')
}

module.exports = getTravelRecords;