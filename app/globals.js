@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen;
}

.chat-container {
  @apply w-full max-w-xl bg-gray-800 rounded-2xl shadow-lg p-4 space-y-4;
}

.bubble {
  @apply p-3 rounded-lg max-w-xs;
}

.bubble-user {
  @apply bg-blue-500 self-end text-white;
}

.bubble-ai {
  @apply bg-gray-700 self-start text-gray-100;
}
