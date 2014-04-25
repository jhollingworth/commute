var moment = require('moment');

moment.fn.roundNext15Min = roundNext15Min;

function roundNext15Min() {
    
    var intervals = Math.floor(this.minutes() / 15);
    
    if(this.minutes() % 15 != 0) {
        intervals++;
    }

    if(intervals == 4) {
        this.add('hours', 1);
        intervals = 0;
    }

    this.minutes(intervals * 15);
    this.seconds(0);

    return this;
}

