<div align="center">
  <picture>
    <img alt="MehguViewer Logo" src="public/thumbnail.png" width="400">
  </picture>
</div>

# <picture><img alt="MehguViewer Logo" src="public/logo-light.png" height="32"></picture> MehguViewer.Proto <picture><img alt="MehguViewer Logo" src="public/logo-dark.png" height="32"></picture>

> **The Constitution of the MehguViewer Ecosystem.**

[![Docs](https://img.shields.io/badge/Documentation-Live-3b82f6?style=flat-square)](https://proto.mehguviewer.kazeo.xyz)
[![CI](https://img.shields.io/github/actions/workflow/status/MehguViewer/MehguViewer.Proto/ci.yml?style=flat-square&label=Validation)](https://github.com/MehguViewer/MehguViewer.Proto/actions)

**MehguViewer.Proto** contains the strict specifications, OpenAPI definitions, and architectural documentation that all MehguViewer implementations must adhere to. If it is not in this repo, it does not exist.

---

### **Quick Links**

| Resource | Description |
| :--- | :--- |
| 📘 **[Documentation](https://proto.mehguviewer.kazeo.xyz/docs)** | The concepts, trust models, and logical flow. |
| 🔒 **[Auth API Spec](https://proto.mehguviewer.kazeo.xyz/api-reference/auth)** | OIDC, Token exchange, and Global Preferences. |
| 📚 **[Core API Spec](https://proto.mehguviewer.kazeo.xyz/api-reference/core)** | Series data, Comment snapshots, and Asset delivery. |

---

### **Primary Standards**

Implementations of MehguViewer must respect the following standards defined in this repository:

#### **1. Universal Resource Names (URNs)**
We do not use raw integers or UUIDs. All IDs must follow the URN schema to facilitate Federation.
- `urn:mvn:user:{uuid}`
- `urn:mvn:series:{uuid}`
- `urn:mvn:asset:{hash}`

#### **2. Separation of Duty**
- **Auth Server:** Handles Identity. It **never** stores Manga or Comments.
- **Core Node:** Handles Content. It **never** stores User Passwords or Emails.

#### **3. RFC 7807 Error Handling**
All APIs must return strictly typed Problem Details:
```json
{
  "type": "urn:mvn:error:not-found",
  "title": "Series Not Found",
  "status": 404,
  "detail": "The series with ID urn:mvn:series:xyz does not exist on this node.",
  "instance": "/api/v1/series/xyz"
}
```

---

### **Development**

This repository is built using [Fumadocs](https://fumadocs.vercel.app).

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The OpenAPI specifications are located in:
- `./openapi/auth/openapi.yaml`
- `./openapi/core/openapi.yaml`

Any changes to YAML files are automatically validated against the schema on Push.

---

<div align="center">
  <sub>MehguViewer.Proto &copy; 2025</sub>
</div>