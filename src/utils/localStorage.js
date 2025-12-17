/**
 * Local Storage Utility
 * Handles persistence of data to browser's local storage
 */

const STORAGE_KEYS = {
  ADDED_USERS: 'team_dashboard_added_users',
  SELECTED_USER: 'team_dashboard_selected_user',
};
export const storage = {
  saveAddedUsers: (users) => {
    try {
      localStorage.setItem(STORAGE_KEYS.ADDED_USERS, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  getAddedUsers: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ADDED_USERS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },
  clear: () => {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};
