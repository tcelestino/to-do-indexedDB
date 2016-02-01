class ToDo {
  constructor() {
    this.db = null;
    this.openDb();
  }
  openDb() {
    let version = 1;
    let request = window.indexedDB.open('todos', version);

    request.onsuccess = function(e) {
      this.db = e.target.result;
    };

    request.onerror = function(e) {
      console.error(e);
    }
  }
}
