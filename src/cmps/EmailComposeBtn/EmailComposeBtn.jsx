import { LucidePencil } from "lucide-react";

export function EmailComposeBtn() {
  return (
      <button className="compose-btn">
          <LucidePencil size="1.2em" className="compose-btn-icon" />
          Compose
      </button>
  );
}