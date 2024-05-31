import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/eavaleva/vue-ts-event-and-todo-app',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id: any) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event: any) {
    return apiClient.post('/events', event);
  },
  deleteEvent(id: any) {
    return apiClient.delete('/events/' + id);
}
}
