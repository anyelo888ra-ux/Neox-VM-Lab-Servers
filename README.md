# 🖥️ NEOX VM LAB — SERVERS

**NEOX VM LAB Servers** es el laboratorio web de la edición de servidores NEOX. La versión actual **0.2.0** añade más comandos de diagnóstico y un panel de logs simulado.

> ⚠️ **Estado:** laboratorio experimental. No es un servidor de producción.

## ✨ Versión 0.2

Paneles:
- Terminal
- Status
- Services
- Logs

Comandos:

`help`
`status`
`services`
`logs`
`processes`
`network`
`storage`
`uptime`
`version`
`clear`

Todo funciona dentro del simulador web. No se ejecutan comandos arbitrarios en el equipo anfitrión.

## 🧱 Diseño

```text
NEOX SERVER
├── Terminal
├── System Status
├── Services
├── Logs
├── Network
├── Storage
└── Server Settings
```

## 🧪 Roadmap

### Server UI
- [x] Terminal web
- [x] Panel de estado
- [x] Reloj/uptime
- [x] Servicios
- [x] Logs

### Server Simulator
- [x] Sistema de comandos
- [ ] Sistema de archivos virtual
- [ ] Gestión de servicios simulada
- [ ] Usuarios
- [ ] Red simulada ampliada

### Server Runtime
- [ ] Runtime real
- [ ] Contenedores de prueba
- [ ] API de administración
- [ ] Integración con NEOX VM LAB

## 🗂️ Repositorios relacionados

| Repositorio | Función |
|---|---|
| `Neox-VM-Lab` | Sistema de escritorio |
| `Neox-VM-Lab-Servers` | Sistema orientado a servidores |
| `Neox-VM-Lab-isos` | ISO e instalador experimental |

## 📜 Licencia

MIT License