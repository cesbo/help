---
title: OTT Authorization
sidebar:
    order: 3
---

Authorization is a process of granting a user access to protected content.

## Methods

- [IP](/en/alta/ott-settings/auth-ip/) - by the client IP address
- [Securetoken](/en/alta/ott-settings/auth-securetoken/) - temporary links with token
- [HTTP Backend](/en/alta/ott-settings/auth-backend/) - with external service

## Priority

All methods works in next order:

1. **IP**: skips to the next method if IP in the skip-rule or not relate to any rule
1. **Securetoken**: skips to the next method if token format is not match
1. **Backend**: skips to the next method if backend is not available
1. **Default**: default action. If not set, access will be allowed
