# System country

## API

### `useBrand()`

This hook will return the brand from the current `systemCountry`:

```ts
import { Brand, useBrand } from '@/libs/system-country';

const brand: Brand = useBrand();
```

### `getCurrentBrandFromSystemCountry()`

If you need to know the brand outside of the react context you can use `getCurrentBrandFromSystemCountry(systemCountry: string)`.

```ts
import { Brand, getCurrentBrandFromSystemCountry } from '@/libs/system-country';

const brand: Brand = getCurrentBrandFromSystemCountry('ER');
```

## How it works

In HF the main identifier for a brand / country combination is the `systemCountry`. The `systemCountry` maps to a brand and a "real" country. For example `ER` maps to the `US` `country` and the `EveryPlate` `brand`.

### Adding a new brand / country

To add new brands and countries add it to the [Brand](./Brand.ts), [Country](./Country.ts) and [brand-countries](./brandCountries.ts) configs.
