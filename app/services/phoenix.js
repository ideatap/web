import Ember from 'ember';
import {Socket} from './utils/phoenix';

export default Ember.Service.extend({
  socket() {
    let socket = new Socket("ws://localhost:4000/socket");
    socket.connect();
    return socket;
  }
});
