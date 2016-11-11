var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE5OTE4ZTJmYjc0ZDAwMTFiZTg1MzgiLCJ1c2VybmFtZSI6InRlc3RlcmthQG1haWwucnUiLCJyb2xlIjoidXNlciIsImlhdCI6MTQ3ODA3MDY3Mn0.olvDgaWqCsVTqedaf9Vp1meVhcWXjPv8Fup8Ka9cSyI';
var skb = new Skb(token);
skb.taskHelloWorld('Любой ваш текст тут');
