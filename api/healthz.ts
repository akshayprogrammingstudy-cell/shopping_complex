export default function healthz(_req: any, res: any) {
  res.status(200).json({ status: "ok" });
}
