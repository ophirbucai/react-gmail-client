import { EmailComposeBtn } from "../../cmps/EmailComposeBtn/EmailComposeBtn";
import { EmailFolderBtn } from "../../cmps/EmailFolderBtn/EmailFolderBtn";
import React from "react";
import { LucideMenu, LucideSearch } from "lucide-react";
import { useParams, Navigate } from "react-router";

export function EmailIndex() {
    const folders= ["inbox", "starred", "sent", "drafts", "trash"];
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
                    {folders.map(folder => <EmailFolderBtn folder={folder} />)}
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
