# 📧 Configuración de EmailJS para Formulario de Contacto

## Paso 1: Crear Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** (Registrarse)
3. Crea tu cuenta con email y contraseña

## Paso 2: Configurar Email Service

1. Una vez dentro, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail recomendado):
   - **Gmail**: Más común y fácil
   - **Outlook**: Si prefieres Outlook
   - **Yahoo**: Si usas Yahoo
4. Conecta tu cuenta de email
5. Copia el **Service ID** (lo necesitarás después)

## Paso 3: Crear Email Template

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura tu plantilla con esta estructura:

### Asunto del Email:
```
Nuevo mensaje de contacto - {{nombre}}
```

### Contenido del Email:
```
Has recibido un nuevo mensaje desde el formulario de contacto de Alto3D Tienda:

--------------------
INFORMACIÓN DEL CONTACTO
--------------------

Nombre: {{nombre}}
Email: {{email}}
Teléfono: {{telefono}}
Asunto: {{asunto}}

--------------------
MENSAJE
--------------------

{{mensaje}}

--------------------

Este mensaje fue enviado desde: https://tu-sitio.com/contacto
Fecha: {{fecha}}
```

4. Guarda la plantilla y copia el **Template ID**

## Paso 4: Obtener Public Key

1. Ve a **"Account"** (tu perfil)
2. En la sección **"General"**, encontrarás tu **Public Key**
3. Cópiala

## Paso 5: Configurar en tu Código

Abre el archivo: `src/assets/pages/Contacto.jsx`

Busca estas líneas (alrededor de la línea 18-22):

```javascript
const result = await emailjs.sendForm(
    'YOUR_SERVICE_ID',      // Reemplazar con tu Service ID
    'YOUR_TEMPLATE_ID',     // Reemplazar con tu Template ID
    formRef.current,
    'YOUR_PUBLIC_KEY'       // Reemplazar con tu Public Key
)
```

Reemplaza con tus valores reales:

```javascript
const result = await emailjs.sendForm(
    'service_abc123',      // Tu Service ID de EmailJS
    'template_xyz789',     // Tu Template ID de EmailJS
    formRef.current,
    'tu_public_key_aqui'   // Tu Public Key de EmailJS
)
```

## Paso 6: Configurar WhatsApp

En el archivo `Contacto.jsx`, busca la línea 234:

```javascript
href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20productos%203D"
```

Reemplaza `56912345678` con tu número de WhatsApp (incluye código de país sin +):
- Chile: `569` + tu número (ej: `56987654321`)
- Argentina: `549` + tu número
- México: `521` + tu número

## Paso 7: Probar el Formulario

1. Guarda todos los cambios
2. Ve a `http://localhost:5173/contacto`
3. Llena el formulario y envía
4. Deberías recibir un email en la cuenta que configuraste

## 🎯 Resultado Final

Cuando alguien llene el formulario:
1. ✅ Recibirás un email instantáneo con todos los datos
2. ✅ El usuario verá un mensaje de confirmación
3. ✅ También pueden contactarte directamente por WhatsApp

## 📊 Límites del Plan Gratuito

- ✅ 200 emails por mes
- ✅ Gratis para siempre
- ✅ Sin tarjeta de crédito requerida

Si necesitas más, puedes:
- Actualizar a plan pagado ($15 USD/mes para 1000 emails)
- Usar múltiples cuentas EmailJS
- Implementar backend propio

## 🆘 Problemas Comunes

### Error: "Public Key is required"
- Solución: Verifica que copiaste correctamente el Public Key

### No recibo emails
- Verifica tu bandeja de spam
- Confirma que el Service esté activo en EmailJS
- Revisa que el Template ID sea correcto

### Error CORS
- EmailJS maneja esto automáticamente, pero verifica que tu dominio esté autorizado en EmailJS

## 📱 Configuración de WhatsApp Opcional

También puedes agregar tu número de WhatsApp en:
- `src/assets/pages/Contacto.jsx` (línea 94) - Sección de información
- Reemplaza `+56 9 XXXX XXXX` con tu número real

## ✨ Extra: Autorespuesta

Puedes configurar un segundo template para enviar un email automático al cliente confirmando que recibiste su mensaje.

---

¿Necesitas ayuda? Revisa la documentación oficial de EmailJS:
https://www.emailjs.com/docs/

