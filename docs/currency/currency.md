# Currency Schema

The `CurrencySchema` spec v1.0 deals with the base shape of any currency. This is implemented as follows:

<details>
<summary>Typescript</summary>

```ts
export interface Money {
  currency: string;
  amount: number;
}

```
</details>
<details>
<summary>PHP</summary>

```php
<?php
class Money {
  public string $currency;
  public int $amount;
}

```
</details>

<details>
<summary>Python</summary>

```python
    from dataclasses import dataclass

@dataclass
class Money:
    currency: str
    amount: int
```
</details>
