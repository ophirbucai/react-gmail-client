import { LucideMenu } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { EmailSearch } from "@/cmps/EmailSearch.jsx";

export function EmailHeader({ toggleCollapse }) {
    return (
        <header className="email-header">
            <button className="menu-btn" onClick={toggleCollapse}>
                <LucideMenu size="1.2rem" className="menu-icon"/>
            </button>
            <Link to="/inbox" className="email-logo">
                Logo
            </Link>
            <EmailSearch />
        </header>
    )
}