# Guía de Despliegue - Alto3D Tienda

Esta guía te ayudará a desplegar la aplicación en tu servidor VPS utilizando Docker y configurándola como un subdominio.

## Pre-requisitos
- Servidor VPS (Ubuntu/Debian recomendado)
- Docker y Docker Compose instalados
- Git instalado
- Un dominio configurado (y un gestor de Proxy Inverso como Nginx Proxy Manager, recomendado).

## Paso 1: Obtener el Código en el Servidor

Conéctate a tu servidor vía SSH y clona el repositorio (o haz pull si ya existe):

```bash
# Si es la primera vez
git clone https://github.com/spotfreeman/Alto3dTienda.git
cd Alto3dTienda

# Si ya tienes la carpeta
cd Alto3dTienda
git pull origin main
```

## Paso 2: Iniciar la Aplicación

Hemos configurado el proyecto para funcionar en el puerto **8081** para no entrar en conflicto con otros servicios.

Ejecuta el siguiente comando para construir y levantar el contenedor:

```bash
docker compose up --build -d
```

Verifica que esté corriendo:
```bash
docker ps
# Deberías ver un contenedor llamado "TiendaAlto3d" corriendo en el puerto 8081.
```

## Paso 3: Configurar el Subdominio (Reverse Proxy)

Ahora necesitas conectar tu subdominio (ej: `tienda.tudominio.com`) al puerto 8081 de tu servidor.

### Opción A: Usando Nginx Proxy Manager (Recomendado)
1. Entra a tu panel de Nginx Proxy Manager.
2. Haz clic en **"Add Proxy Host"**.
3. **Details**:
   - **Domain Names**: `tienda.tudominio.com` (reemplaza con tu subdominio real)
   - **Scheme**: `http`
   - **Forward Hostname / IP**: `host.docker.internal` (o la IP local de tu servidor, ej: `172.17.0.1`)
   - **Forward Port**: `8081`
   - **Cache Assets**: activado (opcional)
   - **Block Common Exploits**: activado
4. **SSL**:
   - Pestaña SSL -> "Request a new SSL Certificate"
   - Activa "Force SSL" y "HTTP/2 Support".
5. Guarda.

### Opción B: Usando Nginx Manualmente
Si usas Nginx directamente, crea un bloque de servidor:

```nginx
server {
    server_name tienda.tudominio.com;

    location / {
        proxy_pass http://localhost:8081;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Solución de Problemas

- **Si el puerto 8081 está ocupado**:
  Edita `docker-compose.yml` y cambia `8081:80` por otro puerto, ej: `8082:80`. Luego reinicia con `docker compose up -d`.

- **Ver logs**:
  ```bash
  docker logs -f TiendaAlto3d
  ```
