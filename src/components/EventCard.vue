<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { EventItem } from '@/types';
export default defineComponent({
    props: {
        event: {
            type: Object as PropType<EventItem>,
            required: true
        }
    }
})
</script>
<template>
    <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: event.id } }">
        <div class="event-card">
            <span>@{{ event.time }} on {{ event.date }}</span>
            <h4>{{ event.title }}</h4>
        </div>
    </router-link>
</template>
<style scoped>
.event-card {
    padding: 20px;
    width: 250px;
    background-color: #f4f4f4;
    cursor: pointer;
    margin: 18px;
    border-radius: 10px;
    transition: background-color 0.3s, color 0.3s;
    align-items: center;
    align-self: center;

}

.event-card:hover {
    background-color: #5eaa7791;
    color: white;
}

.event-link {
    color: #2c3e50;
    text-decoration: none;
}
</style>