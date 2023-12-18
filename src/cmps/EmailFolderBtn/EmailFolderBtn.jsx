import { LucideAlertOctagon, LucideClock, LucideFile, LucideInbox, LucideSendHorizontal, LucideStar, LucideTag, LucideTrash2 } from "lucide-react";
import { createElement } from "react";
import { NavLink } from "react-router-dom";

const folderIcons = {
    inbox: { icon: LucideInbox },
    starred: { icon: LucideStar },
    snoozed: { icon: LucideClock },
    sent: { icon: LucideSendHorizontal },
    drafts: { icon: LucideFile },
    spam: { icon: LucideAlertOctagon },
    trash: { icon: LucideTrash2 },
    default: { icon: LucideTag, props: { strokeWidth: 1 } },
}
export function EmailFolderBtn({ folder, count }) {
    let { icon, props = {} } = folderIcons[folder] || folderIcons.default;
    props = { ...props, size: "1em", strokeWidth: 2 };

    return (
        <NavLink to={`/${folder}`} className="email-folder-btn">
            {createElement(icon, props)}
            <span className="email-folder-name">{folder.replaceAll('-', ' ')}</span>
            {count !== undefined && <span className="email-count">{count}</span>}
        </NavLink>
    );
}