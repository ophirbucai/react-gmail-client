import React, { useState } from "react";
import { useParams, Navigate } from "react-router";
import { EmailSidebar } from "@/cmps/EmailSidebar.jsx";
import { EmailHeader } from "@/cmps/EmailHeader.jsx";
import cx from "@/utils/cx.js";

export function EmailIndex() {
    const [collapsed, setCollapsed] = useState(false);
    const [folders]= useState(["inbox", "starred", "sent", "drafts", "trash", "custom-label"]);
    const [emailCount] = useState({ inbox: 5, starred: 2, sent: 3, drafts: 1, trash: 0, "custom-label": 0 });
    const { folder: selectedFolder } = useParams();

    if (!folders.includes(selectedFolder)) {
        return <Navigate to="/inbox" replace />;
    }


    return (
        <div className={cx("container email-index", { collapsed })}>
            <EmailHeader toggleCollapse={() => setCollapsed(!collapsed)} />
            <EmailSidebar collapsed={collapsed} folders={folders} emailCount={emailCount} />
            <main className="email-details">
                <div>Email details</div>
            </main>
        </div>
    );
}
