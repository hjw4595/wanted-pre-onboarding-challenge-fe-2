/**
 * todo item
 * @constructor
 * @param {number} todoid - The id of the TodoItem
 * @param {string} content - The content of the TodoItem
 * @param {boolean} isComplete - The complete check of the TodoItem
 * @param {string} category - The category of the TodoItem
 * @param {obj | undefined} tags - The tags of the TodoItem
 */
function todo(id, content, isComplete, category, tags) {}

/**
 * create todo item
 * @param {number} todoid
 * @param {string} content
 * @param {boolean} isComplete
 * @param {string} category
 * @see {tags}
 */
function createTodo(id, content) {}

/**
 * detail todo item
 * @see {todo}
 * @param {number} id - The id of the todo item
 */
function detailTodo(id) {}

/**
 * update todo item
 * @see {todoid} - The id of the TodoItem
 * @param {string} content - The content of the TodoItem
 * @param {boolean} isComplete - The complete check of the TodoItem
 * @param {string} category - The category of the TodoItem
 * @param {obj} tags - The tags of the TodoItem
 */
function updateTodo(content, isComplete, category, tags) {}

/**
 * delete todo
 * @param {todoid}
 */
function deleteTodo(todoid) {}

/**
 * delete todo all
 * @see {todo}
 */
function deleteAllTodo() {}

/**
 * tag item
 * @constructor
 * @param {number} tagid - The id of the TodoItem
 * @param {string} tag - The content of the TodoItem
 */
function tags(id, tag) {}

/**
 * update tag
 * @see {tags}
 * @param {number} id - The id of the TodoItem
 */
function updateTags(id) {}

/**
 * delete tag
 * @see {todo}
 * @param {todoid}
 * @param {tagid} - The id of the tag
 */
function deleteTags(todoid, tagid) {}

/**
 * delete tag all
 * @see {tags}
 * @param {id} - The id of the todo item
 */
function deleteAllTags(id) {}
