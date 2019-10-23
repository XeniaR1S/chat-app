import React from 'react'
import Contact from './Contact'

const user = [
  {
    character: "Rachel Arnold",
    image:
      "https://randomuser.me/api/portraits/women/88.jpg",
    online: false
  },
  {
    character: "Eric Perry",
    image:
      "https://randomuser.me/api/portraits/men/40.jpg",
    online: true
  },
  {
    character: "Felix Jordan",
    image:
      "https://randomuser.me/api/portraits/men/55.jpg",
      online: true
  },
  {
    character: "Lois Hansen",
    image:
      "https://randomuser.me/api/portraits/women/30.jpg",
      online: false
  },
  {
    character: "Bonnie Hunt",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
      online: true
  }
];

const ContactList = () => (
  <div>
    {user.map(item => (
      <Contact {...item}/>
    ))}
  </div>
)
export default ContactList