// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
// import { createConsumer } from "@rails/actioncable"
//
// export default createConsumer()


import { createConsumer } from "@rails/actioncable"

let consumer;

const createChannel = (...args) => {
    if (!consumer) {
        consumer = createConsumer();
    }

    return consumer.subscriptions.create(...args);
};

export default createChannel;