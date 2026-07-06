# Geographic Master Guide — Shop Inventory Pack

Generated: 2026-07-05T02:13:35.596568+00:00

## Scope

This pack contains extensive inventories for every shop placed in the 341 basic area maps.

- Shops covered: 460
- Inventory rows: 18420
- Active inventory per shop: 15–25 items
- Swap-pool items per shop: 15 items
- Exclusive low-chance rare pool per shop: 3 Legendary + 2 Mythological items

## Storyline level progression used

Expected first-visit levels were inferred from a campaign flow of:
Urban Core → Western Wastes / Eastern Wilds → Deep Transit System → Geothermal Abyss → Cosmic Layer.

Each inventory is scaled to the sub-location's expected first-visit level, with legendary and mythological items requiring higher levels.

## Hidden stash / swap mechanic

Each shop has an active inventory and a rotating swap pool.

On shop refresh:
1. A swap-pool item may roll into the visible inventory.
2. It replaces one active item.
3. The displaced active item moves into that shop's hidden stash.
4. Later refreshes may pull the hidden-stash item back into active inventory.

Legendary and mythological items use the same replacement rule, but at much lower appearance chances.

## Files

- `shop_inventory_master.csv` — all shop inventories in one table.
- `shop_summary.csv` — one row per shop with counts.
- `json/shop_inventory_master.json` — full structured inventory data.
- `per_sub_location_markdown/` — readable Markdown inventory files, one per sub-location.
- `validation_summary.json` — validation counts.
