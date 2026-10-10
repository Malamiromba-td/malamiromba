import { redirect } from "next/navigation";

/**
 * The Press page has no content of its own — it forwards straight to the
 * press kit / media assets folder on Google Drive. Set PRESS_KIT_URL once
 * the real folder link is ready; this placeholder will 404 on Drive until
 * then.
 */
const PRESS_ASSET_KIT_URL =
  process.env.PRESS_ASSET_KIT_URL ||
  "https://drive.google.com/drive/folders/1WG8mr7IVaI93mrNGST2JXP1hmjcrIgjR";

export default function PressPage() {
  redirect(PRESS_ASSET_KIT_URL);
}
