# 🖥️ NEOX VM LAB — SERVERS

**NEOX VM LAB Servers** es la edición orientada a servidores del proyecto NEOX VM LAB. Su interfaz prioriza una terminal y paneles de administración en lugar de un escritorio tradicional.

> ⚠️ **Estado:** laboratorio experimental. No es un servidor de producción.

## 🎯 Objetivo

Crear un entorno ligero para experimentar con servicios de servidor, comandos, monitorización, red y administración desde navegador.

## 🧱 Diseño

```text
NEOX SERVER
│
├── Terminal
├── System Status
├── Services
├── Network
├── Storage
├── Logs
└── Server Settings
```

## 💻 Terminal

Ejemplo de sesión:

```text
neox@server:~$ status

CPU:       12%
RAM:       1.2 GB
DISK:      8.4 GB
NETWORK:   ONLINE
UPTIME:    00:42:18

neox@server:~$
```

Los comandos del laboratorio serán simulados inicialmente en la versión web. No se deben ejecutar comandos arbitrarios del sistema host desde la interfaz pública.

## 📊 Panel de servidor

- CPU
- RAM
- almacenamiento
- uptime
- red
- procesos simulados
- servicios activos
- logs

## 🔌 Servicios

El laboratorio podrá representar servicios como:

- Web Server
- API Server
- Database
- File Server
- DNS
- SSH
- Custom Service

En la primera etapa estos servicios serán simulados. Las integraciones reales se añadirán únicamente mediante componentes backend explícitos.

## 🌐 Web Lab

La interfaz web permitirá probar el concepto desde un navegador y podrá publicarse mediante GitHub Pages.

GitHub Pages sirve la interfaz; no proporciona por sí mismo un servidor Linux real ni acceso al hardware.

## 🧪 Roadmap

### Fase 1 — Server UI
- [x] Crear repositorio
- [ ] Terminal web
- [ ] Panel de estado
- [ ] Reloj/uptime
- [ ] Menú de servicios

### Fase 2 — Server Simulator
- [ ] Sistema de comandos
- [ ] Sistema de archivos virtual
- [ ] Logs
- [ ] Gestión de servicios
- [ ] Red simulada
- [ ] Usuarios

### Fase 3 — Server Runtime
- [ ] Definir runtime real
- [ ] Contenedores de prueba
- [ ] API de administración
- [ ] Integración con NEOX VM LAB

### Fase 4 — VM
- [ ] Imagen experimental
- [ ] Pruebas en VirtualBox
- [ ] Pruebas en VMware
- [ ] Integración con `NEOX-VM-LAB-isos`

## 🗂️ Repositorios relacionados

| Repositorio | Función |
|---|---|
| `NEOX-VM-LAB` | Sistema de escritorio |
| `NEOX-VM-LAB-Servers` | Sistema orientado a servidores |
| `NEOX-VM-LAB-isos` | ISO y herramientas de imagen |

## 📜 Licencia

MIT License

**NEOX VM LAB Servers — Server Laboratory** 🖥️