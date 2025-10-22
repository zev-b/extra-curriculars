# Key Differences:

- interfaces only describe the shape of **objects**.

- interfaces can be reopened and added on, not by types.

- `extends` works only by interface, types need intersecting `&` to extend.



| Interfaces | Types |
| ---------- | -----:|
| only describe the shape of **objects** | literal and primitive types as well |
| can be reopened and added on | X (only `&`) |
| `extends` | `&` |
| `interface Face extends Foot {}` | `type Face = Foot & {}`
| **No** `=` used | uses `=` |
| `interface Name {}` | `type Name = {}` | 