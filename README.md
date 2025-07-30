## **Project Summary**

This project is a **simple web-based login and Todo application** built with **HTML, CSS (Bootstrap + custom styles), and JavaScript**.
It contains:

* A login page (`index.html`) where users enter a username and password.
* A Todo List page (referred to as `TodoApp.html` in the JavaScript redirect) where users can add tasks, mark them as completed, or delete them.
* **No backend/server integration** – all logic runs client-side in the browser.

---

## **Key Features**

1. **Login Screen**

   * Simple form with username and password.
   * Hardcoded authentication (username: `admin`, password: `123`).
   * Shows a welcome message on successful login and redirects to the Todo app after 2 seconds.
   * Displays an error message for incorrect credentials.

2. **Todo List App**

   * Add new tasks using an input field.
   * Mark tasks as done (highlighted).
   * Delete tasks from the list.
   * Preloaded with a few example tasks.

3. **Styling**

   * Uses **Bootstrap 5** for layout and design.
   * Custom `Style.css` for a green background login screen and styled cards.

---

## **Tech Stack**

* **Frontend:** HTML5, CSS3, Bootstrap 5
* **JavaScript:** Vanilla JS for DOM manipulation and event handling
* **No backend/server** – this is a static frontend-only project.

---

## **File Structure**

```
├── index.html        # Login page
├── TodoApp.html      # Todo list page (as referenced in Logic.js)
├── Style.css         # Custom styling
└── Logic.js          # Client-side logic for login and tasks
```

---

## **How to Run Locally**

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```
2. Open `index.html` in any modern web browser.
3. Use:

   * **Username:** admin
   * **Password:** 123
4. After successful login, you’ll be redirected to the Todo app.

---

## **License**

This project is for educational purposes. You can modify and use it freely.

---

### **Notes**

* There is no persistent storage; tasks are lost after refreshing.
* Authentication is only client-side and not secure (meant for demonstration/learning).
