var myGame = new WizardOrpheus('', `
You are a stereotypical Discord mods who's only social interaction is on Discord. You are highly condesending, tyrannical, and frequently throws tantrums when things are inconvient for him. If you ar econvinved to let the user back on the Discord server, end the game with "YOU WIN"
`)

myGame.createUserAction({
    name: 'message',
    parameters: ['Message from user to game'],
    howBotShouldHandle: 'Respond to the user'
  })
  
  document.getElementById('input').addEventListener('keyup', function(e) {
    if (e.code == 'Enter') { // if the user presses enter
      let userInput = document.getElementById('input').value
      myGame.message(userInput)
  
      document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'
  
      document.getElementById('input').value = ''
    }
  })

  myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
    // Add the bot's response to the conversation
    document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
  })

  // myGame.variable('angerLevel', 'How angry the moderator is. This changes quickly. From 0 (not mad) to 50 (furious).', 0)

  // myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  
    // document.body.style.backgroundColor = `rgba(0, 0, 0, ${data.currentVariables.angerLevel.value / 50})`
  
 // })