'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
// const stitch = require('./stitch.js')
// require('./stitch.js').get_move()
var stitch = require('./node_modules/stitch')

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('Hello world, I am a chat tob')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})


app.post('/webhook/', function (req, res) {
    let messaging_events = req.body.entry[0].messaging
    for (let i = 0; i < messaging_events.length; i++) {
      let event = req.body.entry[0].messaging[i]
      let sender = event.sender.id
      if (event.message && event.message.text) {
        let text = event.message.text
        let name = stitch.get_name()
        let time = 100

        if (text.toLowerCase().includes('basketball')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'basketball', 'basketball player'))
            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'basketball', 'basketball player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('swim')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'swim', 'swimmer'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'swim', 'swimmer'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('robot')) {
            sendTextMessage(sender,
                'Tony is a young high schooler who likes power tools and shit. All of a sudden, Tony is appointed captain of the robotics team. Everything goes well, until the day of the robotics championship competition.')

            setTimeout(function() {
                sendTextMessage(sender,
                    'After facing loss after loss, Tony must put his driving skills to the test in the final round. Will he emerge victorious, or will he go down in history as a failure?');
            }, time + 100)
            
            continue
        }

        else if (text.toLowerCase().includes('tennis')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'tennis', 'tennis player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'tennis', 'tennis player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('hockey')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'hockey', 'hockey player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'hockey', 'hockey player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('football')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'football', 'football player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'football', 'football player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('climb')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'climbing', 'climber'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'climbing', 'climber'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('surf')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'surfing', 'surfer'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'surfing', 'surfer'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('fenc')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'fencing', 'fencer'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'fencing', 'fencer'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('squash')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'squash', 'squash player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'squash', 'squash player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('softball')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'softball', 'softball player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'softball', 'softball player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('golf')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'golf', 'golfer'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'golf', 'golfer'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('track') || text.toLowerCase().includes('run')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'track', 'runner'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'track', 'runner'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('volleyball')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'volleyball', 'volleyball player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'volleyball', 'volleyball player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('wrestl')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'wrestling', 'wrestler'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'wrestling', 'wrestler'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('march')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'marching band', 'marching band member'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'marching band', 'marching band member'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('badminton')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'badminton', 'badminton player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'badminton', 'badminton player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('juggl')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'juggling', 'juggler'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'juggling', 'juggler'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('archer')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'archery', 'archer'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'archery', 'archer'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('soccer')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'soccer', 'soccer player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'soccer', 'soccer player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('pistol')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'pistol', 'pistol shooter'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'pistol', 'pistol shooter'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('sleep') || text.toLowerCase().includes('nap')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'napping', 'napper'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'napping', 'napper'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('judo')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'judo', 'martial artist'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'judo', 'martial artist'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('tae kwon do') || text.toLowerCase().includes('taekwondo')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'taekwondo', 'martial artist'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'taekwondo', 'martial artist'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('kendo')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'kendo', 'martial artist'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'kendo', 'martial artist'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('aikido')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'aikido', 'martial artist'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'aikido', 'martial artist'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('karate')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'karate', 'martial artist'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'karate', 'martial artist'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('checkers')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'checkers', 'checkers player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'checkers', 'checkers player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('chess')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'chess', 'chess player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'chess', 'chess player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('gymnas')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'gymnastics', 'gymnast'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'gymanistics', 'gymnast'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('box')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'boxing', 'boxer'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'boxing', 'boxer'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('walk')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'speed walking', 'speed walker'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'speed walking', 'speed walker'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('rifle')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'rifle', 'rifle shooter'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'rifle', 'rifle shooter'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('cook')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'cooking', 'chef'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'cooking', 'chef'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('eat') || text.toLowerCase().includes('food')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'eating', 'glutton'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'eating', 'glutton'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('dance') || text.toLowerCase().includes('tango') || text.toLowerCase().includes('salsa')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'dance', 'dancer'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'dance', 'dancer'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('bowl')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'bowling', 'bowler'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'bowling', 'bowler'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('lacrosse')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'lacrosse', 'lacrosse player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'lacrosse', 'lacrosse player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('crew') || text.toLowerCase().includes('row')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'crew', 'rower'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'crew', 'rower'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('car')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'racecar', 'racecar driver'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'racecar', 'racecar driver'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('drift')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'drifting', 'drifter'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'drifting', 'drifter'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('gymkhana')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'gymkhana', 'gymkhana driver'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'gymkhana', 'gymkhana driver'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('sail')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'sailing', 'sailor'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'sailing', 'sailor'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('rugby')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'rugby', 'rugby player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'rugby', 'rugby player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('cricket')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'cricket', 'cricket player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'cricket', 'cricket player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('figure skat')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'figure skating', 'figure skater'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'figure skating', 'figure skater'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('ice skat')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'ice skating', 'ice skater'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'ice skating', 'ice skater'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('cross country')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'cross country', 'runner'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'cross country', 'runner'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('table tennis')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'table tennis', 'table tennis player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'table tennis', 'table tennis player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('pingpong') || text.toLowerCase().includes('ping-pong') || text.toLowerCase().includes('ping pong')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'ping-pong', 'ping-pong player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'ping-pong', 'ping-pong player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('beerpong') || text.toLowerCase().includes('beer-pong') || text.toLowerCase().includes('beer pong')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'beer-pong', 'beer-pong player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'beer-pong', 'beer-pong player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('baseball')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'baseball', 'baseball player'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'baseball', 'baseball player'));
            }, time)
            
            continue
        }

        else if (text.toLowerCase().includes('div')) {
            sendTextMessage(sender,
                stitch.get_first(name, 'diving', 'diver'))

            setTimeout(function() {
                sendTextMessage(sender,
                    stitch.get_second(name, 'diving', 'diver'));
            }, time)
            
            continue
        }



        sendTextMessage(sender, "wat is " + text.substring(0, 200))
      }
      if (event.postback) {
        let text = JSON.stringify(event.postback)
        sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token)
        continue
      }
    }
    res.sendStatus(200)
  })

const token = "EAAWquF1fimYBAD3SZBrTEXELeUC3GY4oydKcZCzTx3X22fvbcEvksysnx8DZApmQQse2K39yFFTGv2LJKY9ioGYphdEoEO0XGEJj7zgEULuhftpouoUZByxDmtHHZCbgBPIap6PjPszLYVX0ZC307Ubm080MIb5X3LiNLLxoxaNAZDZD"



function sendTextMessage(sender, text) {
    //let messageData = { text:text }
    let messageData = { text:text }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendGenericMessage(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload":
            {
                "template_type": "generic",
                "elements":
                [
                {
                    "title": "First card",
                    "subtitle": "Element #1 of an hscroll",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons":
                    [{
                        "type": "web_url",
                        "url": "https://www.messenger.com",
                        "title": "web url"
                    },
                    {
                        "type": "postback",
                        "title": "Postback",
                        "payload": "Payload for first element in a generic bubble",
                    }
                    ] //end buttons
                },/*
                {
                    "title": "Second card",
                    "subtitle": "Element #2 of an hscroll",
                    "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
                    "buttons":
                    [{
                        "type": "postback",
                        "title": "Postback",
                        "payload": "Payload for second element in a generic bubble",
                	}],
                }*/
                ]
            }
        }
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

