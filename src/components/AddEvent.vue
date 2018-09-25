/* eslint-disable */
<template>
  <div class= "">
    <h4>Add an Event</h4>
    <div class="form">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="event.title">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="event.description">
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" class="form-control" v-model="event.date">
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-control" v-model="event.location">
      </div>
      <button class="btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import {eventsRef} from '../firebaseApp'
  
  export default {
    data() {
      return {
        event: {
          title: '',
          description: '',
          date: '',
          location: '',
          email: '',
        }
      }
    },
    methods: {
      addEvent() {
        this.event.email = this.$store.state.user.email;
        eventsRef.push(this.event);
      }
    }
  } 
</script>
