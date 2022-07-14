# Authorization

Authorization is a process of granting a user access to content.

## Methods

- [IP](ip.md) - by the client IP address
- [Securetoken](securetoken.md) - temporary links with token
- [Backend](backend.md) - with external service
    - [Ministra/Stalker](backend.md#ministrastalker)
    - [IptvPortal](backend.md#iptvportal)
    - [Smarty](backend.md#microimpulse-smarty)
    - [Simple Backend with PHP](backend.md#simple-backend-with-php)

## Priority

All methods works in next order:

1. `IP` - skips to the next method if IP in the skip-rule or not relate to any rule
2. `Securetoken` - skips to the next method if token format is not match
3. `Backend` - skips to the next method if backend is not available
4. `Default` - default action. If not set, `allow` is used.
