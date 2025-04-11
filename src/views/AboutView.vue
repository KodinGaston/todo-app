<template>
  <div class="about">
    <div class="about-container">
      <h1>📌 To Do App 💫</h1>
      <p>
        Welcome to my <strong>To Do App</strong>, It's a simple yet powerful application designed to help you manage your daily tasks efficiently.
      </p>

      <h2>🚀 Features</h2>
      <ul>
        <li>✔️ Add new tasks</li>
        <li>✔️ Mark tasks as completed</li>
        <li>✔️ Remove specific tasks</li>
        <li>✔️ Reset the entire task list</li>
        <li>✔️ Auto-save in the browser</li>
      </ul>

      <h2>⚙️ Technologies Used</h2>
      <p>This app is built using:</p>
      <ul>
        <li>🟢 <strong>Vue 3</strong> - Makes the app super fast and smooth, so your to-do list responds instantly.</li>
        <li>🔵 <strong>Pinia</strong> - Ensures your tasks stay saved, even when you navigate between pages.</li>
        <li>🎨 <strong>SCSS</strong> - Gives the app a modern and stylish look while keeping everything clean.</li>
        <li>🌍 <strong>Vue Router</strong> - Lets you switch between pages without losing your tasks or refreshing the app.</li>
      </ul>

      <h2>📩 Contact</h2>
      <p>If you have any questions or suggestions, feel free to reach out:</p>
      <p><strong>Email:</strong> <a href="mailto:koding@duck.com">koding@duck.com</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";

$primary-color: #5a41fd;
$secondary-color: #ffd700;
$text-color: #060606;
$bg-color: #f4f4f4;

.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bg-color;
  padding: 2rem;
  text-align: center;
}

.about-container {
  max-width: 700px;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: $text-color;

  h1, h2 {
    color: $primary-color;
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      background: color.adjust($secondary-color, $lightness: 20%);
      margin: 0.5rem 0;
      padding: 0.5rem;
      border-radius: 5px;
    }
  }

  a {
    color: $primary-color;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

/* Responsive Design */
@media screen and (max-width: 600px) {
  .about-container {
    padding: 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    text-align: left;
  }

  li {
    font-size: 1rem;
    font-weight: bold;
  }
}

@media screen and (max-width: 400px) {
  .about {
    padding: 1rem;
  }

  .about-container {
    padding: 1rem;
  }

  h1 {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 1.1rem;
  }

  p, li {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 200px) {
  .about {
    padding: 0.5rem;
  }

  .about-container {
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.1rem;
  }

  h2 {
    font-size: 1rem;
  }

  p, li {
    font-size: 0.8rem;
  }
}
</style>
