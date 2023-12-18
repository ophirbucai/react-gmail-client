import { EmailComposeBtn } from "@/cmps/EmailComposeBtn/EmailComposeBtn";
import { EmailFolderBtn } from "@/cmps/EmailFolderBtn/EmailFolderBtn";
import React, { useState } from "react";
import { LucideMenu, LucideSearch } from "lucide-react";
import { useParams, Navigate } from "react-router";

export function EmailIndex() {
    const [folders]= useState(["inbox", "starred", "sent", "drafts", "trash", "custom-label"]);
    const [emailCount] = useState({});
    const { folder: selectedFolder } = useParams();

    if (!folders.includes(selectedFolder)) {
        return <Navigate to="/inbox" replace />;
    }

    return (
        <main className="container email-index">
            <header>
                <button className="menu-btn">
                    <LucideMenu size="1.2rem" className="menu-icon" />
                </button>
                Logo
            </header>
            <aside>
                <EmailComposeBtn/>
                <div className="email-folders">
                    {folders.map(folder => <EmailFolderBtn key={folder} folder={folder} count={emailCount[folder]} />)}
                </div>
            </aside>
            <main>
                <header>
                    <label className="search-mail">
                        <LucideSearch size="1.2rem" className="search-icon" />
                        <input placeholder="Search mail" className="simple-input" />
                    </label>
                </header>
                <div>Email details</div>
            </main>
        </main>
    );
}
