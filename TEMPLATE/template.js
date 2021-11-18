const express = require("express")
const { Client, RichEmbed } = require("discord.js");
const axios = require("axios")
let client = new Client();
const fs = require('fs')

// Settings (REQUIRED)
var token = "" // Your bot token
var prefix = "!" // The prefix it's going to listen to

async function startApp() {
    client.login(token);
    console.log("Successfully logged Discord bot in");
}
startApp();
client.on("ready", () => {
    console.log("Ready");
});

function isCommand(command, message) {
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}

function ping(uid) {
    return "<@!" + uid + ">"
}

client.on("message", message => {
    const uid = message.author.id.toString();
    if (isCommand("COMMANDNAME", message)) {
        console.log("Hi!") // You don't need this. It just prints out stuff in console, used for testing.
        message.channel.send("Hi!") // Sends a message saying Hi! (at the channel the command is said)
        message.channel.send(ping(uid)) // Sends a message that pings the person who sent the script, put a function so its easier for you!

    }
    if (isCommand("COMMANDNAME2", message)) {
        console.log("Hello!") // You don't need this. It just prints out stuff in console, used for testing.
        message.channel.send("Hello!") // Sends a message saying Hello! (at the channel the command is said)
    }
    
    client.on("error", console.error);
});

