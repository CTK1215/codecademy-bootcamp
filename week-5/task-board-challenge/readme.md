# DOM Challenge — Interactive Task Board

Build a small task board that allows a user to add and manage tasks.

## Starter HTML

You may modify the HTML if needed, but **do not write any JavaScript directly inside the HTML**.

```html
<h1>Task Board</h1>

<div class="task-form">
    <input id="taskInput" type="text" placeholder="Enter a task">

    <select id="priority">
        <option value="normal">Normal</option>
        <option value="important">Important</option>
        <option value="urgent">Urgent</option>
    </select>

    <button id="addBtn">Add Task</button>
</div>

<p id="taskCount">0 tasks remaining</p>

<ul id="taskList"></ul>
```

---

## Requirements

### 1. Add a Task

When the **Add Task** button is clicked:

- Get the value from `taskInput`
- Create a new `<li>`
- Set its text to the task entered by the user
- Add the new `<li>` to `taskList`
- Clear the input

Do not allow an empty task to be added.

---

### 2. Priority

Check the selected value from the `priority` dropdown.

Add the appropriate class to the new task:

- `normal`
- `important`
- `urgent`

Create CSS rules that visually distinguish the three priorities.

---

### 3. Complete a Task

When a task is clicked:

- Toggle a class called `completed`

Use CSS to make completed tasks visually different.

For example:

```css
.completed {
    text-decoration: line-through;
    opacity: 0.5;
}
```

Clicking the task again should mark it as incomplete.

---

### 4. Delete a Task

Every task should also contain a **Delete** button.

Your generated HTML might eventually look something like:

```html
<li>
    Wash the car
    <button>Delete</button>
</li>
```

When the **Delete** button is clicked:

- Remove that task from the DOM

---

### 5. Task Counter

Update `taskCount` whenever:

- A task is added
- A task is completed
- A completed task is made incomplete
- A task is deleted

The counter should show the number of **incomplete** tasks.

Example:

```text
3 tasks remaining
```

---

# 🌶️ Spicy Mode

## Enter Key

Allow the user to add a task by pressing `Enter` while inside the task input.

---

## Clear Completed

Add a button:

```html
<button id="clearCompletedBtn">Clear Completed</button>
```

When clicked:

- Find every element with the `completed` class
- Remove those elements from the DOM
- Update the task counter

---

## Empty Message

If there are no tasks, display:

```text
No tasks yet.
```

Once a task is added, remove the message.

If every task is deleted, make the message appear again.

---

# Concepts You Will Practice

- Selecting DOM elements
- `addEventListener()`
- Reading input values
- `createElement()`
- `append()` / `appendChild()`
- `classList.add()`
- `classList.toggle()`
- `querySelector()`
- `querySelectorAll()`
- Removing DOM elements
- Working with click events
- Working with keyboard events