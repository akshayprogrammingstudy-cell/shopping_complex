import { getStorefrontSummary } from "../server/lib/store";

export default async function storefrontSummary(
  _req: any,
  res: any,
) {
  try {
    res.status(200).json(await getStorefrontSummary());
  } catch (error) {
    console.error("[API] Storefront summary failed:", error);
    res.status(500).json({ error: "Failed to fetch storefront summary" });
  }
}
