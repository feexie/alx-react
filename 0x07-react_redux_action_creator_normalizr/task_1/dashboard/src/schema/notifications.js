import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Function to retrieve notifications by a specific user
export const fetchUserNotifications = (userId) => {
  return notificationsData.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
};

// Define schema entities for normalization
const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notificationSchema = new schema.Entity('notifications', {
  author: userSchema,
  context: messageSchema,
});

// Normalize the notifications data
const normalizedData = normalize(notificationsData.default, [notificationSchema]);

export { normalizedData };
