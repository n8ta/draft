# Aeon of Storms Drafting
Simple Rails applications to make drafting for the game aeon of storms not so damn slow.

PRs welcome. My goal is to build a tool to allow people to create their own draft format (see seeds.rb for an example template). But I don't have time at the moment.

License: [http://www.wtfpl.net/](http://www.wtfpl.net/)

# Tech
## Rails
Stores a simple json column in the database with the current state of each draft.
Also stores a unique identified in the session of each client.

Publishes this state to an action cable channel.
## React
Subscripts to the action cable channel and handles the UI based on the state sent from react.

Captain users are able to dispatch events to the reducer in the rails app via a PATCH request. Actions are things like, pick hero, ban hero, pick player etc.