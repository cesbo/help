# Storage Behavior

**Storage is cleared:**
- When changing the storage assigned to a channel.
- When detaching storage from a channel.
- When deleting storage from a channel.
- When storage is deleted in settings or its path is edited.

**Storage is preserved:**
- When restarting a channel or receiver (data in storage remains unchanged).
- When changing HLS segment duration (length of new segments increases gradually).