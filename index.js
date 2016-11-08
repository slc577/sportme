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
        let name = ''

        if (text === 'random') {
            sendTextMessage(sender, 'whee')
            continue
        }

        if (text === 'Generic') {
            sendGenericMessage(sender)
            continue
        }
        else if (text === 'baseball') {
            sendTextMessage(sender, stitch.get_first(name, 'baseball', 'baseball player'))

            //sendTextMessage(sender, stitch.get_second(name, 'baseball', 'baseball player'))
            
            continue
        }
        else if (text === 'basketball') {
            sendTextMessage(sender, stitch.get_first(name, 'basketball', 'basketball player'))
            
            //sendTextMessage(sender, stitch.get_second(name, 'basketball', 'basketball player'))
            
            continue
        }
        sendTextMessage(sender, "Text received, echo: " + text.substring(0, 200))
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

