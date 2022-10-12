// Array to store messages
var messages = [];

//message type lookup object.similar to enum.
var messageType = {
    out:'out-message',
    in: 'in-message',
    unknown:'unknown-message'
};

// See Data
var data =[
    {
        type:messageType.out,
        user:'Mike',
        message: 'Hey, you have lunch plans?'
    },
    {
        type: messageType.in,
        user:'Joe',
        message:'Hi Mike! No, How about Qdoba?'
    },
    {
        type: messageType.out,
        user: 'Mike',
        message: "Ok, let's go!"
    }
];

// message constructor function
function Message(type, user, message){
    this.type= type;
    this.user= user;
    this.message= message;
};

//function to create and return an element for the supplied message
function createMessageElement(message){
    //create text element for the message
    var messageText= document.createTextNode(
        message.user +': '+ message.message)

    // create the element and add the message text
    var messageEL= document.createElement('div');
    messageEL.appendChild(messageText);

    // add a class using the message type
    messageEL.className = message.type;

    return messageEL;
}

// Button click event handler to add a new message

function addMessageHandler(event){
    var user, type;
    var messageInput= document.getElementById('message-input');
    var messageContainerEl=document.getElementById('message-container');


//Determine message type and set message variable accordingly
    switch (event.target.id){
        case 'send-button':
            user='Mike';
            type=messageType.out;
            break;
        case 'reply-button':
            user='Joe';
            type =messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //create new message
    if (messageInput.value != ''){
        var message = new Message(type, user, messageInput.value);
        message.push(message);

    //create a message element
        var el= createMessageElement(message);

        messageContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

function localSeedData(){
    for(var i=0; i< data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    // Load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for ( var i=0; i < messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function(){
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //local seed data from data array above (optional)
    localSeedData();
};

init();