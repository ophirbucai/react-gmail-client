import { LucidePencil } from "lucide-react";

export function EmailComposeBtn() {
    return (
        <button className="compose-btn">
            <div className="compose-icon">
                <LucidePencil size="1.2rem" className="compose-btn-icon"/>
            </div>
            <span className="compose-text">Compose</span>
        </button>
    );
}