var Q = require('q');
var _ = require('lodash');
var moment = require('moment');
var format = require('util').format;
var request = Q.denodeify(require('request'));

var JOURNEY_URL = "http://api.prod01.prod.beta.tfl.gov.uk/Journey/JourneyResults/%s/to/%s?%s";
var DEFAULT_OPTIONS = {
    'AccessibilityPreference':'norequirements',
    'CyclePreference':'none',
    'JourneyPreference':'leasttime',
    'MaxWalkingMinutes':'40',
    'Mode':'tube%2cbus%2cdlr%2criver-bus%2ctram%2ccable-car%2coverground%2cnational-rail%2ccoach%2creplacement-bus',
    'NationalSearch':'False',
    'TimeIs':'departing',
    'WalkingOnly':'False',
    'WalkingSpeed':'average',
    'alternativeCycle':'true',
    'alternativeWalking':'true',
    'app_id':'bb90a5c6',
    'app_key':'e1561b91652049957ebb52d0742596bc'
};

//returns a promise that resolves to an array of journey's.
//to and from are naptanId's
module.exports = function timetable(from, to, options) {

    options = _.defaults(options || {}, DEFAULT_OPTIONS, {
        'Date': date(),
        'Time': time()
    });
    
    var params = Object.keys(options).map(pair).join('&');
    var url = format(JOURNEY_URL, from, to, params);
    
    return request(url)
        .then(validateResponse)
        .then(parseBody);

    function pair(key) {
        return key + '=' + options[key]
    }
}

function validateResponse(args) {
    var res = args[0]

    if(res.statusCode !== 200) {
        throw new Error('Invalid status code: ' + res.statusCode, res);
    }

    return args[1];
}

function parseBody(body) {
    body = JSON.parse(body);
    
    if(!body.journeys) {
        return []
    }

    return body.journeys.map(formatJourney);

    function formatJourney(journey) {
        return {
            duration: journey.duration, 
            start: journey.startDateTime,
            arrival: journey.arrivalDateTime
        }
    }
}

function time() {
    return moment().roundNext15Min().format('HHmm')
}

function date() {
    return moment().format('YYYYMMDD')
}
