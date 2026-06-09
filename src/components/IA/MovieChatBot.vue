<template>
  <div class="filmfy-chat-container">
    <button v-if="!isOpen" @click="toggleChat" class="chat-floating-btn shadow-lg">
      <span class="chat-icon">🎬</span>
      <span class="chat-badge" v-if="unread">1</span>
    </button>

    <div v-if="isOpen" class="chat-window shadow-xl">
      <div class="chat-header">
        <div class="chat-header-info">
          <div class="chat-avatar">🤖</div>
          <div>
            <h4>Filmfy AI</h4>
            <span class="status-online">En línea</span>
          </div>
        </div>
        <button @click="toggleChat" class="close-btn">&times;</button>
      </div>

      <div class="chat-messages" ref="messageContainer">
        <div 
          v-for="(msg, index) in messages" 
          :key="index" 
          :class="['message-wrapper', msg.sender]"
        >
          <div class="message-bubble">
            {{ msg.text }}
          </div>
        </div>
        
        <div v-if="isLoading" class="message-wrapper assistant">
          <div class="message-bubble loading-dots">
            <span>.</span><span>.</span><span>.</span>
          </div>
        </div>
      </div>

      <form @submit.prevent="sendMessage" class="chat-input-area">
        <input 
          v-model="userInput" 
          type="text" 
          placeholder="Pregúntame sobre cine..." 
          :disabled="isLoading"
        />
        <button type="submit" :disabled="!userInput.trim() || isLoading">
          ➔
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

// Si este componente se renderiza en la vista de detalle de una película,
// puedes pasarle estos props opcionalmente desde el componente padre.
const props = defineProps({
  movieTitle: { type: String, default: null },
  movieOverview: { type: String, default: null },
  movieReviews: { type: Array, default: () => [] }
});

const isOpen = ref(false);
const unread = ref(true); // Para el globito de notificación inicial
const isLoading = ref(false);
const userInput = ref('');
const messageContainer = ref(null);

const messages = ref([
  { sender: 'assistant', text: '¡Hola! Soy FilmfyAI. ¿Qué tipo de película te apetece ver hoy o de cuál quieres que hablemos?' }
]);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    unread.value = false;
    scrollToBottom();
  }
};

const scrollToBottom = async () => {
  await nextTick();
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return;

  const userText = userInput.value;
  messages.value.push({ sender: 'user', text: userText });
  userInput.value = '';
  isLoading.value = true;
  scrollToBottom();

  try {
    // Petición a nuestro backend de FastAPI hecho con uv (puerto 8000)
    const response = await fetch('http://127.0.0.1:8000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userText,
        movie_title: props.movieTitle,
        movie_overview: props.movieOverview,
        reviews: props.movieReviews
      }),
    });

    if (!response.ok) throw new Error('Error en el servidor de IA');

    const data = await response.json();
    messages.value.push({ sender: 'assistant', text: data.response });

  } catch (error) {
    console.error(error);
    messages.value.push({ 
      sender: 'assistant', 
      text: 'Vaya, parece que tengo interferencias en la proyección. ¿Está el backend encendido?' 
    });
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};
</script>

<style scoped>
/* Contenedor fijo abajo a la derecha */
.filmfy-chat-container {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Estilos del Botón Flotante */
.chat-floating-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e50914, #b20710); /* Rojo Netflix/Cine */
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background 0.2s ease;
  position: relative;
}

.chat-floating-btn:hover {
  transform: scale(1.08);
}

.chat-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 2px solid white;
}

/* Estilos de la Ventana de Chat */
.chat-window {
  width: 360px;
  height: 500px;
  background-color: #1a1a1a; /* Estilo modo oscuro */
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #333;
}

/* Cabecera del Chat */
.chat-header {
  background-color: #111;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
}

.chat-header-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-avatar {
  font-size: 24px;
}

.chat-header h4 {
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.status-online {
  font-size: 12px;
  color: #28a745;
  display: flex;
  align-items: center;
  gap: 4px;
}

.status-online::before {
  content: "●";
}

.close-btn {
  background: none;
  border: none;
  color: #aaa;
  font-size: 24px;
  cursor: pointer;
}

.close-btn:hover {
  color: #fff;
}

/* Zona de Mensajes */
.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #141414;
}

/* Burbujas de Mensajes */
.message-wrapper {
  display: flex;
  width: 100%;
}

.message-wrapper.user {
  justify-content: flex-end;
}

.message-wrapper.assistant {
  justify-content: flex-start;
}

.message-bubble {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.4;
  word-wrap: break-word;
}

.user .message-bubble {
  background-color: #e50914;
  color: white;
  border-top-right-radius: 2px;
}

.assistant .message-bubble {
  background-color: #2a2a2a;
  color: #eee;
  border-top-left-radius: 2px;
}

/* Inputs y Formulario */
.chat-input-area {
  display: flex;
  padding: 12px;
  background-color: #111;
  border-top: 1px solid #333;
  gap: 8px;
}

.chat-input-area input {
  flex: 1;
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  outline: none;
  font-size: 14px;
}

.chat-input-area input:focus {
  border-color: #e50914;
}

.chat-input-area button {
  background-color: #e50914;
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: background 0.2s;
}

.chat-input-area button:disabled {
  background-color: #444;
  cursor: not-allowed;
}

/* Efecto de puntos suspensivos cargando */
.loading-dots span {
  animation: blink 1.4s infinite both;
  font-weight: bold;
  display: inline-block;
  font-size: 18px;
}
.loading-dots span:nth-child(2) { animation-delay: .2s; }
.loading-dots span:nth-child(3) { animation-delay: .4s; }

@keyframes blink {
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
}
</style>