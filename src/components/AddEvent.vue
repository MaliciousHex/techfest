/* eslint-disable */
<template>
  <div class = "add-event">
    <h4>Add an Event <input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">

      <div class="row">
        <div class="form-group col-md-6">
          <label>Title</label>
          <input type="text" class="form-control" v-model="event.title">
        </div>

        <div class="form-group col-md-6">
          <label>Date</label>
          <input type="date" class="form-control" v-model="event.date">
        </div>

      </div>

      <div class="row">
        <div class="form-group col-md-6">
          <label>Description</label>
          <input type="text" class="form-control" v-model="event.description">
        </div>

        <div class="form-group col-md-6">
          <label>Location</label>
          <input type="text" class="form-control" v-model="event.location">
        </div>
      </div>
      <button class="btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  @import "../assets/scss/_main.scss";
</style>

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
        },
        showForm:false
      }
    },
    methods: {
      addEvent() {
        this.event.email = this.$store.state.user.email;
        eventsRef.push(this.event);
      }
    },
  }
</script>
