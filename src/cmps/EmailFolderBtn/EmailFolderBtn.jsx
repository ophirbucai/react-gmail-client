import { LucideAlertOctagon, LucideClock, LucideFile, LucideInbox, LucideSendHorizontal, LucideStar, LucideTrash2 } from "lucide-react";
import { createElement } from "react";
import { NavLink } from "react-router-dom";

const folders = {
    inbox: "Inbox",
    starred: "Starred",
    snoozed: "Snoozed",
    sent: "Sent",
    drafts: "Drafts",
    spam: "Spam",
    trash: "Trash",
}

const folderIcons = {
    inbox: LucideInbox,
    starred: LucideStar,
    snoozed: LucideClock,
    sent: LucideSendHorizontal,
    drafts: LucideFile,
    spam: LucideAlertOctagon,
    trash: LucideTrash2,
}
export function EmailFolderBtn({ folder, count }) {
    return (
        <NavLink to={`/${folder}`} className="email-folder-btn">
            {createElement(folderIcons[folder], { size: "1em", strokeWidth: 2 })}
            <span className="email-folder-name">{folders[folder]}</span>
            {count !== undefined && <span className="email-count">{count}</span>}
        </NavLink>
    );
}