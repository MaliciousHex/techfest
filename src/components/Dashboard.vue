/* eslint-disable */

<template>
    <div class="dashboard">
        <h3 class="dashboard__title">Event Dashboard</h3>
        <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>

        <hr>
        <AddEvent/>
        <hr>

        <section class="col-md-12 list-item">
          <EventItem
            v-for="(event_item,index) in this.$store.state.events"
            :event="event_item"
            :key="index"
            />
        </section>
    </div>
</template>

<style lang="scss" scoped>
  @import "../assets/scss/_main.scss";

  .dashboard{
    padding:5px 0 5px 0;
    width:100%;
    background-color: $color-primary-dark;
    margin:0;

    &__title{
      font-weight: 800;
      margin:1rem;
      padding:0;
    }

  }

  .list-item{
    margin-top:1rem;
  }
</style>


<script>
/* eslint-disable */
import { firebaseApp, eventsRef} from '../firebaseApp';
import AddEvent from './AddEvent.vue';
import EventItem from './EventItem.vue';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    },
  },
  components: {
    AddEvent,
    EventItem,
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = [];

      snap.forEach(event => {
        events.push(event.val())
      });
      this.$store.dispatch('setEvents',events);
    });

  }
};
</script>

