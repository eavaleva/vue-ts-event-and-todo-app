<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import type { EventItem } from '@/types';
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';

export default defineComponent({
  name: 'EventList',
  components: {
    EventCard
  },
  setup() {
    const events = ref<EventItem[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const fetchEvents = async () => {
      try {
        const response = await EventService.getEvents();
        events.value = response.data;
      } catch (err) {
        error.value = 'Failed to load events. Please try again later.';
        console.log(err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchEvents();
    });

    return {
      events,
      loading,
      error
    };
  }
});
</script>

<template>
  <div>
    <h1 class="sticky-header">Events for Good</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="events">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 1000;
  margin: 10px 0;
  padding: 10px 0px;
  text-align: center;
}

.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  font-family: monospace;
  font-size: large;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>