import Dexie from 'dexie';

const db = new Dexie('BookmarkDatabase');

db.version(1).stores({
  bookmarks: '++id, text, minitext, image , Link' // ++id เป็น primary key แบบ auto increment
});

export default db;