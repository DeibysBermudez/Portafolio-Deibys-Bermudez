# Portafolio Personal - Deibys Bermudez

Un portafolio moderno y responsive creado con HTML, CSS y JavaScript puro.

## 🚀 Características

- ✨ Diseño moderno y atractivo
- 📱 Completamente responsive (móvil, tablet, desktop)
- 🎨 Animaciones suaves y transiciones
- 🎯 Navegación suave entre secciones
- 💼 Sección de proyectos destacados
- 🛠️ Sección de habilidades técnicas
- 📧 Formulario de contacto
- 🌙 Tema oscuro elegante

## 📁 Estructura del Proyecto

```
Portafolio Deibys Bermudez/
│
├── index.html      # Estructura principal del portafolio
├── styles.css      # Estilos y diseño
├── script.js       # Funcionalidad e interactividad
└── README.md       # Este archivo
```

## 🎨 Personalización

### 1. Información Personal

Edita `index.html` y actualiza:

- **Nombre**: Busca "Deibys Bermudez" y reemplázalo
- **Descripción**: Modifica los textos en la sección "Sobre Mí"
- **Estadísticas**: Ajusta los números en la sección de estadísticas
- **Contacto**: Actualiza email, teléfono y ubicación en la sección de contacto
- **Redes sociales**: Agrega tus enlaces de LinkedIn, GitHub, Twitter, etc.

### 2. Proyectos

En la sección de proyectos, actualiza cada tarjeta de proyecto:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Agrega tu imagen del proyecto aquí -->
    </div>
    <div class="project-info">
        <h3>Nombre de tu Proyecto</h3>
        <p>Descripción del proyecto</p>
        <div class="project-tags">
            <span class="tag">Tecnología 1</span>
            <span class="tag">Tecnología 2</span>
        </div>
    </div>
</div>
```

**Para agregar imágenes de proyectos:**
- Reemplaza el `<div class="placeholder-image">` con:
```html
<img src="ruta/a/tu/imagen.jpg" alt="Nombre del proyecto">
```

### 3. Habilidades

Modifica las habilidades en la sección correspondiente:

- Cambia los iconos (Font Awesome)
- Ajusta los porcentajes en `data-width` (0-100)
- Agrega o elimina habilidades según necesites

### 4. Colores

En `styles.css`, puedes cambiar los colores en las variables CSS:

```css
:root {
    --primary-color: #6366f1;    /* Color principal */
    --secondary-color: #8b5cf6;  /* Color secundario */
    --accent-color: #ec4899;      /* Color de acento */
    /* ... más colores */
}
```

### 5. Foto de Perfil

Reemplaza el placeholder de imagen en "Sobre Mí":

```html
<div class="about-image">
    <img src="tu-foto.jpg" alt="Deibys Bermudez" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
</div>
```

## 📧 Formulario de Contacto

El formulario actualmente muestra una alerta. Para que funcione realmente, puedes:

1. **EmailJS** (Recomendado - Gratis):
   - Regístrate en https://www.emailjs.com/
   - Sigue su documentación para integrarlo

2. **Formspree**:
   - Regístrate en https://formspree.io/
   - Cambia el `action` del formulario

3. **Backend propio**:
   - Crea un endpoint en tu servidor
   - Envía los datos con fetch API

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador
2. O usa un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```
3. Visita `http://localhost:8000`

## 📱 Responsive

El portafolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎯 Próximos Pasos

1. Personaliza toda la información con tus datos
2. Agrega tus proyectos reales con imágenes
3. Configura el formulario de contacto
4. Agrega tu foto de perfil
5. Sube a GitHub Pages, Netlify, Vercel o tu hosting preferido

## 📝 Notas

- Los iconos usan Font Awesome (CDN)
- Todas las animaciones están optimizadas
- El código está comentado para facilitar la personalización

## 🌐 Despliegue

Puedes subir tu portafolio a:

- **GitHub Pages**: Gratis, fácil de configurar
- **Netlify**: Drag & drop, gratis
- **Vercel**: Rápido y fácil
- **Firebase Hosting**: Gratis con buena performance

¡Buena suerte con tu portafolio! 🎉

