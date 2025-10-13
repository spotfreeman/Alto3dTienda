# 📬 Sistema de Notificaciones - Alto3D Tienda

## 🎯 ¿Qué se ha implementado?

Tu tienda ahora tiene **2 formas de recibir consultas de clientes**:

### 1. 📧 Formulario con EmailJS
- Formulario de contacto completamente funcional
- Recibe emails automáticamente cuando alguien llena el formulario
- Sistema de confirmación visual para el usuario
- Estado de carga mientras envía

### 2. 💬 WhatsApp Directo
- Botón flotante visible en TODAS las páginas
- Permite contacto inmediato desde cualquier parte de la web
- Botón adicional en la página de contacto
- Enlaces directos con mensaje predefinido

---

## 🚀 Configuración Rápida (15 minutos)

### Paso 1: Configurar EmailJS

1. **Regístrate gratis**: [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Crea un servicio de email** (conecta tu Gmail/Outlook)
3. **Crea una plantilla** de email
4. **Obtén 3 códigos**:
   - Service ID
   - Template ID  
   - Public Key

5. **Configura en tu código**:
   ```javascript
   // Archivo: src/assets/pages/Contacto.jsx (línea 18-22)
   
   const result = await emailjs.sendForm(
       'service_XXXXX',    // ← Tu Service ID aquí
       'template_XXXXX',   // ← Tu Template ID aquí
       formRef.current,
       'XXXXXXXXXXX'       // ← Tu Public Key aquí
   )
   ```

### Paso 2: Configurar WhatsApp

1. **Actualiza tu número en 2 lugares**:

   **Lugar 1: Botón flotante**
   ```javascript
   // Archivo: src/components/WhatsAppButton.jsx (línea 2)
   
   const phoneNumber = "56912345678";  // ← Cambia por tu número
   ```

   **Lugar 2: Página de contacto**
   ```javascript
   // Archivo: src/assets/pages/Contacto.jsx (línea 234)
   
   href="https://wa.me/56912345678?text=..."  // ← Cambia por tu número
   ```

2. **Formato del número**:
   - Chile: `569` + tu número (ej: `56987654321`)
   - Sin espacios, sin guiones, sin +

---

## ✨ Características Implementadas

### Formulario de Contacto (`/contacto`)

✅ **Campos del formulario**:
- Nombre completo
- Email
- Teléfono (opcional)
- Asunto (dropdown con opciones)
- Mensaje

✅ **Funcionalidades**:
- Validación de campos
- Botón deshabilitado mientras envía
- Mensaje de éxito/error
- Limpieza automática después de enviar
- Botón de WhatsApp alternativo

### Botón Flotante de WhatsApp

✅ **Características**:
- Visible en TODAS las páginas
- Posición fija en esquina inferior derecha
- Efecto hover con tooltip
- Animación de pulso para llamar la atención
- Abre WhatsApp con mensaje predefinido

---

## 📊 ¿Cómo Funciona?

### Flujo del Formulario:
```
Usuario llena formulario
    ↓
Usuario hace clic en "Enviar"
    ↓
Se muestra "Enviando..."
    ↓
EmailJS envía el email a tu correo
    ↓
Usuario ve mensaje de confirmación
    ↓
¡Recibes el email instantáneamente!
```

### Flujo de WhatsApp:
```
Usuario hace clic en botón de WhatsApp
    ↓
Se abre WhatsApp Web/App
    ↓
Mensaje predefinido aparece automáticamente
    ↓
Usuario solo presiona enviar
    ↓
¡Conversación iniciada!
```

---

## 🎨 Ubicaciones del Botón WhatsApp

1. **Botón flotante**: Esquina inferior derecha (en todas las páginas)
2. **Página de contacto**: Dentro del formulario
3. **Información de contacto**: Sección de datos

---

## 🔧 Personalización

### Cambiar mensaje predefinido de WhatsApp:

**Botón flotante** (`src/components/WhatsAppButton.jsx`):
```javascript
const message = "Tu mensaje personalizado aquí";
```

**Página de contacto** (`src/assets/pages/Contacto.jsx`):
```javascript
href="https://wa.me/56912345678?text=Tu%20mensaje%20personalizado"
```

### Cambiar colores del botón WhatsApp:

```javascript
// Verde predeterminado
className="bg-green-500 hover:bg-green-600"

// Cambiar a otro color (ej: azul)
className="bg-blue-500 hover:bg-blue-600"
```

---

## 📱 Pruebas

### Probar EmailJS:
1. Ve a `/contacto`
2. Llena el formulario
3. Haz clic en "Enviar Mensaje"
4. Revisa tu email (y spam si no llega)

### Probar WhatsApp:
1. Haz clic en el botón flotante verde
2. Verifica que se abra WhatsApp
3. Verifica que aparezca el mensaje predefinido
4. **NOTA**: Funciona mejor en móvil o con WhatsApp Desktop instalado

---

## 🆓 Planes y Límites

### EmailJS (Plan Gratuito):
- ✅ 200 emails/mes
- ✅ Gratis para siempre
- ✅ Sin tarjeta de crédito
- 📊 Si necesitas más: $15/mes para 1000 emails

### WhatsApp:
- ✅ Completamente gratis
- ✅ Sin límites
- ✅ Ideal para negocios pequeños y medianos

---

## 🎯 Ventajas de Esta Implementación

### Para ti:
1. ✅ **Recibes notificaciones inmediatas** por email
2. ✅ **Contacto directo por WhatsApp** sin intermediarios
3. ✅ **No necesitas backend** ni servidor
4. ✅ **Gratis** (hasta 200 emails/mes)
5. ✅ **Fácil de mantener**

### Para tus clientes:
1. ✅ **2 formas de contacto** (email y WhatsApp)
2. ✅ **Respuesta rápida** garantizada
3. ✅ **Fácil de usar**
4. ✅ **Visible desde cualquier página**

---

## 🚨 Solución de Problemas

### "No recibo los emails"
1. Verifica que configuraste correctamente los 3 códigos de EmailJS
2. Revisa tu carpeta de SPAM
3. Confirma que el servicio esté activo en EmailJS.com
4. Verifica la consola del navegador (F12) para errores

### "El botón de WhatsApp no funciona"
1. Verifica que tu número esté en formato correcto (sin + ni espacios)
2. En computadora, necesitas WhatsApp Desktop o WhatsApp Web abierto
3. En móvil debe funcionar directamente

### "Error al enviar formulario"
1. Abre la consola del navegador (F12)
2. Busca el error específico
3. Verifica tu conexión a internet
4. Confirma que EmailJS esté configurado

---

## 📚 Documentación Adicional

- **EmailJS**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **WhatsApp Business API**: [https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat)

---

## 🎉 ¡Todo Listo!

Una vez que configures EmailJS y tu número de WhatsApp, tu tienda estará 100% lista para recibir consultas de clientes. 

**Tiempo estimado de configuración**: 15-20 minutos

¿Necesitas ayuda? Revisa el archivo `CONFIGURACION_EMAILJS.md` para instrucciones paso a paso con imágenes.

