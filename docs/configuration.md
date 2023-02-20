---
sidebar_position: 3
---

# Configuration

```toml
[smtp]
listen = ":smtp"

[submission]
listen = ":submission"

[submissions]
listen = ":465"

[tls]
key = "tls-key.pem"
cert = "tls-cert.pem"

[extensions]
[extensions."auth"]
methods = ["plain"]
```
